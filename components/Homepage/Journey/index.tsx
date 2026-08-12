import { journeyItems } from "@/constants"

import JourneyCard from "./JourneyCard"

const JourneySection = () => {
  return (
    <section
      id="community"
      className="max-container pb-16 lg:pb-24"
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {journeyItems.map((item) => (
          <JourneyCard key={item.number} {...item} />
        ))}
      </div>
    </section>
  )
}

export default JourneySection