import React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { AlertTriangle } from "lucide-react"
import { Button } from "../ui/button"

const DangerZoneCard = () => {
  return (
    <Card className="rounded-2xl border-red-200 bg-red-50 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-red-600">
          <AlertTriangle className="h-5 w-5" />
          Danger Zone
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-medium">Delete Account</h3>
          <p className="text-sm text-muted-foreground">
            Permanently delete your account and all associated data. This action
            cannot be undone.
          </p>
        </div>

        <Button variant="destructive">Delete Account</Button>
      </CardContent>
    </Card>
  )
}

export default DangerZoneCard
