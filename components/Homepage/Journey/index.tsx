import JourneyCard from "./JourneyCard"
import { MissionContentCards } from "@/types/cms.types"

interface Props {
  content: MissionContentCards[]
}

const JourneySection = ({ content }: Props) => {
  return (
    <section id="community" className="max-container pb-16 lg:pb-24">
      <div className="grid gap-4 lg:grid-cols-3">
        {content.map((item) => (
          <JourneyCard key={item.number} item={item} />
        ))}
      </div>
    </section>
  )
}

export default JourneySection
