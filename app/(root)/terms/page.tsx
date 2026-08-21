import type { Metadata } from "next"
import CmsCTa from "@/components/common/CMS/CmsCTa"
import TermsContent from "@/components/Terms/TermsContent"
import { getCms } from "@/lib/api/home"
import { TermsContent as TermsContentType } from "@/types/cms.types"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of the Dare to Dream website and services.",
}

const TermsPage = async () => {
  const termsRes = await getCms("agreement")
  const termsContent: TermsContentType = JSON.parse(termsRes.content)
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border">
        <div className="max-container py-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="font-sans text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
              Terms
            </p>

            <h1 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.02em] sm:text-6xl lg:text-8xl">
              {termsContent.header}
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-lg leading-8 font-normal text-muted-foreground sm:text-xl sm:leading-9">
              {termsContent.subheader}
            </p>
          </div>
        </div>
      </section>

      <TermsContent content={termsContent.sections} />
      <CmsCTa />
    </main>
  )
}

export default TermsPage
