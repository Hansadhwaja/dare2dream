import { journeyItems } from "@/constants"

import JourneyCard from "./JourneyCard"

const JourneySection = () => {
  return (
    <section
      id="community"
      className="mx-auto max-w-[1400px] px-5 pb-16 lg:px-8 lg:pb-24"
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