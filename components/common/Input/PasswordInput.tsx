"use client"

import { Eye, EyeOff, type LucideIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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

      <div className="relative">
        <Icon className="pointer-events-none absolute top-1/2 left-4 z-10 size-4 -translate-y-1/2 text-muted-foreground/60" />

        <Input
          id={id}
          {...props}
          type={showPassword ? "text" : "password"}
          className="h-13 rounded-2xl border-input bg-background pr-12 pl-11 font-sans text-sm text-foreground shadow-none placeholder:text-muted-foreground/50 focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-ring/15"
        />

        <Button
          type="button"
          variant="ghost"
          size="icon-xs"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground hover:bg-transparent hover:text-foreground"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? (
            <Eye className="size-4" />
          ) : (
            <EyeOff className="size-4" />
          )}
        </Button>
      </div>
    </div>
  )
}

export default PasswordInput
