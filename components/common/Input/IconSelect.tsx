import type { LucideIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface SelectOption {
  label: string
  value: string
}

interface Props {
  label: string
  icon: LucideIcon
  placeholder?: string
  value?: string
  onValueChange?: (value: string) => void
  options: SelectOption[]
}

const IconSelect = ({
  label,
  icon: Icon,
  placeholder,
  value,
  onValueChange,
  options,
}: Props) => {
  return (
    <div className="space-y-2">
      <label className="font-sans text-sm font-medium text-foreground">
        {label}
      </label>

      <div className="relative">
        <Icon className="pointer-events-none absolute top-1/2 left-4 z-10 size-4 -translate-y-1/2 text-muted-foreground/60" />

        <Select value={value} onValueChange={onValueChange}>
          <SelectTrigger className="!h-[52px] w-full rounded-2xl border-input bg-background pr-4 pl-11 font-sans text-sm text-foreground shadow-none focus:border-ring focus:ring-4 focus:ring-ring/15 [&>svg]:text-muted-foreground/60">
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>

          <SelectContent className="rounded-xl">
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}

export default IconSelect
