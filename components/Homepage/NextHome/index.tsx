import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const NextHomeSection = () => {
  return (
    <section className="max-container py-16 lg:py-24">
      <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
        {/* Main Statement */}
        <div className="rounded-[2rem] bg-muted p-8 sm:p-12 lg:p-16">
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary-foreground uppercase">
            What&apos;s next?
          </p>

          <h2 className="mt-5 max-w-3xl font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.02em] sm:text-6xl lg:text-7xl">
            Building our next home.
          </h2>

          <p className="mt-7 max-w-2xl font-sans text-[15px] leading-8 font-light text-muted-foreground sm:text-base">
            Our entrepreneurs need dedicated spaces where they can develop their
            ideas, build their businesses, and create meaningful opportunities
            for themselves and their communities.
          </p>
        </div>

        {/* Supporting Card */}
        <div className="flex flex-col justify-between rounded-[2rem] bg-secondary p-8 sm:p-10">
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary-foreground/55 uppercase">
              The future we&apos;re building
            </p>

            <p className="mt-6 font-heading text-3xl leading-tight font-semibold tracking-[-0.015em] text-secondary-foreground sm:text-4xl">
              A place where ideas can grow into lasting possibilities.
            </p>
          </div>

          <Link
            href="/contact"
            className="mt-10 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3.5 font-sans text-sm font-semibold text-primary-foreground transition hover:brightness-95"
          >
            Get involved
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NextHomeSection
