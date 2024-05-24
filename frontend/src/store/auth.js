import create from "zustand";
import { persist } from "zustand/middleware";
import { profileRequest, registerRequest } from "../api/auth";


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
      register: async (user) => {
        try {
          const resRegister = await registerRequest(user);
          set(() => ({
            token: resRegister.data.token,
            isAuth: true,
          }));
        } catch (error) {
          set(() => ({ errors: error.response.data }));
        }
      },
      getProfile: async () => {
        const resProfile = await profileRequest();
        set(() => ({
          profile: resProfile.data,
        }));
      },
      logout: () => set(() => ({ token: null, profile: null, isAuth: false })),
      cleanErrors: () => set(() => ({ errors: null })),
    }),
    {
      name: "auth",
    }
  )
);