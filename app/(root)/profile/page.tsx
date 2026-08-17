import DangerZoneCard from "@/components/Profile/DangerZoneCard"
import LogoutCard from "@/components/Profile/LogoutCard"
import ProfileCard from "@/components/Profile/ProfileCard"
import SecurityCard from "@/components/Profile/SecurityCard"
import { Separator } from "@/components/ui/separator"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "My Profile",
  description:
    "Manage your Dare to Dream profile, account details, and membership information.",
}

const ProfilePage = () => {
  return (
    <section className="min-h-screen py-16 lg:py-20">
      <div className="container mx-auto max-w-4xl px-5 sm:px-6">
        {/* Header */}
        <header className="mb-10">
          <h1 className="font-serif text-4xl font-semibold tracking-tight text-primary sm:text-5xl lg:text-6xl">
            My Profile
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            Manage your personal information, security settings, and account
            preferences.
          </p>

          <Separator className="mt-8" />
        </header>

        <div className="space-y-10">
          {/* Profile */}
          <section className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-primary">
                Personal Information
              </h2>

              <p className="mt-1 text-base leading-7 text-muted-foreground">
                View and update your account details.
              </p>
            </div>

            <ProfileCard />
          </section>

          {/* Account */}
          <section className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-primary">
                Account
              </h2>

              <p className="mt-1 text-base leading-7 text-muted-foreground">
                Manage your password and account session.
              </p>
            </div>

            <div className="space-y-6">
              <SecurityCard />
              <LogoutCard />
            </div>
          </section>

          {/* Danger Zone */}
          <section className="space-y-5">
            <div>
              <h2 className="text-xl font-semibold text-destructive">
                Danger Zone
              </h2>

              <p className="mt-1 text-base leading-7 text-muted-foreground">
                Actions performed here are permanent and cannot be undone.
              </p>
            </div>

            <DangerZoneCard />
          </section>
        </div>
      </div>
    </section>
  )
}

export default ProfilePage