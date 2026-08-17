const OurStorySection = () => {
  return (
    <section className="max-container py-14 sm:py-16 lg:py-24">
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        {/* Heading */}
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary uppercase sm:text-sm">
            Our story
          </p>

          <h2 className="mt-4 max-w-md font-heading text-4xl leading-[1] font-semibold tracking-[-0.015em] sm:text-5xl sm:leading-[0.95] lg:text-6xl">
            Opportunity doesn&apos;t have an age limit.
          </h2>
        </div>

        {/* Story */}
        <div className="max-w-2xl lg:ml-auto">
          <p className="font-sans text-lg leading-8 font-normal text-foreground sm:text-xl sm:leading-9">
            Dare to Dream began with building financial foundations and
            supporting young people who wanted more out of life. As we continued
            that work, we recognized something important: the challenges faced
            by entrepreneurs don&apos;t simply disappear at the age of 18.
          </p>

          <p className="mt-6 font-sans text-base leading-7 font-normal text-muted-foreground sm:text-lg sm:leading-8">
            That realization expanded our mission. Today, we work to create
            entrepreneurial ecosystems where people can develop their ideas,
            build fulfilling work, take ownership of their future, and reinvest
            in the communities around them.
          </p>
        </div>
      </div>

      {/* Statement */}
      <div className="mt-14 border-t border-border pt-8 sm:mt-16 sm:pt-10 lg:mt-24 lg:pt-14">
        <p className="max-w-5xl font-heading text-2xl leading-[1.25] font-medium tracking-[-0.015em] text-muted-foreground sm:text-3xl sm:leading-tight lg:text-5xl">
          We believe people deserve more than an opportunity to dream. They
          deserve the tools, community, and support to make that dream possible.
        </p>
      </div>
    </section>
  )
}

export default OurStorySection
