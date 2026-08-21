"use client"

import { useEffect } from "react"
import { User } from "@/types/auth.types"
import { useAuthStore } from "@/store/auth/authStore"

interface Props {
  user: User
}

const ProfileInitializer = ({ user }: Props) => {
  const updateUser = useAuthStore((state) => state.updateUser)

  useEffect(() => {
    updateUser(user)
  }, [user, updateUser])

  return null
}

export default ProfileInitializer
