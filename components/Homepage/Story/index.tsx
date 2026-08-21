import { StoryContent } from "@/types/cms.types"

interface Props {
  content: StoryContent
}

const OurStorySection = ({ content }: Props) => {
  return (
    <section className="max-container py-14 sm:py-16 lg:py-24">
      <div className="grid gap-10 sm:gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        {/* Heading */}
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary uppercase sm:text-sm">
            {content.badge}
          </p>

          <h2 className="mt-4 max-w-md font-heading text-4xl leading-[1] font-semibold tracking-[-0.015em] sm:text-5xl sm:leading-[0.95] lg:text-6xl">
            {content.heading}
          </h2>
        </div>

        {/* Story */}
        <div className="max-w-2xl lg:ml-auto">
          <p className="font-sans text-lg leading-8 font-normal text-foreground sm:text-xl sm:leading-9">
            {content.paragraphs}
          </p>
        </div>
      </div>

      {/* Statement */}
      <div className="mt-14 border-t border-border pt-8 sm:mt-16 sm:pt-10 lg:mt-24 lg:pt-14">
        <p className="max-w-5xl font-heading text-2xl leading-[1.25] font-medium tracking-[-0.015em] text-muted-foreground sm:text-3xl sm:leading-tight lg:text-5xl">
          {content.callout}
        </p>
      </div>
    </section>
  )
}

export default OurStorySection
