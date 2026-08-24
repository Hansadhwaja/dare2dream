"use client"

import Link from "next/link"
import { ArrowRight, LockKeyhole, Mail } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"

import AuthField from "../../AuthField"
import FormField from "@/components/common/Form/FormField"
import { LoginFormValues, loginSchema } from "@/schemas/Auth/login.schemas"
import Loader from "@/components/common/Loader/Loader"

interface Props {
  onSubmit: (data: LoginFormValues) => void
  isLoading: boolean
}

const LoginForm = ({ onSubmit, isLoading }: Props) => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const onFormSubmit = (values: LoginFormValues) => {
    onSubmit(values)
    reset()
  }

  return (
    <form
      onSubmit={form.handleSubmit(onFormSubmit)}
      className="space-y-6"
      noValidate
    >
      {/* Email */}
      <FormField
        control={form.control}
        name="email"
        render={(field) => (
          <AuthField
            {...field}
            label="Email address"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            icon={Mail}
          />
        )}
      />

      {/* Password */}
      <FormField
        control={form.control}
        name="password"
        render={(field) => (
          <AuthField
            {...field}
            label="Password"
            type="password"
            placeholder="Enter your password"
            autoComplete="current-password"
            icon={LockKeyhole}
          />
        )}
      />

      {/* Remember / Forgot */}
      <div className="flex justify-end items-center gap-4 pt-1">

        <Link
          href="/forgot-password"
          className="flex justify-end font-sans text-sm font-semibold text-foreground underline underline-offset-4 transition-colors hover:text-tertiary"
        >
          Forgot password?
        </Link>
      </div>

      {/* Submit */}
      <Button
        type="submit"
        className="mt-3 h-13 w-full rounded-full bg-primary font-sans text-base font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
        disabled={!isValid || isLoading}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            Sign in
            <ArrowRight className="size-5" />
          </>
        )}
      </Button>
    </form>
  )
}

export default LoginForm
