"use client"

import AuthCard from "@/components/Auth/AuthCard"
import ForgotPasswordForm from "@/components/Auth/ForgotPassword/Form/ForgotPasswordForm"
import { forgotPasswordUser } from "@/lib/api/auth"
import { ForgotPasswordFormValues } from "@/schemas/Auth/forgot_password.schemas"
import { useAuthStore } from "@/store/auth/authStore"
import { ArrowLeft, LockKeyhole } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

const ForgotPasswordPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const setForgotPasswordEmail = useAuthStore(
    (state) => state.setForgotPasswordEmail
  )
  const router = useRouter()

  const handleSubmit = async (values: ForgotPasswordFormValues) => {
    try {
      setIsLoading(true)
      await forgotPasswordUser(values)
      setForgotPasswordEmail(values.email)
      toast.success("OTP sent successfully")
      router.replace("/reset-password")
    } catch (error) {
      console.error("OTP sent failed:", error)
      toast.error(
        error instanceof Error ? error.message : "Error while sending otp"
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto flex flex-1 items-center justify-center px-5 pb-12 sm:px-8">
      <AuthCard>
        <div className="mb-8 text-center">
          <div className="mx-auto grid size-14 place-items-center rounded-full bg-accent text-accent-foreground">
            <LockKeyhole className="size-5" />
          </div>

          <p className="mt-7 font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
            Account recovery
          </p>

          <h2 className="mt-3 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] text-foreground sm:text-6xl">
            Forgot your password?
          </h2>

          <p className="mx-auto mt-4 max-w-sm font-sans text-sm leading-6 font-light text-muted-foreground">
            Enter your email and we will send you an OTP to reset your password.
          </p>
        </div>

        <ForgotPasswordForm onSubmit={handleSubmit} isLoading={isLoading} />

        <Link
          href="/login"
          className="mx-auto mt-7 flex w-fit items-center gap-2 font-sans text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" />
          Back to sign in
        </Link>
      </AuthCard>
    </div>
  )
}

export default ForgotPasswordPage
