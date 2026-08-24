import { getVideos } from "@/lib/api/server/home"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import VideoPlayer from "@/components/common/Video/VideoPlayer"
import { Button } from "@/components/ui/button"
import { WebinarContent } from "@/types/cms.types"

interface Props {
  content: WebinarContent
}

const WelcomeVideoSection = async ({ content }: Props) => {
  const videosRes = await getVideos({
    pageFilter: "home",
  })

  const welcomeVideo = videosRes?.videos?.[0] ?? null

  return (
    <section id="welcome" className="bg-card py-14 sm:py-16 lg:py-24">
      <div className="max-container grid gap-10 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-14">
        {/* Content */}
        <div>
          <p className="badge-heading">
            {content.badge}
          </p>

          <h2 className="mt-4 max-w-xl font-heading text-4xl leading-[1] font-semibold tracking-[-0.015em] sm:text-5xl sm:leading-[0.95] lg:text-6xl">
            {content.heading}
          </h2>

          <p className="mt-5 max-w-md font-sans text-base leading-7 font-normal text-muted-foreground sm:text-lg sm:leading-8">
            {content.subheading}
          </p>

          <Link
            href="/webinar"
            className="mt-7 inline-flex items-center gap-2 font-sans text-base font-semibold text-foreground transition-all duration-300 hover:gap-3 hover:opacity-70"
          >
            {content.ctaText}
            <ArrowRight className="size-4 sm:size-5" />
          </Link>
        </div>

        {/* Video */}
        <div className="relative aspect-video overflow-hidden rounded-[1.5rem] bg-primary sm:rounded-[1.75rem]">
          {welcomeVideo ? (
            <VideoPlayer
              video={welcomeVideo.videoUrl}
              title={welcomeVideo.title}
              trigger={
                <div className="group absolute inset-0 cursor-pointer">
                  {/* Thumbnail */}
                  <Image
                    src={welcomeVideo.thumbnail}
                    alt={welcomeVideo.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 65vw"
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                  />

                  {/* Cinematic overlay */}
                  <div className="absolute inset-0 bg-black/15 transition-all duration-500 group-hover:bg-black/25" />

                  {/* Subtle bottom gradient */}
                  <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/25 to-transparent opacity-60" />

                  {/* Play button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Outer ring */}
                      <div className="absolute -inset-3 rounded-full border border-white/30 opacity-0 transition-all duration-500 group-hover:inset-[-7px] group-hover:opacity-100" />

                      <Button
                        type="button"
                        size="icon"
                        className="relative size-16 rounded-full bg-white/95 text-primary shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out group-hover:scale-110 group-active:scale-95 hover:bg-secondary hover:text-secondary-foreground sm:size-[72px]"
                      >
                        <Play className="ml-1 size-7 fill-current transition-transform duration-300 group-hover:scale-105 sm:size-8" />
                      </Button>
                    </div>
                  </div>
                </div>
              }
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-primary">
              <div className="flex size-16 items-center justify-center rounded-full bg-card text-primary shadow-2xl sm:size-20">
                <Play className="ml-1 size-6 fill-current sm:size-7" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default WelcomeVideoSection
