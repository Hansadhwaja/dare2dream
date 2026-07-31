import type { LucideIcon } from "lucide-react"

import PasswordInput from "../common/Input/PasswordInput"
import IconInput from "../common/Input/IconInput"

interface Props extends React.ComponentProps<"input"> {
  label: string
  icon: LucideIcon
}

const AuthField = ({ label, type = "text", icon, ...props }: Props) => {
  if (type === "password") {
    return (
      <PasswordInput {...props} type="password" label={label} icon={icon} />
    )
  }

  return <IconInput {...props} type={type} label={label} icon={icon} />
}

export default AuthField
