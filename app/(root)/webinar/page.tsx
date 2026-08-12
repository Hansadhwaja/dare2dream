import FeaturedWebinar from "@/components/Webinar/FeaturedWebinar"
import LatestWebinars from "@/components/Webinar/LatestWebinars"
import WebinarHero from "@/components/Webinar/WebinarHero"
import { featuredWebinar, webinars } from "@/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Webinars",
  description:
    "Explore webinars, conversations, and practical insights designed to help you learn, grow, and turn your ideas into action.",
}

const WebinarPage = () => {
  return (
    <div>
      <WebinarHero />
      <FeaturedWebinar webinar={featuredWebinar} />
      <LatestWebinars webinars={webinars} />
    </div>
  )
}

export default WebinarPage
