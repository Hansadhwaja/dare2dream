"use client"

import Link from "next/link"
import AuthAside from "@/components/Auth/AuthAside"
import AuthCard from "@/components/Auth/AuthCard"
import LoginForm from "@/components/Auth/Login/Form/LoginForm"
import { LoginFormValues } from "@/schemas/Auth/login.schemas"
import { useState } from "react"
import { toast } from "sonner"
import { loginUser, setServerToken } from "@/lib/api/auth"
import { useAuthStore } from "@/store/auth/authStore"
import { useRouter } from "next/navigation"

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const setAuth = useAuthStore((state) => state.setAuth)
  const router = useRouter()

  const handleSubmit = async (values: LoginFormValues) => {
    try {
      setIsLoading(true)
      const response = await loginUser(values)
      await setServerToken(response.token)
      setAuth(response.token, response.user)
      toast.success("User Logged In successfully")
      router.replace("/")
    } catch (error) {
      console.error("Login failed:", error)
      toast.error(
        error instanceof Error ? error.message : "Error while logging in"
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto grid max-w-350 flex-1 items-center px-5 pb-10 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:px-10 lg:pb-12">
      <AuthAside
        eyebrow="Welcome back"
        title={
          <>
            Keep moving toward{" "}
            <span className="font-heading text-secondary italic">
              extraordinary.
            </span>
          </>
        }
        description="Sign in to continue your journey, reconnect with the community and discover what is waiting for you next."
      />

      <AuthCard>
        <div className="mb-8">
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
            Member login
          </p>

          <h2 className="mt-3 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] text-foreground sm:text-6xl">
            Welcome back.
          </h2>

          <p className="mt-4 font-sans text-sm leading-6 font-light text-muted-foreground">
            Enter your details below to access your account.
          </p>
        </div>

        <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />

        <p className="mt-8 text-center font-sans text-xs text-muted-foreground">
          New to Dare to Dream?{" "}
          <Link
            href="/register"
            className="font-semibold text-foreground transition-opacity hover:opacity-60"
          >
            Create an account
          </Link>
        </p>
      </AuthCard>
    </div>
  )
}

export default LoginPage
