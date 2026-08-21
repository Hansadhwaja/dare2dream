import type { Metadata } from "next"
import CmsCTa from "@/components/common/CMS/CmsCTa"
import PolicyContent from "@/components/Policy/PolicyContent"
import { getCms } from "@/lib/api/home"
import { PrivacyPolicyContent } from "@/types/cms.types"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Dare to Dream Privacy Policy and learn how we collect, use, and protect your information.",
}

const PrivacyPage = async () => {
  const privacyRes = await getCms("privacy-policy")
  const privacyContent: PrivacyPolicyContent = JSON.parse(privacyRes.content)
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border">
        <div className="max-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="font-sans text-sm font-bold tracking-widest text-secondary uppercase sm:text-base">
              Privacy
            </p>

            <h1 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.02em] sm:text-6xl lg:text-8xl">
              {privacyContent.header}
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-lg leading-8 font-normal text-muted-foreground sm:text-xl sm:leading-9">
            {privacyContent.subheader}
            </p>
          </div>
        </div>
      </section>
      <PolicyContent content={privacyContent.sections} />
      <CmsCTa />
    </main>
  )
}

export default PrivacyPage
