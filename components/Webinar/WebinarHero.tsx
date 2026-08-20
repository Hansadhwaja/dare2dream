import { Video } from "@/types/video.types"
import SectionHero from "../common/Hero/SectionHero"
import WebinarPreview from "./WebinarPreview"

interface Props{
video:Video
}

const WebinarHero = ({video}:Props) => {
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
      <WebinarPreview webinar={video} />
    </SectionHero>
  )
}

export default WebinarHero
