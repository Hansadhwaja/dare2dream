import type { Metadata } from "next"
import CmsCTa from "@/components/common/CMS/CmsCTa"
import PolicyContent from "@/components/Policy/PolicyContent"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Dare to Dream Privacy Policy and learn how we collect, use, and protect your information.",
}

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border">
        <div className="max-container py-16 sm:py-20 lg:py-24">
          <div className="max-w-4xl">
            <p className="font-sans text-sm font-bold tracking-widest text-secondary uppercase sm:text-base">
              Privacy
            </p>

            <h1 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.02em] sm:text-6xl lg:text-8xl">
              Your privacy
              <br />
              <span className="text-secondary">matters to us.</span>
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-lg leading-8 font-light text-muted-foreground sm:text-xl sm:leading-9">
              We believe trust is the foundation of every meaningful
              relationship. This policy explains how Dare to Dream collects,
              uses, and protects your information.
            </p>

            <p className="mt-6 font-sans text-sm font-medium text-muted-foreground/75 sm:text-base">
              Last updated: August 2026
            </p>
          </div>
        </div>
      </section>
      <PolicyContent />
      <CmsCTa />
    </main>
  )
}

export default PrivacyPage
