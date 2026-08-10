import { z } from "zod"

export const forgotPasswordSchema = z.object({
  email: z.email("Please enter a valid email address."),
})

export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>

export const resetPasswordSchema = z.object({
  email: z.email("Please enter a valid email address."),

  otp: z
    .string()
    .length(6, "OTP must be exactly 6 digits.")
    .regex(/^\d{6}$/, "OTP must contain only numbers."),

  newPassword: z.string().min(8, "Password must be at least 8 characters."),
})

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>
