"use client"

import Link from "next/link"

import AuthAside from "@/components/Auth/AuthAside"
import AuthCard from "@/components/Auth/AuthCard"
import RegisterForm from "@/components/Auth/Register/Form/RegisterForm"
import { useState } from "react"
import { RegisterFormValues } from "@/schemas/Auth/register.schemas"
import { registerUser } from "@/lib/api/auth"
import { toast } from "sonner"

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (values: RegisterFormValues) => {
    try {
      setIsLoading(true)
      const response = await registerUser(values)

      console.log("Registration successful:", response)
      toast.success(response?.message ?? "User registered successfully")
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
    <div className="mx-auto grid max-w-350 flex-1 items-center px-5 pb-10 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:px-10 lg:pb-12">
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
        <div className="mb-7">
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
            Create your account
          </p>

          <h2 className="mt-3 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] text-foreground sm:text-6xl">
            Start your journey.
          </h2>

          <p className="mt-4 font-sans text-sm leading-6 font-light text-muted-foreground">
            A few details and you are ready to begin.
          </p>
        </div>

        <RegisterForm onSubmit={handleSubmit} isLoading={isLoading} />

        <p className="mt-8 text-center font-sans text-xs text-muted-foreground">
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
