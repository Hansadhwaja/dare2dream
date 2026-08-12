import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Webinar } from "@/types/webinar.types"
import WebinarCard from "./WebinarCard"

interface Props {
  webinars: Webinar[]
}

const LatestWebinars = ({ webinars }: Props) => {
  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="max-container py-16 lg:py-24">
        {/* Heading */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
              Latest Webinars
            </p>

            <h2 className="mt-4 max-w-lg font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
              Fresh insights,
              <br />
              every week.
            </h2>
          </div>

          <div className="flex flex-col items-start gap-5 lg:items-end">
            <p className="max-w-md text-base leading-8 text-muted-foreground">
              Discover our latest conversations on leadership, entrepreneurship,
              purpose, and personal growth.
            </p>

            <Link
              href="#"
              className="inline-flex items-center gap-2 font-semibold text-secondary transition hover:gap-3"
            >
              View All
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {webinars.slice(0, 3).map((webinar) => (
            <WebinarCard key={webinar.id} webinar={webinar} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestWebinars
