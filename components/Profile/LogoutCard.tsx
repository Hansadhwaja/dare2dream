import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { LogOut } from "lucide-react"
import { Button } from "../ui/button"
import LogoutAlert from "../common/Alert/LogoutAlert"

const LogoutCard = () => {
  return (
    <Card className="rounded-2xl border-[#214c3c]/10 shadow-sm transition hover:shadow-md">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-3 text-lg text-[#214c3c] sm:text-xl">
          <LogOut className="size-5 text-[#f2b93f] sm:size-6" />
          Logout
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-base font-semibold text-foreground sm:text-lg">
            Sign out
          </h3>

          <p className="mt-1 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Logout from your current session.
          </p>
        </div>

        <LogoutAlert
          trigger={
            <Button
              variant="outline"
              className="h-11 px-6 text-base font-semibold sm:h-12 sm:px-7"
            >
              Logout
            </Button>
          }
        />
      </CardContent>
    </Card>
  )
}

export default LogoutCard