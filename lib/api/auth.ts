import { RegisterFormValues } from "@/schemas/Auth/register.schemas"
import { apiFetch } from "./client"
import { LoginFormValues } from "@/schemas/Auth/login.schemas"
import { LoginResponse, RegisterResponse } from "@/types/auth.types"

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

export const setServerToken = async (token: string) => {
  return await fetch("/api/auth/session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  })
}

export const clearServerToken = async () => {
  return await fetch("/api/auth/session", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
}
