import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const WelcomeVideoSection = () => {
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,color-mix(in_oklab,var(--secondary)_70%,transparent),transparent_25%),linear-gradient(135deg,color-mix(in_oklab,var(--primary)_80%,white),var(--primary))]" />

          <button
            type="button"
            className="absolute inset-0 m-auto grid size-16 place-items-center rounded-full bg-card text-primary shadow-2xl transition-transform hover:scale-105 sm:size-20"
            aria-label="Play Dare to Dream introduction video"
          >
            <Play className="ml-1 size-6 fill-current sm:size-7" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default WelcomeVideoSection