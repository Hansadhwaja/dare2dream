import { ProfileFormValues } from "@/schemas/Profile/profile.schemas"
import { apiFetch } from "./client"
import { ProfileUpdateResponse } from "@/types/profile.types"

export const updateProfile = (data: ProfileFormValues) => {
  return apiFetch<ProfileUpdateResponse>("/auth/profile", {
    method: "PUT",
    body: JSON.stringify(data),
  })
}
