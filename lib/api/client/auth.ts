import { RegisterFormValues } from "@/schemas/Auth/register.schemas"
import { apiFetch } from "./client"
import { LoginFormValues } from "@/schemas/Auth/login.schemas"
import { LoginResponse, RegisterResponse } from "@/types/auth.types"
import {
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
} from "@/schemas/Auth/forgot_password.schemas"

export const registerUser = (data: RegisterFormValues) => {
  return apiFetch<RegisterResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export const loginUser = (data: LoginFormValues) => {
  return apiFetch<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export const forgotPasswordUser = (data: ForgotPasswordFormValues) => {
  return apiFetch<LoginResponse>("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export const resetPasswordUser = (data: ResetPasswordFormValues) => {
  return apiFetch<LoginResponse>("/auth/reset-password", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export const setServerToken = async (token: string) => {
  const response = await fetch("/api/auth/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ token }),
  })

  if (!response.ok) {
    throw new Error("Failed to create authentication session")
  }

  return response.json()
}

export const clearServerToken = async () => {
  const response = await fetch("/api/auth/session", {
    method: "DELETE",
  })

  if (!response.ok) {
    throw new Error("Failed to clear authentication session")
  }

  return response.json()
}
