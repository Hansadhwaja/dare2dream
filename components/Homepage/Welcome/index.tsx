import { getVideos } from "@/lib/api/home"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

import VideoPlayer from "@/components/common/Video/VideoPlayer"
import { Button } from "@/components/ui/button"

const WelcomeVideoSection = async () => {
  let welcomeVideo = null

  try {
    const videosRes = await getVideos({
      pageFilter: "home",
    })

    welcomeVideo = videosRes?.videos?.[0] ?? null
  } catch (error) {
    console.error("Failed to fetch welcome video:", error)
  }

  return (
    <section id="welcome" className="bg-card py-14 sm:py-16 lg:py-24">
      <div className="max-container grid gap-10 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-14">
        {/* Content */}
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary uppercase sm:text-sm">
            Welcome to Dare to Dream
          </p>

          <h2 className="mt-4 max-w-xl font-heading text-4xl leading-[1] font-semibold tracking-[-0.015em] sm:text-5xl sm:leading-[0.95] lg:text-6xl">
            Turning dreams into opportunity.
          </h2>

          <p className="mt-5 max-w-md font-sans text-base leading-7 font-normal text-muted-foreground sm:text-lg sm:leading-8">
            We empower individuals in under-resourced communities with the
            tools, experiences, mentorship, and connections they need to create
            fulfilling work and take ownership of their future.
          </p>

          <Link
            href="/webinar"
            className="mt-7 inline-flex items-center gap-2 font-sans text-base font-semibold text-foreground transition-opacity hover:opacity-60"
          >
            Explore our webinars
            <ArrowRight className="size-4 sm:size-5" />
          </Link>
        </div>

        {/* Video */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem] bg-primary sm:rounded-[1.75rem]">
          {welcomeVideo ? (
            <>
              <video
                src={welcomeVideo.videoUrl}
                muted
                playsInline
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-black/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <VideoPlayer
                  video={welcomeVideo.videoUrl}
                  title={welcomeVideo.title}
                  trigger={
                    <Button
                      type="button"
                      size="icon"
                      className="size-16 rounded-full bg-card text-primary shadow-2xl transition-transform hover:scale-105 hover:bg-card sm:size-20"
                      aria-label="Play Dare to Dream introduction video"
                    >
                      <Play className="ml-1 size-6 fill-current sm:size-7" />
                    </Button>
                  }
                />
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,color-mix(in_oklab,var(--secondary)_70%,transparent),transparent_25%),linear-gradient(135deg,color-mix(in_oklab,var(--primary)_80%,white),var(--primary))]" />

              <div className="relative flex size-16 items-center justify-center rounded-full bg-card text-primary shadow-2xl sm:size-20">
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
