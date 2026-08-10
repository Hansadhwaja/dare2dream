import AuthField from "../../AuthField"
import { ArrowRight, KeyRound, LockKeyhole, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Loader from "@/components/common/Loader/Loader"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ResetPasswordFormValues,
  resetPasswordSchema,
} from "@/schemas/Auth/forgot_password.schemas"
import FormField from "@/components/common/Form/FormField"

interface Props {
  onSubmit: (data: ResetPasswordFormValues) => void
  isLoading: boolean
  initialValue?: {
    email: string
  }
}

const ResetPasswordForm = ({ isLoading, onSubmit, initialValue }: Props) => {
  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: initialValue?.email ?? "",
      otp: "",
      newPassword: "",
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const onFormSubmit = (values: ResetPasswordFormValues) => {
    onSubmit(values)
    reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-5">
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
            disabled
          />
        )}
      />

      <FormField
        control={form.control}
        name="otp"
        render={(field) => (
          <AuthField
            {...field}
            label="OTP"
            type="text"
            placeholder="123456"
            autoComplete="one-time-code"
            icon={KeyRound}
            maxLength={6}
            inputMode="numeric"
          />
        )}
      />

      <FormField
        control={form.control}
        name="newPassword"
        render={(field) => (
          <AuthField
            {...field}
            label="New Password"
            type="password"
            placeholder="Enter new password"
            autoComplete="new-password"
            icon={LockKeyhole}
          />
        )}
      />

      <Button
        type="submit"
        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary font-sans text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
        disabled={!isValid || isLoading}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            Reset Password
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  )
}

export default ResetPasswordForm
