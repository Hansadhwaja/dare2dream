import WebinarCard from "./WebinarCard"
import { Video } from "@/types/video.types"

interface Props {
  webinars: Video[]
}

const LatestWebinars = ({ webinars }: Props) => {
  return (
    <section className="bg-card py-14 sm:py-16 lg:py-24">
      <div className="max-container py-14 sm:py-16 lg:py-24">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-sans text-sm font-bold tracking-[0.1em] text-secondary uppercase sm:text-base">
              Latest Webinars
            </p>

            <h2 className="mt-4 max-w-lg font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
              Fresh insights,
              <br />
              every week.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <p className="max-w-md text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Discover our latest conversations on leadership, entrepreneurship,
              purpose, and personal growth.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-7 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {webinars.map((webinar) => (
            <WebinarCard key={webinar._id} webinar={webinar} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestWebinars
