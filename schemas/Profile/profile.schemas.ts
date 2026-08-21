import { z } from "zod"

export const profileSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters."),

  lastName: z.string().min(2, "Last name must be at least 2 characters."),

  country: z.string().min(2, "Country is required."),
})

export type ProfileFormValues = z.infer<typeof profileSchema>


export const changePasswordSchema = z
  .object({
    password: z.string().min(8, "Password must be at least 8 characters."),
    confirm_password: z
      .string()
      .min(8, "Password must be at least 8 characters."),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  })

export type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>
