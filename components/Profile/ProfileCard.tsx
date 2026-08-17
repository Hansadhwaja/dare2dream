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
    <Card className="rounded-2xl border-border shadow-sm">
      <CardContent className="flex flex-col gap-6 p-6 sm:p-7 md:flex-row md:items-center md:justify-between">
        {/* Profile Information */}
        <div className="flex min-w-0 items-center gap-4 sm:gap-5">
          <UserAvatar
            alt={name}
            src={avatar}
            className="size-20 shrink-0 sm:size-24"
          />

          <div className="min-w-0 space-y-2">
            <h2 className="truncate text-xl font-semibold text-[#214c3c] sm:text-2xl">
              {name}
            </h2>

            <div className="flex items-center gap-2 text-base text-muted-foreground sm:text-lg">
              <Mail className="size-5 shrink-0 text-[#214c3c]" />
              <span className="truncate">{user?.email ?? "-"}</span>
            </div>

            <div className="flex items-center gap-2 text-base text-muted-foreground sm:text-lg">
              <Globe className="size-5 shrink-0 text-[#214c3c]" />
              <span>{user?.country ?? "-"}</span>
            </div>
          </div>
        </div>

        {/* Edit Profile */}
        <div className="w-full md:w-auto">
          <EditProfileModal />
        </div>
      </CardContent>
    </Card>
  )
}

export default ProfileCard
