import {
  ChangePasswordFormValues,
  ProfileFormValues,
} from "@/schemas/Profile/profile.schemas"
import { apiFetch } from "./client"
import { ProfileUpdateResponse } from "@/types/profile.types"

export const updateProfile = (data: ProfileFormValues) => {
  return apiFetch<ProfileUpdateResponse>("/auth/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  })
}

export const updatePassword = (data: ChangePasswordFormValues) => {
  return apiFetch<ProfileUpdateResponse>("/auth/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  })
}
