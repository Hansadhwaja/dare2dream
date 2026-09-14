import type { LucideIcon } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

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

      <InputGroup className="h-13 rounded-2xl border-input bg-background focus-within:ring-4 focus-within:ring-ring/15">
        <InputGroupAddon>
          <Icon className="size-4 text-muted-foreground/60" />
        </InputGroupAddon>

        <InputGroupInput
          id={id}
          {...props}
          className="font-sans text-sm text-foreground"
        />
      </InputGroup>
    </div>
  )
}

export default IconInput
