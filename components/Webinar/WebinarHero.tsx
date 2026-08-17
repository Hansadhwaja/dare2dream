import SectionHero from "../common/Hero/SectionHero"
import WebinarPreview from "./WebinarPreview"
import { featuredWebinar } from "@/constants"

const WebinarHero = () => {
  return (
    <SectionHero
      badge="Member Library"
      title={
        <>
          Learn from
          <br />
          <span className="text-secondary">the best.</span>
        </>
      }
      description="Access exclusive webinars featuring inspiring conversations, leadership insights, entrepreneurship, faith, and personal development."
    >
      <WebinarPreview webinar={featuredWebinar} />
    </SectionHero>
  )
}

export default WebinarHero
