"use client";

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
    await clearServerToken()
    logout()
    router.replace("/login")
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-semibold">
            Are you sure you want to logout?
          </AlertDialogTitle>

          <AlertDialogDescription>
            You will be signed out of your account and will need to log in again
            to access your account.
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>

          <AlertDialogAction variant={"destructive"} onClick={handleLogout}>
            Logout
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default LogoutAlert
