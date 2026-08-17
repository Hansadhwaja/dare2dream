import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Play, User } from "lucide-react"

import { Webinar } from "@/types/webinar.types"

interface Props {
  webinar: Webinar
}

const FeaturedWebinar = ({ webinar }: Props) => {
  return (
    <section className="max-container py-16 lg:py-24">
      {/* Heading */}
      <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-sans text-sm font-bold tracking-[0.1em] text-secondary uppercase sm:text-base">
            Featured Webinar
          </p>

          <h2 className="mt-4 max-w-lg font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
            This week&apos;s
            <br />
            spotlight.
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Start with our featured session, handpicked to inspire your journey in
          leadership, purpose, and personal growth.
        </p>
      </div>

      {/* Card */}
      <div className="overflow-hidden rounded-[2rem] bg-primary">
        <div className="grid lg:grid-cols-2">
          {/* Image */}
          <Link
            href="#"
            className="group relative aspect-square overflow-hidden lg:aspect-auto lg:min-h-[560px]"
          >
            <Image
              src={webinar.thumbnail}
              alt={webinar.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
              className="object-cover transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/25" />

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex size-20 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl transition duration-300 group-hover:scale-110 sm:size-24">
                <Play className="ml-1 size-8 fill-current sm:size-9" />
              </div>
            </div>
          </Link>

          {/* Content */}
          <div className="flex flex-col justify-center p-7 text-white sm:p-10 md:p-12 lg:p-16">
            <span className="inline-flex w-fit rounded-full bg-secondary px-5 py-2.5 text-sm font-bold tracking-wide text-secondary-foreground uppercase sm:text-base">
              Featured
            </span>

            <h3 className="mt-6 font-heading text-4xl leading-tight font-semibold sm:text-5xl">
              {webinar.title}
            </h3>

            <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {webinar.description}
            </p>

            {/* Metadata */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-base font-medium">
                <Clock className="size-5 shrink-0 text-secondary" />
                {webinar.duration}
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-base font-medium">
                <User className="size-5 shrink-0 text-secondary" />
                {webinar.speaker}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="#"
              className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-secondary px-7 py-4 text-base font-bold text-secondary-foreground transition hover:gap-3 sm:text-lg"
            >
              Watch Webinar
              <ArrowRight className="size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWebinar
