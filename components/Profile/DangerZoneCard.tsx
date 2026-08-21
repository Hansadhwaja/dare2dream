"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { AlertTriangle } from "lucide-react"
import { Button } from "../ui/button"
import { toast } from "sonner"
import { deleteAccount } from "@/lib/api/client/profile"
import { clearServerToken } from "@/lib/api/client/auth"
import { useAuthStore } from "@/store/auth/authStore"
import { useRouter } from "next/navigation"
import Loader from "../common/Loader/Loader"

const DangerZoneCard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const logout = useAuthStore((state) => state.logout)
  const router = useRouter()

  const handleSubmit = async () => {
    try {
      setIsLoading(true)

      await deleteAccount()
      await clearServerToken()
      logout()

      toast.success("User account deleted successfully")
      router.replace("/login")
    } catch (error) {
      console.error("Delete account failed:", error)

      toast.error(
        error instanceof Error ? error.message : "Error while deleting account"
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="rounded-2xl border-red-200 bg-red-50 shadow-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-lg text-red-600 sm:text-xl">
          <AlertTriangle className="size-5 sm:size-6" />
          Danger Zone
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            Delete Account
          </h3>

          <p className="mt-1 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Permanently delete your account and all associated data. This
            action cannot be undone.
          </p>
        </div>

        <Button
          variant="destructive"
          onClick={handleSubmit}
          disabled={isLoading}
          className="h-11 w-full px-6 text-base font-semibold sm:h-12 sm:w-auto sm:px-7"
        >
          {isLoading ? <Loader /> : "Delete Account"}
        </Button>
      </CardContent>
    </Card>
  )
}

export default DangerZoneCard