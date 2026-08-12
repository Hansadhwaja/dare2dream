const VisionSection = () => {
  return (
    <section
      id="about"
      className="max-container py-16 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
            Our vision
          </p>

          <h2 className="font-heading mt-4 max-w-md text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
            Everyone has the right to have a dream.
          </h2>
        </div>

        <div className="max-w-2xl lg:ml-auto">
          <p className="font-sans text-[15px] leading-8 font-light text-muted-foreground sm:text-base">
            Dare to Dream fosters entrepreneurial ecosystems that empower
            individuals in under-resourced communities to create fulfilling
            work, take ownership, and reinvest in one another. We believe
            meaningful opportunity begins when people have the space, support,
            and community to turn their dreams into reality.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionSection