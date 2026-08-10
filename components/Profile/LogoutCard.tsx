import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { LogOut } from "lucide-react"
import { Button } from "../ui/button"
import LogoutAlert from "../common/Alert/LogoutAlert"

const LogoutCard = () => {
  return (
    <Card className="rounded-2xl border-[#214c3c]/10 shadow-sm transition hover:shadow-md">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-[#214c3c]">
          <LogOut className="h-5 w-5 text-[#f2b93f]" />
          Logout
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-medium">Sign out</h3>
          <p className="text-sm text-muted-foreground">
            Logout from your current session.
          </p>
        </div>

        <LogoutAlert trigger={<Button variant="outline">Logout</Button>} />
      </CardContent>
    </Card>
  )
}

export default LogoutCard
