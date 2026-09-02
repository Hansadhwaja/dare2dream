import type { LucideIcon } from "lucide-react"

import { Input } from "@/components/ui/input"

interface Props extends React.ComponentProps<"input"> {
  label: string
  icon: LucideIcon
}

const IconInput = ({ label, icon: Icon, id, ...props }: Props) => {
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
          className="h-13 rounded-2xl border-input bg-background pr-4 pl-11 font-sans text-sm text-foreground shadow-none focus-visible:border-ring focus-visible:ring-4 focus-visible:ring-ring/15"
        />
      </div>
    </div>
  )
}

export default IconInput
