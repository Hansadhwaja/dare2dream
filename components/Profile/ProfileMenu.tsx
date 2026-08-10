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

const ProfileMenu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="ml-3 rounded-full p-0 hover:bg-transparent"
        >
          <UserAvatar src={""} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-48 rounded-xl">
        <DropdownMenuItem asChild>
          <Link
            href="/profile"
            className="flex cursor-pointer items-center gap-2"
          >
            <User className="size-4" />
            Profile
          </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          className="cursor-pointer text-destructive focus:text-destructive"
          asChild
        >
          <LogoutAlert
            trigger={
              <Button variant='destructive' className="flex items-center gap-2 w-full justify-start">
                <LogOut className="size-4" />
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
