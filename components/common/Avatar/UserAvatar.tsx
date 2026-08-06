import { User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils"

interface UserAvatarProps extends React.ComponentPropsWithoutRef<
  typeof Avatar
> {
  src?: string | null
  alt?: string
  fallback?: React.ReactNode
  iconClassName?: string
  size?: "default" | "sm" | "lg"
}

const UserAvatar = ({
  src,
  alt = "User avatar",
  fallback,
  className,
  size = "default",
  iconClassName,
  ...props
}: UserAvatarProps) => {
  return (
    <Avatar size={size} className={cn("border", className)} {...props}>
      <AvatarImage src={src || undefined} alt={alt} />

      <AvatarFallback>
        {fallback ?? <User className={cn("", iconClassName)} />}
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
