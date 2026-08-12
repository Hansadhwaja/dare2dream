import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Dare to Dream Privacy Policy and learn how we collect, use, and protect your information.",
}

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-container py-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
              Privacy
            </p>

            <h1 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.02em] sm:text-6xl lg:text-8xl">
              Your privacy
              <br />
              <span className="text-secondary">matters to us.</span>
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-lg leading-8 font-light text-muted-foreground sm:text-xl">
              We believe trust is the foundation of every meaningful
              relationship. This policy explains how Dare to Dream collects,
              uses, and protects your information.
            </p>

            <p className="mt-6 font-sans text-xs text-muted-foreground/70">
              Last updated: August 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[1000px] px-5 py-16 lg:px-8 lg:py-24">
        <div className="space-y-14">
          <PolicySection number="01" title="Information we collect">
            <p>
              When you create an account, register for a webinar, contact us, or
              interact with our services, we may collect information that you
              voluntarily provide.
            </p>

            <p>
              This may include your name, email address, contact information,
              account details, and information you choose to provide when
              participating in our programs or community.
            </p>
          </PolicySection>

          <PolicySection number="02" title="How we use your information">
            <p>
              We use information we collect to provide and improve our services,
              manage your account, communicate with you, and provide access to
              webinars, updates, and other Dare to Dream experiences.
            </p>

            <p>
              We may also use your information to send important service
              notifications or, where permitted, information about events and
              opportunities that may be relevant to you.
            </p>
          </PolicySection>

          <PolicySection number="03" title="Information sharing">
            <p>
              We do not sell your personal information. We may share information
              with trusted service providers when necessary to operate our
              website, process services, maintain our systems, or provide
              functionality you have requested.
            </p>

            <p>
              We may also disclose information where required by law or when
              necessary to protect our rights, users, or services.
            </p>
          </PolicySection>

          <PolicySection number="04" title="Cookies and technology">
            <p>
              Our website may use cookies and similar technologies to maintain
              sessions, remember preferences, understand website usage, and
              improve your experience.
            </p>

            <p>
              You may be able to control cookies through your browser settings.
              Disabling certain cookies may affect some functionality of the
              website.
            </p>
          </PolicySection>

          <PolicySection number="05" title="Data security">
            <p>
              We take reasonable technical and organizational measures to
              protect your information from unauthorized access, alteration,
              disclosure, or destruction.
            </p>

            <p>
              However, no method of transmission or storage over the internet
              can be guaranteed to be completely secure.
            </p>
          </PolicySection>

          <PolicySection number="06" title="Your choices">
            <p>
              You may have rights to access, update, correct, or request
              deletion of certain personal information associated with your
              account.
            </p>

            <p>
              If you have questions about your information or would like to make
              a privacy-related request, please contact us.
            </p>
          </PolicySection>

          <PolicySection number="07" title="Contact us">
            <p>
              If you have questions about this Privacy Policy or how your
              information is handled, you can reach us at:
            </p>

            <a
              href="mailto:ivan@daretodreaminc.com"
              className="mt-4 inline-block font-sans font-medium text-secondary hover:underline"
            >
              ivan@daretodreaminc.com
            </a>
          </PolicySection>
        </div>
      </section>

      <section className="border-t border-border bg-secondary">
        <div className="max-container py-12 lg:py-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary-foreground/60 uppercase">
                Have a question?
              </p>

              <h2 className="mt-2 font-heading text-3xl font-semibold text-secondary-foreground sm:text-4xl">
                We&apos;re here to help.
              </h2>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center rounded-full bg-primary px-6 py-3 font-sans text-sm font-semibold text-primary-foreground transition hover:brightness-95"
            >
              Contact us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

const PolicySection = ({
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
      <span className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary">
        {number}
      </span>

      <div>
        <h2 className="font-heading text-3xl font-semibold tracking-[-0.01em] sm:text-4xl">
          {title}
        </h2>

        <div className="mt-6 space-y-5 font-sans text-[15px] leading-8 font-light text-muted-foreground sm:text-base">
          {children}
        </div>
      </div>
    </article>
  )
}

export default PrivacyPage
