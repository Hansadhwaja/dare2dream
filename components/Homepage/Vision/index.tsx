import { MissionContent } from "@/types/cms.types"

interface Props {
  content: MissionContent
}
const VisionSection = ({ content }: Props) => {
  return (
    <section id="about" className="max-container py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="badge-heading">
            {content.badge}
          </p>

          <h2 className="mt-4 max-w-md font-heading text-5xl leading-[0.98] font-semibold tracking-[-0.015em] sm:text-6xl lg:text-7xl">
            {content.heading}
          </h2>
        </div>

        <div className="max-w-2xl lg:ml-auto">
          <p className="font-sans text-base leading-8 font-normal text-muted-foreground sm:text-lg lg:text-xl lg:leading-9">
            {content.paragraph}
          </p>
        </div>
      </div>
    </section>
  )
}

export default VisionSection
