"use client"

import { ArrowRight, LockKeyhole, Mail, User } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import AuthField from "../../AuthField"
import FormField from "@/components/common/Form/FormField"
import {
  registerSchema,
  type RegisterFormValues,
} from "@/schemas/Auth/register.schemas"

const RegisterForm = () => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      terms: false,
    },
  })

  const onSubmit = (values: RegisterFormValues) => {
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
        name="name"
        render={(field) => (
          <AuthField
            {...field}
            label="Full name"
            placeholder="Your full name"
            autoComplete="name"
            icon={User}
          />
        )}
      />

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
            placeholder="Create a password"
            autoComplete="new-password"
            icon={LockKeyhole}
          />
        )}
      />

      <FormField
        control={form.control}
        name="terms"
        render={(field) => (
          <label className="font-sans flex cursor-pointer items-start gap-2 pt-1 text-[11px] leading-5 text-muted-foreground">
            <Checkbox
              checked={Boolean(field.value)}
              onCheckedChange={field.onChange}
              onBlur={field.onBlur}
              className="mt-0.5"
            />

            <span>
              I agree to the terms and understand how my information will be
              used.
            </span>
          </label>
        )}
      />

      <Button
        type="submit"
        className="font-sans inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
      >
        Create account
        <ArrowRight className="size-4" />
      </Button>
    </form>
  )
}

export default RegisterForm