"use client"

import { Eye, EyeOff, type LucideIcon } from "lucide-react"
import { useState } from "react"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from "@/components/ui/input-group"

interface Props extends React.ComponentProps<"input"> {
  label: string
  icon: LucideIcon
}

const PasswordInput = ({ label, icon: Icon, id, ...props }: Props) => {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div className="block w-full">
      <label
        htmlFor={id}
        className="mb-2 block font-sans text-[11px] font-semibold tracking-[0.06em] text-muted-foreground uppercase"
      >
        {label}
      </label>

      <InputGroup className="h-13 rounded-2xl bg-background focus-within:ring-4 focus-within:ring-ring/15 border-input">
        <InputGroupAddon>
          <Icon className="size-4 text-muted-foreground/60" />
        </InputGroupAddon>

        <InputGroupInput
          id={id}
          {...props}
          type={showPassword ? "text" : "password"}
          className="font-sans text-sm text-foreground"
        />

        <InputGroupAddon align="inline-end">
          <InputGroupButton
            type="button"
            size="icon-xs"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? (
              <Eye className="size-4" />
            ) : (
              <EyeOff className="size-4" />
            )}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default PasswordInput
