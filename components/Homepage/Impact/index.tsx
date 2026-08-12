const ImpactSection = () => {
  return (
    <section className="max-container py-16 lg:py-24">
      <div className="rounded-[2rem] bg-primary px-7 py-12 text-primary-foreground sm:px-10 lg:px-16 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
          <div>
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
              Our impact
            </p>

            <h2 className="font-heading mt-4 max-w-md text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
              A community already making an impact.
            </h2>
          </div>

          <div className="lg:ml-auto lg:max-w-2xl">
            <div className="font-heading text-7xl leading-none font-semibold tracking-[-0.03em] text-secondary sm:text-8xl lg:text-[120px]">
              200,000+
            </div>

            <p className="font-sans mt-4 max-w-lg text-[15px] leading-7 font-light text-primary-foreground/65 sm:text-base">
              Members across our combined organizations, creating a growing
              worldwide community built around opportunity, ownership,
              mentorship, and collective advancement.
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6">
          <p className="font-sans max-w-3xl text-sm leading-7 text-primary-foreground/50">
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