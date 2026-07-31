import { z } from "zod"

export const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  password: z.string().min(8, "Password must be at least 8 characters."),
  terms: z.boolean().refine((value) => value, {
    message: "You must accept the terms and conditions.",
  }),
})

export type RegisterFormValues = z.infer<typeof registerSchema>
