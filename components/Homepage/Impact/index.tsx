const ImpactSection = () => {
  return (
    <section className="max-container py-14 sm:py-16 lg:py-24">
      <div className="rounded-[1.5rem] bg-primary px-6 py-10 text-primary-foreground sm:rounded-[2rem] sm:px-10 sm:py-12 lg:px-16 lg:py-16">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          {/* Heading */}
          <div>
            <p className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary uppercase sm:text-sm">
              Our impact
            </p>

            <h2 className="mt-4 max-w-md font-heading text-4xl leading-[1] font-semibold tracking-[-0.015em] sm:text-5xl sm:leading-[0.95] lg:text-6xl">
              A community already making an impact.
            </h2>
          </div>

          {/* Impact Number */}
          <div className="lg:ml-auto lg:max-w-2xl">
            <div className="font-heading text-6xl leading-none font-semibold tracking-[-0.03em] text-secondary sm:text-8xl lg:text-[120px]">
              200,000+
            </div>

            <p className="mt-4 max-w-lg font-sans text-base leading-7 font-normal text-primary-foreground/80 sm:text-lg sm:leading-8">
              Members across our combined organizations, creating a growing
              worldwide community built around opportunity, ownership,
              mentorship, and collective advancement.
            </p>
          </div>
        </div>

        {/* Supporting statement */}
        <div className="mt-10 border-t border-primary-foreground/15 pt-6 sm:mt-12 sm:pt-7">
          <p className="max-w-3xl font-sans text-base leading-7 font-normal text-primary-foreground/70 sm:text-lg sm:leading-8">
            Our work continues to connect people, experiences, and
            opportunities so that more individuals can turn their ideas into
            meaningful possibilities.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ImpactSection