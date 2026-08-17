"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { clearServerToken } from "@/lib/api/auth"
import { useAuthStore } from "@/store/auth/authStore"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

interface LogoutAlertProps {
  trigger: ReactNode
}

const LogoutAlert = ({ trigger }: LogoutAlertProps) => {
  const logout = useAuthStore((state) => state.logout)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await clearServerToken()

      logout()

      router.replace("/login")
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent className="max-w-[calc(100%-2rem)] rounded-2xl sm:max-w-lg">
        <AlertDialogHeader className="space-y-3">
          <AlertDialogTitle className="text-xl font-semibold sm:text-2xl">
            Are you sure you want to logout?
          </AlertDialogTitle>

          <AlertDialogDescription className="text-sm leading-7 sm:text-base sm:leading-8">
            You will be signed out of your account and will need to log in
            again to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter className="mt-4 flex-col gap-3 sm:flex-row">
          <AlertDialogCancel className="h-11 w-full px-6 text-base sm:w-auto">
            Cancel
          </AlertDialogCancel>

          <AlertDialogAction
            variant="destructive"
            onClick={handleLogout}
            className="h-11 w-full px-6 text-base font-semibold sm:w-auto"
          >
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LogoutAlert