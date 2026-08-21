"use client"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import UserAvatar from "@/components/common/Avatar/UserAvatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogOut, User } from "lucide-react"
import LogoutAlert from "../common/Alert/LogoutAlert"
import { useAuthStore } from "@/store/auth/authStore"

const ProfileMenu = () => {
  const user = useAuthStore((state) => state.user)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="ml-2 h-12 w-12 rounded-full p-0 hover:bg-muted/50"
        >
          <UserAvatar src={user?.profilePic ?? null} alt={user?.firstName} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-56 rounded-2xl border border-border p-2 shadow-lg"
      >
        <DropdownMenuItem asChild className="rounded-xl">
          <Link
            href="/profile"
            className="flex h-12 items-center gap-3 px-3 text-base font-medium"
          >
            <User className="size-5" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="my-2" />

        <DropdownMenuItem
          asChild
          className="rounded-xl p-0 focus:bg-transparent"
        >
          <LogoutAlert
            trigger={
              <Button
                variant="ghost"
                className="h-12 w-full justify-start gap-3 rounded-xl px-3 text-base font-medium text-destructive hover:bg-destructive/10 hover:text-destructive"
              >
                <LogOut className="size-5" />
                Logout
              </Button>
            }
          />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileMenu
