import { getVideos } from "@/lib/api/home"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const WelcomeVideoSection = async () => {
  // const videos = await getVideos({
  //   page: "1",
  //   limit: "10",
  //   pageFilter: "home",
  // })
  // console.log(videos)
  return (
    <section id="welcome" className="bg-card py-16 lg:py-24">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:px-8">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
            Welcome
          </p>

          <h2 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
            Start with the story.
          </h2>

          <p className="mt-5 max-w-md font-sans text-[15px] leading-7 font-light text-muted-foreground sm:text-base">
            See what Dare to Dream stands for and why community is at the heart
            of everything we do.
          </p>

          <Link
            href="/webinar"
            className="mt-7 inline-flex items-center gap-2 font-sans text-sm font-semibold text-foreground transition-opacity hover:opacity-60"
          >
            Explore webinars
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-primary">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,color-mix(in_oklab,var(--secondary)_70%,transparent),transparent_25%),linear-gradient(135deg,color-mix(in_oklab,var(--primary)_80%,white),var(--primary))]" />

          <button
            type="button"
            className="absolute inset-0 m-auto grid size-20 place-items-center rounded-full bg-card text-primary shadow-2xl transition-transform hover:scale-105"
            aria-label="Play welcome video"
          >
            <Play className="ml-1 size-7 fill-current" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default WelcomeVideoSection
