import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginRequest, registerRequest } from "../api/auth";


export const useAuthStore = create(
  persist(
    (set) => ({
      token: null,
      profile: null,
      isAuth: false,
      errors: null,
      setToken: (token) =>
        set((state) => ({
          token,
          isAuth: !!token,
        })),
      login: async (user) => {
        try {
          const resLogin = await loginRequest(user);
          set(() => ({
            token: resLogin.data.token,
            isAuth: true,
          }));
          return resLogin;
        } catch (error) {
          set(() => ({ errors: error.response.data }));
          throw error;
        }
      },
      registerUser: async (user) => {
        try {
          const resRegister = await registerRequest(user);
          set(() => ({
            isAuth: true,
          }));
          return resRegister;
        } catch (error) {
          set(() => ({ errors: error.response.data }));
          throw error;
        }
      },
     
      logout: () => set(() => ({ token: null, profile: null, isAuth: false })),
      cleanErrors: () => set(() => ({ errors: null })),
    }),
    {
      name: "auth",
    }
  )
);