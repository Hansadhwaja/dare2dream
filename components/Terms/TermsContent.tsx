import { TermsSection as TermsSectionType } from "@/types/cms.types"
import ContentSection from "../common/CMS/ContentSection"

interface Props {
  content: TermsSectionType[]
}

const TermsContent = ({ content }: Props) => {
  return (
    <section className="mx-auto max-w-250 px-5 py-16 lg:px-8 lg:py-24">
      <div className="space-y-14">
        {content.map((section, idx) => (
          <ContentSection
            key={section.title}
            number={String(idx + 1)}
            title={section.title}
          >
            {section.description}
          </ContentSection>
        ))}
      </div>
    </section>
  )
}

export default TermsContent
