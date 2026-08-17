import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { Shield } from "lucide-react"
import ChangePasswordModal from "./Modal/ChangePasswordModal"

const SecurityCard = () => {
  return (
    <Card className="rounded-2xl border-[#214c3c]/10 shadow-sm transition hover:shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-lg text-[#214c3c] sm:text-xl">
          <Shield className="size-5 text-[#f2b93f] sm:size-6" />
          Security
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            Change Password
          </h3>

          <p className="mt-1 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Update your password to keep your account secure.
          </p>
        </div>

        <ChangePasswordModal />
      </CardContent>
    </Card>
  )
}

export default SecurityCard