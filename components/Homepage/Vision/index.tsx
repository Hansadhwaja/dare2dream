const VisionSection = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-[1400px] px-5 py-16 lg:px-8 lg:py-24"
    >
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
            Our vision
          </p>

          <h2 className="font-heading mt-4 max-w-md text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
            Big dreams deserve a place to grow.
          </h2>
        </div>

        <div className="max-w-2xl lg:ml-auto">
          <p className="font-sans text-[15px] leading-8 font-light text-muted-foreground sm:text-base">
            Dare to Dream exists to bring ambitious people together and create
            an environment where ideas can become action. We connect people,
            experiences and opportunities so that possibility becomes progress.
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionSection