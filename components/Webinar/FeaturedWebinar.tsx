import Image from "next/image"
import { ArrowRight, Calendar, Play } from "lucide-react"

import { Video } from "@/types/video.types"
import VideoPlayer from "../common/Video/VideoPlayer"
import { Button } from "../ui/button"
import { formatDate } from "@/utils/date"
import { Badge } from "../ui/badge"

interface Props {
  webinar: Video
}

const FeaturedWebinar = ({ webinar }: Props) => {
  return (
    <section className="max-container py-16 lg:py-24">
      {/* Heading */}
      <div className="mb-10 flex flex-col gap-6 sm:mb-12 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-sans text-sm font-bold tracking-widest text-secondary uppercase sm:text-base">
            Featured Webinar
          </p>

          <h2 className="mt-4 max-w-lg font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
            This week&apos;s
            <br />
            spotlight.
          </h2>
        </div>

        <p className="max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          Start with our featured session, handpicked to inspire your journey
          in leadership, purpose, and personal growth.
        </p>
      </div>

      {/* Card */}
      <div className="overflow-hidden rounded-[2rem] bg-primary">
        <div className="grid lg:grid-cols-2">
          {/* Video Preview */}
          <div className="group relative aspect-square overflow-hidden lg:aspect-auto lg:min-h-[560px]">
            {/* Thumbnail */}
            <Image
              src={webinar.thumbnail}
              alt={webinar.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/30" />

            {/* Bottom gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/30 to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <VideoPlayer
                video={webinar.videoUrl}
                title={webinar.title}
                trigger={
                  <div className="group/play relative">
                    {/* Outer ring */}
                    <div className="absolute -inset-3 rounded-full border border-white/30 opacity-0 transition-all duration-500 group-hover/play:-inset-4 group-hover/play:opacity-100" />

                    <Button
                      type="button"
                      size="icon"
                      className="
                        relative size-20 rounded-full
                        bg-white/95 text-primary
                        shadow-[0_12px_45px_rgba(0,0,0,0.3)]
                        transition-all duration-500 ease-out
                        hover:bg-secondary hover:text-secondary-foreground
                        group-hover/play:scale-110
                        group-active/play:scale-95
                        sm:size-24
                      "
                    >
                      <Play className="ml-1 size-8 fill-current transition-transform duration-300 group-hover/play:scale-105 sm:size-9" />
                    </Button>
                  </div>
                }
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-7 text-white sm:p-10 md:p-12 lg:p-16">
            <Badge className="h-6 w-fit rounded-full border-0 bg-secondary px-5 py-2.5 text-sm font-semibold tracking-wide text-secondary-foreground uppercase shadow-sm sm:text-base">
              Featured
            </Badge>

            <h3 className="mt-6 font-heading text-4xl leading-tight font-semibold sm:text-5xl">
              {webinar.title}
            </h3>

            <p className="mt-6 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {webinar.description}
            </p>

            {/* Metadata */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-base font-medium">
                <Calendar className="size-5 shrink-0 text-secondary" />
                {formatDate(webinar.date)}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-9">
              <VideoPlayer
                video={webinar.videoUrl}
                title={webinar.title}
                trigger={
                  <Button
                    type="button"
                    className="group h-14 w-fit rounded-full bg-secondary px-7 text-base font-bold text-secondary-foreground shadow-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl sm:h-15 sm:px-8 sm:text-lg"
                  >
                    Watch Webinar
                    <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedWebinar