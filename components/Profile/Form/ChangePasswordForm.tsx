"use client"

import { ArrowRight, LockKeyhole } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import FormField from "@/components/common/Form/FormField"
import Loader from "@/components/common/Loader/Loader"
import {
  changePasswordSchema,
  ChangePasswordFormValues,
} from "@/schemas/Profile/profile.schemas"
import AuthField from "@/components/Auth/AuthField"

interface Props {
  onSubmit: (data: ChangePasswordFormValues) => void
  isLoading: boolean
}

const ChangePasswordForm = ({ onSubmit, isLoading }: Props) => {
  const form = useForm<ChangePasswordFormValues>({
    resolver: zodResolver(changePasswordSchema),
    mode: "onChange",
    defaultValues: {
      password: "",
      confirm_password: "",
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const onFormSubmit = (values: ChangePasswordFormValues) => {
    onSubmit(values)
    reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-4">
      <FormField
        control={form.control}
        name="password"
        render={(field) => (
          <AuthField
            {...field}
            label="Password"
            type="password"
            placeholder="Enter new password"
            autoComplete="new-password"
            icon={LockKeyhole}
          />
        )}
      />
      <FormField
        control={form.control}
        name="confirm_password"
        render={(field) => (
          <AuthField
            {...field}
            label="Password"
            type="password"
            placeholder="Confirm your password"
            autoComplete="new-password"
            icon={LockKeyhole}
          />
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
            Update Password
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  )
}

export default ChangePasswordForm
