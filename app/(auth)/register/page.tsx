"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

import AuthAside from "@/components/Auth/AuthAside"
import AuthCard from "@/components/Auth/AuthCard"
import RegisterForm from "@/components/Auth/Register/Form/RegisterForm"
import { RegisterFormValues } from "@/schemas/Auth/register.schemas"
import { registerUser } from "@/lib/api/client/auth"

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      setIsLoading(true)

      const response = await registerUser(values)

      console.log("Registration successful:", response)

      toast.success(response?.message ?? "User registered successfully")
      router.replace("/login")
    } catch (error) {
      console.error("Registration failed:", error)

      toast.error(
        error instanceof Error ? error.message : "Error while registration"
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="max-container grid flex-1 items-center pb-10 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:pb-12">
      <AuthAside
        eyebrow="Join the community"
        title={
          <>
            There is more waiting for you{" "}
            <span className="font-heading text-secondary italic">here.</span>
          </>
        }
        description="Create your member profile and become part of a community designed around connection, growth and possibility."
      />

      <AuthCard>
        <div className="mb-8">
          <p className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary uppercase">
            Create your account
          </p>

          <h2 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] text-foreground sm:text-6xl lg:text-7xl">
            Start your journey.
          </h2>

          <p className="mt-5 font-sans text-base leading-7 font-light text-muted-foreground sm:text-lg">
            A few details and you are ready to begin.
          </p>
        </div>

        <RegisterForm onSubmit={handleSubmit} isLoading={isLoading} />

        <p className="mt-9 text-center font-sans text-sm text-muted-foreground sm:text-base">
          Already a member?{" "}
          <Link
            href="/login"
            className="font-semibold text-foreground transition-opacity hover:opacity-60"
          >
            Sign in
          </Link>
        </p>
      </AuthCard>
    </div>
  )
}

export default RegisterPage