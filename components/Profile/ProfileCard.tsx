import { Globe, Mail } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import EditProfileModal from "./Modal/EditProfileModal"
import { getProfile } from "@/lib/api/server/profile"
import UserProfile from "./UserProfile"
import ProfileInitializer from "./ProfileInitializer"
import ProfileContent from "./ProfileContent"

const ProfileCard = async () => {
  const profileRes = await getProfile()
  const user = profileRes.user

  return (
    <>
      <ProfileInitializer user={user} />
      <Card className="rounded-2xl border-border shadow-sm">
        <CardContent className="flex flex-col gap-6 p-6 sm:p-7 md:flex-row md:items-center md:justify-between">
          {/* Profile Information */}
          <div className="flex min-w-0 items-center gap-4 sm:gap-5">
            <UserProfile />

            <ProfileContent />
          </div>

          {/* Edit Profile */}
          <div className="w-full md:w-auto">
            <EditProfileModal />
          </div>
        </CardContent>
      </Card>
    </>
  )
}

export default ProfileCard
