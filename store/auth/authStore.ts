import { User } from "@/types/auth.types"
import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
  token: string | null
  user: User | null
  forgotPasswordEmail: string | null

  setAuth: (token: string, user: User) => void
  setToken: (token: string) => void
  setUser: (user: User) => void
  updateUser: (user: Partial<User>) => void
  setForgotPasswordEmail: (email: string) => void
  clearForgotPasswordEmail: () => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      forgotPasswordEmail: null,

      setAuth: (token, user) =>
        set({
          token,
          user,
        }),

      setToken: (token) =>
        set({
          token,
        }),

      setUser: (user) =>
        set({
          user,
        }),
      updateUser: (updatedUser) =>
        set((state) => ({
          user: state.user
            ? {
                ...state.user,
                ...updatedUser,
              }
            : null,
        })),
      setForgotPasswordEmail: (email) =>
        set({
          forgotPasswordEmail: email,
        }),
      clearForgotPasswordEmail: () =>
        set({
          forgotPasswordEmail: null,
        }),
      logout: () =>
        set({
          token: null,
          user: null,
        }),
    }),
    {
      name: "auth-storage",
    }
  )
)
