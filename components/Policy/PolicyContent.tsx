import ContentSection from "../common/CMS/ContentSection"
import { PrivacyPolicySection } from "@/types/cms.types"

interface Props {
  content: PrivacyPolicySection[]
}

const PolicyContent = async ({ content }: Props) => {
  return (
    <section className="mx-auto max-w-250 px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="space-y-14">
        {content.map((section, idx) => (
          <ContentSection
            key={section.title}
            number={String(idx + 1)}
            title={section.title}
          >
            <p className="font-normal">{section.description}</p>
          </ContentSection>
        ))}
      </div>
    </section>
  )
}

export default PolicyContent
