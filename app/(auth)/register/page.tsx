"use client"

import Link from "next/link"

import AuthAside from "@/components/Auth/AuthAside"
import AuthCard from "@/components/Auth/AuthCard"
import RegisterForm from "@/components/Auth/Register/Form/RegisterForm"

const RegisterPage = () => {
  return (
    <div className="mx-auto grid max-w-350 flex-1 items-center px-5 pb-10 sm:px-8 lg:grid-cols-[1fr_0.92fr] lg:gap-16 lg:px-10 lg:pb-12">
      <AuthAside
        eyebrow="Join the community"
        title={
          <>
            There is more waiting for you{" "}
            <span className="font-heading italic text-secondary">here.</span>
          </>
        }
        description="Create your member profile and become part of a community designed around connection, growth and possibility."
      />

      <AuthCard>
        <div className="mb-7">
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary-foreground uppercase">
            Create your account
          </p>

          <h2 className="font-heading mt-3 text-5xl leading-[0.95] font-semibold tracking-[-0.015em] text-foreground sm:text-6xl">
            Start your journey.
          </h2>

          <p className="font-sans mt-4 text-sm leading-6 font-light text-muted-foreground">
            A few details and you are ready to begin.
          </p>
        </div>

        <RegisterForm />

        <p className="font-sans mt-8 text-center text-xs text-muted-foreground">
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