"use client"

import Link from "next/link"
import { ArrowRight, LockKeyhole, Mail } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

import AuthField from "../../AuthField"
import FormField from "@/components/common/Form/FormField"
import {
  LoginFormValues,
  loginSchema,
} from "@/schemas/Auth/login.schemas"

const LoginForm = () => {
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  })

  const onSubmit = (values: LoginFormValues) => {
    console.log(values)
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-5"
      noValidate
    >
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

      <div className="grid grid-cols-2 gap-4 pt-1">
        <FormField
          control={form.control}
          name="rememberMe"
          render={(field) => (
            <Label className="flex cursor-pointer items-center gap-2">
              <Checkbox
                checked={Boolean(field.value)}
                onCheckedChange={field.onChange}
                onBlur={field.onBlur}
              />

              <span className="font-sans text-xs text-muted-foreground">
                Remember me
              </span>
            </Label>
          )}
        />

        <Link
          href="/forgot-password"
          className="font-sans flex justify-end text-xs font-semibold text-foreground transition-opacity hover:opacity-60"
        >
          Forgot password?
        </Link>
      </div>

      <Button
        type="submit"
        className="font-sans mt-2 h-13 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
      >
        Sign in
        <ArrowRight className="size-4" />
      </Button>
    </form>
  )
}

export default LoginForm