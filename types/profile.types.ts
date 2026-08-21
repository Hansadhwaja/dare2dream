import { User } from "./auth.types"

export type ProfileUpdateResponse = {
  message: string
  user: User
}

export type UploadResponse = {
  message: string
  urls: string[]
}
