"use client"

import { Globe, Mail } from "lucide-react"
import UserAvatar from "../common/Avatar/UserAvatar"
import { Card, CardContent } from "../ui/card"
import { useAuthStore } from "@/store/auth/authStore"
import EditProfileModal from "./Modal/EditProfileModal"

const ProfileCard = () => {
  const user = useAuthStore((state) => state.user)

  const name =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : "-"

  const avatar = null

  return (
    <Card>
      <CardContent className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <UserAvatar alt={name} src={avatar} className="h-20 w-20" />

          <div className="space-y-1">
            <h2 className="text-2xl font-semibold text-[#214c3c]">{name}</h2>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="size-4" />
              <span>{user?.email ?? "-"}</span>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground">
              <Globe className="size-4" />
              <span>{user?.country ?? "-"}</span>
            </div>
          </div>
        </div>

        <EditProfileModal />
      </CardContent>
    </Card>
  )
}

export default ProfileCard
