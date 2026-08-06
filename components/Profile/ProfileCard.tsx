import { Mail, Pencil } from "lucide-react"

import UserAvatar from "../common/Avatar/UserAvatar"
import { Button } from "../ui/button"
import { Card, CardContent } from "../ui/card"

interface ProfileCardProps {
  name: string
  email: string
  avatar?: string | null
}

const ProfileCard = ({ name, email, avatar }: ProfileCardProps) => {
  return (
    <Card className="rounded-2xl border-[#214c3c]/10 shadow-sm">
      <CardContent className="flex flex-col gap-6 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <UserAvatar
            src={avatar}
            alt={name}
            fallback={name.charAt(0).toUpperCase()}
            size="lg"
          />

          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-[#214c3c]">{name}</h2>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-4" />
              <span>{email}</span>
            </div>
          </div>
        </div>

        <Button className="bg-[#214c3c] hover:bg-[#173b2f]">
          <Pencil className="mr-2 size-4" />
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  )
}

export default ProfileCard
