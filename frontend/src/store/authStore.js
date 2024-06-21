import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { loginRequest, registerRequest, resetPasswordRequest, updateUserDataRequest } from '../api/auth';

// Función para decodificar el JWT y obtener el perfil del usuario
function parseJWT(token) {
  const parts = token.split('.');
  const payload = parts[1];
  const decodedPayload = atob(payload);
  return JSON.parse(decodedPayload);
}

export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      profile: null,
      isAuth: false,
      errors: null,
      setToken: (token) => {
        const profile = parseJWT(token);
        set(() => ({
          token,
          profile,
          isAuth: !!token
        }));
      },
      login: async (data) => {
        const resLogin = await loginRequest(data);
        if (resLogin && resLogin.access_token) {
          const token = resLogin.access_token;
          const profile = parseJWT(token);
          set(() => ({
            token,
            profile,
            isAuth: true
          }));
        } else {
          throw new Error('Invalid response format from login API');
        }
      },
      registerUser: async (data) => {
        const resRegister = await registerRequest(data);
        return resRegister;
      },
      resetPassword: async (data) => {
        try {
          const response = await resetPasswordRequest(data);
          // if (!response) {
          //   throw new Error('Email no existe como usuario');
          // }
          console.log('Reset Password response: ', response)
          return response;
          
        } catch (error) {
          set({ errors: error.message });
          throw error;
        }
      },
      updateUserData: async (data, token) => {
        try {
          const response = await updateUserDataRequest(data, token);
          if (response) {
            set((state) => ({
              profile: {
                ...state.profile,
                ...data
              }
            }));
          }
          return response;
        } catch (error) {
          set({ errors: error.message });
          throw error;
        }
      },
      logout: () => set(() => ({ token: null, profile: null, isAuth: false }))
    }),
    {
      name: 'auth'
    }
  )
);
