import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { loginRequest, registerRequest } from '../api/auth';

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
      logout: () => set(() => ({ token: null, profile: null, isAuth: false }))
    }),
    {
      name: 'auth'
    }
  )
);
