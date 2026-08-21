import LatestUpdateHero from "@/components/LatestUpdate/LatestUpdateHero"
import RecentUpdates from "@/components/LatestUpdate/RecentUpdates"
import { getVideos } from "@/lib/api/server/home"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Latest Updates",
  description:
    "Stay connected with the latest news, stories, opportunities, and updates from Dare to Dream.",
}

const LatestUpdatePage = async () => {
  const videosRes = await getVideos({
    pageFilter: "updates",
  })

  const updateVideos = videosRes?.videos ?? []

  const featuredVideo = updateVideos[0]
  const latestUpdates = updateVideos.slice(1)

  return (
    <div>
      {featuredVideo && <LatestUpdateHero video={featuredVideo} />}

      {latestUpdates.length > 0 && <RecentUpdates updates={latestUpdates} />}
    </div>
  )
}

export default LatestUpdatePage
