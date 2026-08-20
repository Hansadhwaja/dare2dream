import type { Metadata } from "next"
import CmsCTa from "@/components/common/CMS/CmsCTa"
import TermsContent from "@/components/Terms/TermsContent"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of the Dare to Dream website and services.",
}

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border">
        <div className="max-container py-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="font-sans text-sm font-semibold tracking-[0.12em] text-secondary uppercase">
              Terms
            </p>

            <h1 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.02em] sm:text-6xl lg:text-8xl">
              Clear expectations.
              <br />
              <span className="text-secondary">Meaningful experiences.</span>
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-lg leading-8 font-normal text-muted-foreground sm:text-xl sm:leading-9">
              These terms outline the rules and responsibilities that apply when
              you access and use Dare to Dream services.
            </p>

            <p className="mt-6 font-sans text-sm text-muted-foreground/70">
              Last updated: August 2026
            </p>
          </div>
        </div>
      </section>

      <TermsContent />
      <CmsCTa />
    </main>
  )
}

export default TermsPage
