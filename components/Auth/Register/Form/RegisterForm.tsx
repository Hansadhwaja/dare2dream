"use client"

import {
  ArrowRight,
  Globe,
  LockKeyhole,
  Mail,
  User,
  UserPlus,
} from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Country } from "country-state-city"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

import AuthField from "../../AuthField"
import FormField from "@/components/common/Form/FormField"
import {
  registerSchema,
  type RegisterFormValues,
} from "@/schemas/Auth/register.schemas"
import IconSelect from "@/components/common/Input/IconSelect"
import Loader from "@/components/common/Loader/Loader"

const countries = Country.getAllCountries()

interface Props {
  onSubmit: (data: RegisterFormValues) => void
  isLoading: boolean
}

const RegisterForm = ({ onSubmit, isLoading }: Props) => {
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      country: "",
      whoInvited: "",
      agreedPrivacyPolicy: true,
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const onFormSubmit = (values: RegisterFormValues) => {
    onSubmit(values)
    reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4">
      {/* First Name / Last Name */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <FormField
          control={form.control}
          name="firstName"
          render={(field) => (
            <AuthField
              {...field}
              label="First name"
              placeholder="First name"
              autoComplete="given-name"
              icon={User}
            />
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={(field) => (
            <AuthField
              {...field}
              label="Last name"
              placeholder="Last name"
              autoComplete="family-name"
              icon={User}
            />
          )}
        />
      </div>

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
            placeholder="Create a password"
            autoComplete="new-password"
            icon={LockKeyhole}
          />
        )}
      />

      <FormField
        control={form.control}
        name="country"
        render={(field) => (
          <IconSelect
            label="Country"
            icon={Globe}
            placeholder="Select your country"
            value={field.value}
            onValueChange={field.onChange}
            options={countries.map((country) => ({
              label: country.name,
              value: country.isoCode,
            }))}
          />
        )}
      />

      {/* Who Invited */}
      <FormField
        control={form.control}
        name="whoInvited"
        render={(field) => (
          <AuthField
            {...field}
            label="Who invited you?"
            placeholder="Enter the name of the person who invited you"
            autoComplete="off"
            icon={UserPlus}
          />
        )}
      />

      {/* Privacy Policy */}
      <FormField
        control={form.control}
        name="agreedPrivacyPolicy"
        render={(field) => (
          <label className="flex cursor-pointer items-start gap-2 pt-1 font-sans text-[11px] leading-5 text-muted-foreground">
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

      {/* Submit */}
      <Button
        type="submit"
        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary font-sans text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
        disabled={!isValid || isLoading}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            Create account
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  )
}

export default RegisterForm
