import FeaturedWebinar from "@/components/Webinar/FeaturedWebinar"
import LatestWebinars from "@/components/Webinar/LatestWebinars"
import WebinarHero from "@/components/Webinar/WebinarHero"
import { getVideos } from "@/lib/api/home"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Webinars",
  description:
    "Explore webinars, conversations, and practical insights designed to help you learn, grow, and turn your ideas into action.",
}

const WebinarPage = async () => {
  const videosRes = await getVideos({
    pageFilter: "webinar",
  })

  const webinarVideos = videosRes?.videos ?? []

  const featuredVideo = webinarVideos[0]
  const latestWebinars = webinarVideos.slice(1)

  return (
    <div>
      {featuredVideo && (
        <>
          <WebinarHero video={featuredVideo} />

          <FeaturedWebinar webinar={featuredVideo} />
        </>
      )}

      {latestWebinars.length > 0 && (
        <LatestWebinars webinars={latestWebinars} />
      )}
    </div>
  )
}

export default WebinarPage
