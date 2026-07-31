import React from "react"
import AuthField from "../../AuthField"
import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

const ForgotPasswordForm = () => {
  return (
    <form className="space-y-5">
      <AuthField
        label="Email address"
        type="email"
        placeholder="you@example.com"
        icon={Mail}
      />

      <Button
        type="submit"
        className="inline-flex h-13 w-full items-center justify-center gap-2 rounded-full bg-primary font-sans text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
      >
        Send reset link
        <ArrowRight className="size-4" />
      </Button>
    </form>
  )
}

export default ForgotPasswordForm
