import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const NextHomeSection = () => {
  return (
    <section className="max-container py-14 sm:py-16 lg:py-24">
      <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Main Statement */}
        <div className="rounded-[1.5rem] bg-muted p-6 sm:rounded-[2rem] sm:p-10 lg:p-16">
          <p className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary-foreground uppercase sm:text-sm">
            What&apos;s next?
          </p>

          <h2 className="mt-4 max-w-3xl font-heading text-4xl leading-[1] font-semibold tracking-[-0.02em] sm:text-5xl sm:leading-[0.95] lg:text-7xl">
            Building our next home.
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base leading-7 font-normal text-muted-foreground sm:mt-7 sm:text-lg sm:leading-8">
            Our entrepreneurs need dedicated spaces where they can develop
            their ideas, build their businesses, and create meaningful
            opportunities for themselves and their communities.
          </p>
        </div>

        {/* Supporting Card */}
        <div className="flex flex-col justify-between rounded-[1.5rem] bg-secondary p-6 sm:rounded-[2rem] sm:p-10">
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary-foreground/70 uppercase sm:text-sm">
              The future we&apos;re building
            </p>

            <p className="mt-5 font-heading text-2xl leading-[1.2] font-semibold tracking-[-0.015em] text-secondary-foreground sm:mt-6 sm:text-4xl">
              A place where ideas can grow into lasting possibilities.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-sans text-base font-semibold text-primary-foreground transition hover:brightness-95 sm:mt-10"
          >
            Get involved
            <ArrowUpRight className="size-4 sm:size-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NextHomeSection