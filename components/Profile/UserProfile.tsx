"use client"

import { useRef, useState } from "react"
import { Camera } from "lucide-react"
import { toast } from "sonner"
import UserAvatar from "../common/Avatar/UserAvatar"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/auth/authStore"
import Loader from "../common/Loader/Loader"
import { uploadImage } from "@/lib/api/client/upload"
import { updateProfile } from "@/lib/api/client/profile"

const UserProfile = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isUploading, setIsUploading] = useState(false)
  const user = useAuthStore((state) => state.user)
  const updateUser = useAuthStore((state) => state.updateUser)

  const avatar = user?.profilePic ?? null

  const handleImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith("image/")) {
      toast.error("Please select a valid image")
      return
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.error("Image size should be less than 5MB")
      return
    }

    try {
      setIsUploading(true)

      // Upload image
      const uploadRes = await uploadImage(file)

      const imageUrl = uploadRes?.urls[0]

      if (!imageUrl) {
        throw new Error("Image URL was not returned")
      }

      // Update profile
      const profileRes = await updateProfile({
        profilePic: imageUrl,
      })

      // Update local user state
      if (profileRes?.user) {
        updateUser(profileRes.user)
      }

      toast.success("Profile picture updated successfully")
    } catch (error) {
      console.error("Profile picture update failed:", error)

      toast.error(
        error instanceof Error
          ? error?.message
          : "Failed to update profile picture"
      )
    } finally {
      setIsUploading(false)
      event.target.value = ""
    }
  }

  return (
    <div className="relative w-fit">
      <UserAvatar
        alt={user?.firstName}
        src={avatar}
        className="size-20 shrink-0 sm:size-24"
      />

      <Button
        type="button"
        size="icon"
        variant="default"
        disabled={isUploading}
        onClick={() => inputRef.current?.click()}
        className="absolute right-0 bottom-0 size-8 rounded-full border-2 border-background bg-[#214c3c] shadow-md hover:bg-[#173b2f] sm:size-9"
      >
        {isUploading ? <Loader /> : <Camera className="size-4" />}

        <span className="sr-only">Update profile picture</span>
      </Button>

      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
        disabled={isUploading}
      />
    </div>
  )
}

export default UserProfile
