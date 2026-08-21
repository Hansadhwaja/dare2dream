import { UploadResponse } from "@/types/profile.types"
import { apiFetch } from "./client"

export const uploadImage = (file: File) => {
  const formData = new FormData()

  formData.append("files", file)

  return apiFetch<UploadResponse>("/upload", {
    method: "POST",
    body: formData,
  })
}
