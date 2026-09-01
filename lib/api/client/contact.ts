import { ContactFormValues } from "@/schemas/Contact/contact.schemas"
import { apiFetch } from "./client"

export const sendMessage = (data: ContactFormValues) => {
  return apiFetch("/contact", {
    method: "POST",
    body: JSON.stringify(data),
  })
}
