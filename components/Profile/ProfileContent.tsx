"use client"

import { useAuthStore } from "@/store/auth/authStore"
import { Globe, Mail } from "lucide-react"

const ProfileContent = () => {
  const user = useAuthStore((state) => state.user)
  const name =
    user?.firstName && user?.lastName
      ? `${user.firstName} ${user.lastName}`
      : "-"
  return (
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
  )
}

export default ProfileContent
