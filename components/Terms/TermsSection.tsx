import React from "react"

const TermsSection = ({
  number,
  title,
  children,
}: {
  number: string
  title: string
  children: React.ReactNode
}) => {
  return (
    <article className="grid gap-5 border-b border-border pb-12 md:grid-cols-[100px_1fr]">
      <span className="font-sans text-sm font-semibold tracking-[0.12em] text-secondary">
        {number}
      </span>

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

export default TermsSection
