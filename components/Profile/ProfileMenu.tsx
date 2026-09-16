"use client"

import UserAvatar from "@/components/common/Avatar/UserAvatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogOut } from "lucide-react"
import LogoutAlert from "../common/Alert/LogoutAlert"
import { useAuthStore } from "@/store/auth/authStore"

const ProfileMenu = () => {
  const user = useAuthStore((state) => state.user)

  return (
    <div className="flex sm:items-center gap-3 max-sm:flex-col">
      {/* Profile */}
      <Button
        variant="ghost"
        size="icon"
        className="h-11 w-11 rounded-full p-0 transition-all duration-200 hover:bg-muted/60 hover:ring-2 hover:ring-primary/15 focus-visible:ring-2 focus-visible:ring-primary/30"
        asChild
      >
        <Link href="/profile" aria-label="Open profile">
          <UserAvatar
            src={user?.profilePic ?? null}
            alt={user?.firstName ?? "User"}
          />
        </Link>
      </Button>

      {/* Logout */}
      <LogoutAlert
        trigger={
          <Button
            variant="destructive"
            className="h-11 gap-2.5 rounded-full px-4 text-sm font-medium transition-all duration-200 hover:bg-destructive/10 focus-visible:ring-2 focus-visible:ring-destructive/30 sm:text-base"
          >
            <LogOut className="size-[18px]" />
            <span>Logout</span>
          </Button>
        }
      />
    </div>
  )
}

export default ProfileMenu
