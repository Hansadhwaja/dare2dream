import { z } from "zod"

export const registerSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),

  lastName: z.string().min(2, "Last name must be at least 2 characters."),

  email: z.email("Please enter a valid email address."),

  password: z.string().min(8, "Password must be at least 8 characters."),

  country: z.string().min(2, "Country is required."),

  whoInvited: z.string().min(2, "Who invited you is required."),

  agreedPrivacyPolicy: z.boolean().refine((value) => value, {
    message: "You must accept the terms and privacy policy.",
  }),
})

export type RegisterFormValues = z.infer<typeof registerSchema>
