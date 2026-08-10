"use client"

import AuthCard from "@/components/Auth/AuthCard"
import ResetPasswordForm from "@/components/Auth/ResetPassword/Form/ResetPasswordForm"
import { resetPasswordUser } from "@/lib/api/auth"
import { ResetPasswordFormValues } from "@/schemas/Auth/forgot_password.schemas"
import { useAuthStore } from "@/store/auth/authStore"
import { LockKeyhole } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

const ResetPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const forgotPasswordEmail = useAuthStore((state) => state.forgotPasswordEmail)

  const clearForgotPasswordEmail = useAuthStore(
    (state) => state.clearForgotPasswordEmail
  )

  const router = useRouter()

  const handleSubmit = async (values: ResetPasswordFormValues) => {
    try {
      setIsLoading(true)

      await resetPasswordUser(values)

      toast.success("Password reset successfully")

      clearForgotPasswordEmail()

      router.replace("/login")
    } catch (error) {
      console.error("Password reset failed:", error)

      toast.error(
        error instanceof Error
          ? error.message
          : "Error while resetting password"
      )
    } finally {
      setIsLoading(false)
    }
  }

  if (!forgotPasswordEmail) {
    router.replace("/forgot-password")
    return null
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <AuthCard>
        <div className="text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-full bg-accent text-accent-foreground">
            <LockKeyhole className="size-5" />
          </div>
          <p className="mt-7 font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
            Account recovery
          </p>

          <h2 className="mt-3 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] text-foreground sm:text-6xl">
            Reset your password?
          </h2>

          <p className="mx-auto mt-4 max-w-sm font-sans text-sm leading-6 font-light text-muted-foreground">
            Enter the OTP and new password to reset your password.
          </p>
        </div>

        <ResetPasswordForm
          onSubmit={handleSubmit}
          isLoading={isLoading}
          initialValue={{ email: forgotPasswordEmail }}
        />
      </AuthCard>
    </div>
  )
}

export default ResetPasswordPage
