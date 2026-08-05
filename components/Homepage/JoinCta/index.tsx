import { ArrowRight } from "lucide-react"
import Link from "next/link"

const JoinCta = () => {
  return (
    <section
      id="join"
      className="mx-auto max-w-350 px-5 py-16 lg:px-8 lg:py-24"
    >
      <div className="rounded-[2rem] bg-secondary px-7 py-12 sm:px-12 lg:flex lg:items-end lg:justify-between lg:px-16 lg:py-14">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary-foreground/55 uppercase">
            Ready?
          </p>

          <h2 className="font-heading mt-4 max-w-2xl text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
            Your extraordinary journey can start here.
          </h2>
        </div>

        <Link
          href="/contact"
          className="font-sans mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground lg:mt-0"
        >
          Become a member
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}

export default JoinCta