
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Shield } from "lucide-react"
import ChangePasswordModal from "./Modal/ChangePasswordModal"

const SecurityCard = () => {
  return (
    <Card className="rounded-2xl border-[#214c3c]/10 shadow-sm transition hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#214c3c]">
          <Shield className="h-5 w-5 text-[#f2b93f]" />
          Security
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-medium">Change Password</h3>
          <p className="text-sm text-muted-foreground">
            Update your password to keep your account secure.
          </p>
        </div>

        <ChangePasswordModal />
      </CardContent>
    </Card>
  )
}

export default SecurityCard
