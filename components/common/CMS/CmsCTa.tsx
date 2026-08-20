import Link from "next/link"

const CmsCTa = () => {
  return (
    <section className="border-t border-border bg-secondary">
      <div className="max-container py-12 sm:py-14 lg:py-16">
        <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-sans text-sm font-bold tracking-widest text-secondary-foreground/65 uppercase sm:text-base">
              Have a question?
            </p>

            <h2 className="mt-2 font-heading text-3xl font-semibold text-secondary-foreground sm:text-4xl">
              We&apos;re here to help.
            </h2>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-12 w-fit items-center rounded-full bg-primary px-7 py-3.5 font-sans text-base font-bold text-primary-foreground transition hover:brightness-95 sm:text-lg"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CmsCTa
