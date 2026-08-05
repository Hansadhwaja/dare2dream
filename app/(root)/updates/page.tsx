import LatestUpdateHero from "@/components/LatestUpdate/LatestUpdateHero"
import RecentUpdates from "@/components/LatestUpdate/RecentUpdates"
import { updates } from "@/constants"

const LatestUpdatePage = () => {
  return (
    <div>
      <LatestUpdateHero />
      <RecentUpdates updates={updates} />
    </div>
  )
}

export default LatestUpdatePage
