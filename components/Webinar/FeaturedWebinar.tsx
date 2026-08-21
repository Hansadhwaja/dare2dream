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
    <section className="max-container py-12 sm:py-16 lg:py-24">
      {/* Heading */}
      <div className="mb-8 flex flex-col gap-5 sm:mb-12 sm:gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="font-sans text-sm font-bold tracking-widest text-secondary uppercase sm:text-base">
            Featured Webinar
          </p>

          <h2 className="mt-3 max-w-lg font-heading text-4xl leading-[0.98] font-semibold tracking-[-0.02em] sm:mt-4 sm:text-6xl sm:leading-[0.95]">
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

      {/* Featured Card */}
      <div className="overflow-hidden rounded-[1.5rem] bg-primary sm:rounded-[2rem]">
        <div className="grid lg:grid-cols-2">
          {/* Video */}
          <div className="group relative aspect-video overflow-hidden sm:aspect-[16/10] lg:aspect-auto lg:min-h-[560px]">
            <Image
              src={webinar.thumbnail}
              alt={webinar.title}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              priority
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-500 group-hover:bg-black/30" />

            {/* Bottom Gradient */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/40 to-transparent" />

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <VideoPlayer
                video={webinar.videoUrl}
                title={webinar.title}
                trigger={
                  <div className="group/play relative">
                    {/* Outer Ring */}
                    <div className="absolute -inset-2 rounded-full border border-white/30 opacity-0 transition-all duration-500 group-hover/play:-inset-3 group-hover/play:opacity-100 sm:-inset-3" />

                    <Button
                      type="button"
                      size="icon"
                      className="relative size-16 rounded-full bg-white/95 text-primary shadow-[0_10px_35px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:scale-110 hover:bg-secondary hover:text-secondary-foreground active:scale-95 sm:size-20 lg:size-24"
                    >
                      <Play className="ml-1 size-6 fill-current sm:size-8 lg:size-9" />
                    </Button>
                  </div>
                }
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-6 text-white sm:p-10 md:p-12 lg:p-16">
            {/* Badge */}
            <div className="flex items-center gap-2">
              <Badge className="h-7 w-fit rounded-full border-0 bg-secondary px-4 py-1.5 text-xs font-bold tracking-wide text-secondary-foreground uppercase sm:h-8 sm:px-5 sm:text-sm">
                Featured
              </Badge>
              <Badge className="h-7 w-fit rounded-full border-0 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-wide text-primary-foreground uppercase sm:h-8 sm:px-5 sm:text-sm">
                <Calendar className="size-4 shrink-0 text-secondary sm:size-5" />
                {formatDate(webinar.date)}
              </Badge>
            </div>
            {/* Title */}
            <h3 className="mt-5 font-heading text-3xl leading-[1.05] font-semibold tracking-[-0.01em] sm:mt-6 sm:text-5xl sm:leading-tight">
              {webinar.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm leading-6 text-white/80 sm:mt-6 sm:text-lg sm:leading-8">
              {webinar.description}
            </p>
            {/* CTA */}
            <div className="mt-7 sm:mt-9">
              <VideoPlayer
                video={webinar.videoUrl}
                title={webinar.title}
                trigger={
                  <Button
                    type="button"
                    className="group h-12 w-full rounded-full bg-secondary px-6 text-sm font-bold text-secondary-foreground shadow-lg transition-all duration-300 hover:bg-secondary/90 hover:shadow-xl sm:h-14 sm:w-fit sm:px-8 sm:text-lg"
                  >
                    Watch Webinar
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 sm:size-5" />
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
