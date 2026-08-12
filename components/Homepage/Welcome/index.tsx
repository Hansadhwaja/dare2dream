import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

const WelcomeVideoSection = () => {
  return (
    <section id="welcome" className="bg-card py-16 lg:py-24">
      <div className="max-container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
            Welcome to Dare to Dream
          </p>

          <h2 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
            Turning dreams into opportunity.
          </h2>

          <p className="mt-5 max-w-md font-sans text-[15px] leading-7 font-light text-muted-foreground sm:text-base">
            We empower individuals in under-resourced communities with the
            tools, experiences, mentorship, and connections they need to create
            fulfilling work and take ownership of their future.
          </p>

          <Link
            href="/webinar"
            className="mt-7 inline-flex items-center gap-2 font-sans text-sm font-semibold text-foreground transition-opacity hover:opacity-60"
          >
            Explore our webinars
            <ArrowRight className="size-4" />
          </Link>
        </div>

        <div className="relative aspect-[16/9] overflow-hidden rounded-[1.75rem] bg-primary">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,color-mix(in_oklab,var(--secondary)_70%,transparent),transparent_25%),linear-gradient(135deg,color-mix(in_oklab,var(--primary)_80%,white),var(--primary))]" />

          <button
            type="button"
            className="absolute inset-0 m-auto grid size-20 place-items-center rounded-full bg-card text-primary shadow-2xl transition-transform hover:scale-105"
            aria-label="Play Dare to Dream introduction video"
          >
            <Play className="ml-1 size-7 fill-current" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default WelcomeVideoSection
