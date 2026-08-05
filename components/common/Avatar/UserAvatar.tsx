import { User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

interface UserAvatarProps {
  src?: string | null
  alt?: string
}

const UserAvatar = ({ src, alt = "User avatar" }: UserAvatarProps) => {
  return (
    <Avatar className="size-10 cursor-pointer border">
      <AvatarImage src={src || undefined} alt={alt} />

      <AvatarFallback>
        <User className="size-5" />
      </AvatarFallback>
    </Avatar>
  )
}

export default UserAvatar
