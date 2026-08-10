import AuthField from "../../AuthField"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Loader from "@/components/common/Loader/Loader"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  ForgotPasswordFormValues,
  forgotPasswordSchema,
} from "@/schemas/Auth/forgot_password.schemas"
import FormField from "@/components/common/Form/FormField"

interface Props {
  onSubmit: (data: ForgotPasswordFormValues) => void
  isLoading: boolean
}

const ForgotPasswordForm = ({ isLoading, onSubmit }: Props) => {
  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  })

  const {
    formState: { isValid },
    reset,
  } = form

  const onFormSubmit = (values: ForgotPasswordFormValues) => {
    onSubmit(values)
    reset()
  }

  return (
    <form className="space-y-5" onSubmit={form.handleSubmit(onFormSubmit)}>
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

      <Button
        type="submit"
        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary font-sans text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
        disabled={!isValid || isLoading}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            Send OTP
            <ArrowRight className="size-4" />
          </>
        )}
      </Button>
    </form>
  )
}

export default ForgotPasswordForm
