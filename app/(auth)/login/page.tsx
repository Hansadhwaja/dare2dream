"use client"

import Link from "next/link"

import AuthAside from "@/components/Auth/AuthAside"
import AuthCard from "@/components/Auth/AuthCard"
import LoginForm from "@/components/Auth/Login/Form/LoginForm"

const LoginPage = () => {
  return (
    <div className="mx-auto grid max-w-350 flex-1 items-center px-5 pb-10 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:px-10 lg:pb-12">
      <AuthAside
        eyebrow="Welcome back"
        title={
          <>
            Keep moving toward{" "}
            <span className="font-heading italic text-secondary">
              extraordinary.
            </span>
          </>
        }
        description="Sign in to continue your journey, reconnect with the community and discover what is waiting for you next."
      />

      <AuthCard>
        <div className="mb-8">
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary-foreground uppercase">
            Member login
          </p>

          <h2 className="font-heading mt-3 text-5xl leading-[0.95] font-semibold tracking-[-0.015em] text-foreground sm:text-6xl">
            Welcome back.
          </h2>

          <p className="font-sans mt-4 text-sm leading-6 font-light text-muted-foreground">
            Enter your details below to access your account.
          </p>
        </div>

        <LoginForm />

        <p className="font-sans mt-8 text-center text-xs text-muted-foreground">
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