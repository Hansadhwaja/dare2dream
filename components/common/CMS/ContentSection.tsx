import React from "react"

const ContentSection = ({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) => {
  return (
    <article className="grid gap-6 border-b border-border pb-12 md:grid-cols-[140px_1fr] md:gap-8">
      {/* Number */}
      <span className="font-heading text-6xl leading-none font-semibold tracking-[-0.04em] text-secondary sm:text-7xl md:text-8xl">
        {number}
      </span>

      {/* Content */}
      <div>
        <h2 className="font-heading text-3xl font-semibold tracking-[-0.01em] sm:text-4xl">
          {title}
        </h2>

        <div className="mt-6 space-y-6 font-sans text-base leading-8 font-normal text-muted-foreground sm:text-lg sm:leading-9">
          {children}
        </div>
      </div>
    </article>
  )
}

export default ContentSection
