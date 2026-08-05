import FeaturedWebinar from "@/components/Webinar/FeaturedWebinar"
import LatestWebinars from "@/components/Webinar/LatestWebinars"
import WebinarHero from "@/components/Webinar/WebinarHero"
import { featuredWebinar, webinars } from "@/constants"

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
