import { RegisterFormValues } from "@/schemas/Auth/register.schemas"
import { apiFetch } from "./client"

export interface RegisterResponse {
  message: string
}

export const registerUser = (data: RegisterFormValues) => {
  return apiFetch<RegisterResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  })
}
