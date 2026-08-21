import { GetProfileResponse } from "@/types/auth.types"
import { serverApiFetch } from "./server"


export const getProfile = () => {
  return serverApiFetch<GetProfileResponse>("/auth/profile")
}