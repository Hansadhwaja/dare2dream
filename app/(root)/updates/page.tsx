import LatestUpdateHero from "@/components/LatestUpdate/LatestUpdateHero"
import RecentUpdates from "@/components/LatestUpdate/RecentUpdates"
import { updates } from "@/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Latest Updates",
  description:
    "Stay connected with the latest news, stories, opportunities, and updates from Dare to Dream.",
}

const LatestUpdatePage = () => {
  return (
    <div>
      <LatestUpdateHero />
      <RecentUpdates updates={updates} />
    </div>
  )
}

export default LatestUpdatePage
