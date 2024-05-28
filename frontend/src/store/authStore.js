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
      login: async (data) => {
        console.log('LOGIN DATA STORE', data)
        try {
          const resLogin = await loginRequest(data);
          if (resLogin && resLogin.data && resLogin.data.token) {
            set((state) => ({
              ...state,
              token: resLogin.data.token,
              isAuth: true,
            }));
          } else {
            console.log(resLogin.data, "RESPONSE")
            throw new Error("Invalid response format from login API");
          }
        } catch (error) {
          throw error;
        }
      },
      registerUser: async (data) => {
        try {
          const resRegister = await registerRequest(data);
          set(() => ({
            isAuth: true,
          }));
          return resRegister;
        } catch (error) {
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