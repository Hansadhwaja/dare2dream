import SectionHero from "../common/Hero/SectionHero"
import UpdatePreview from "./UpdatePreview"
import { Video } from "@/types/video.types"

interface Props {
  video: Video
}

const LatestUpdateHero = ({ video }: Props) => {
  return (
    <SectionHero
      badge="Community Updates"
      title={
        <>
          Stay informed.
          <br />
          <span className="text-secondary">Stay inspired.</span>
        </>
      }
      description="Keep up with the latest announcements, upcoming events, new webinar releases, community highlights, and everything happening at Dare to Dream."
    >
      <UpdatePreview update={video} />
    </SectionHero>
  )
}

export default LatestUpdateHero
