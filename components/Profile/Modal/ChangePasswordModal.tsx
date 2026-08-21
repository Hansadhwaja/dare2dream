"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { ChangePasswordFormValues } from "@/schemas/Profile/profile.schemas"
import { toast } from "sonner"
import { updatePassword } from "@/lib/api/client/profile"
import ChangePasswordForm from "../Form/ChangePasswordForm"
import { useAuthStore } from "@/store/auth/authStore"
import { clearServerToken } from "@/lib/api/client/auth"
import { useRouter } from "next/navigation"

const ChangePasswordModal = () => {
  const [open, setOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const logout = useAuthStore((state) => state.logout)
  const router = useRouter()

  const handleSubmit = async (values: ChangePasswordFormValues) => {
    try {
      setIsLoading(true)

      const response = await updatePassword(values)

      toast.success(response?.message ?? "User password updated successfully")

      setOpen(false)
      await clearServerToken()
      logout()
      router.replace("/login")
    } catch (error) {
      console.error("Password update failed:", error)

      toast.error(
        error instanceof Error ? error.message : "Error while updating password"
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Change Password</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold">
            Edit Profile
          </DialogTitle>
          <DialogDescription>
            Update your personal information below. Your changes will be saved
            to your profile.
          </DialogDescription>
        </DialogHeader>

        <ChangePasswordForm onSubmit={handleSubmit} isLoading={isLoading} />
      </DialogContent>
    </Dialog>
  )
}

export default ChangePasswordModal
