import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Read the terms and conditions governing your use of the Dare to Dream website and services.",
}

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="border-b border-border">
        <div className="max-container py-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary uppercase">
              Terms
            </p>

            <h1 className="mt-4 font-heading text-5xl leading-[0.95] font-semibold tracking-[-0.02em] sm:text-6xl lg:text-8xl">
              Clear expectations.
              <br />
              <span className="text-secondary">Meaningful experiences.</span>
            </h1>

            <p className="mt-8 max-w-2xl font-sans text-lg leading-8 font-light text-muted-foreground sm:text-xl">
              These terms outline the rules and responsibilities that apply when
              you access and use Dare to Dream services.
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
          <TermsSection number="01" title="Acceptance of terms">
            <p>
              By accessing or using the Dare to Dream website and services, you
              agree to comply with these Terms of Service. If you do not agree
              with these terms, please do not use our services.
            </p>
          </TermsSection>

          <TermsSection number="02" title="Using our services">
            <p>
              You agree to use Dare to Dream services responsibly and in
              accordance with applicable laws and regulations.
            </p>

            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for activity that occurs through your
              account.
            </p>
          </TermsSection>

          <TermsSection number="03" title="Your account">
            <p>
              Some features may require you to create an account. You agree to
              provide accurate information and keep your account information
              reasonably up to date.
            </p>

            <p>
              We reserve the right to suspend or terminate accounts where
              necessary to protect our community, services, or users.
            </p>
          </TermsSection>

          <TermsSection number="04" title="Webinars and content">
            <p>
              Dare to Dream may provide webinars, articles, updates, videos,
              educational materials, and other content through the platform.
            </p>

            <p>
              Content is provided for informational and educational purposes.
              You should use your own judgment when applying information or
              ideas obtained through our services.
            </p>
          </TermsSection>

          <TermsSection number="05" title="User conduct">
            <p>
              You agree not to misuse the platform, interfere with its
              operation, attempt unauthorized access, distribute harmful
              material, or engage in behavior that could negatively affect other
              members or our services.
            </p>
          </TermsSection>

          <TermsSection number="06" title="Intellectual property">
            <p>
              Unless otherwise stated, content available through Dare to Dream,
              including branding, graphics, text, designs, and original
              materials, belongs to Dare to Dream or its respective licensors.
            </p>

            <p>
              You may not reproduce, distribute, modify, or commercially exploit
              protected content without appropriate permission.
            </p>
          </TermsSection>

          <TermsSection number="07" title="Third-party services">
            <p>
              Our website may contain links or integrations with third-party
              websites and services. We are not responsible for the content,
              policies, or practices of third-party services.
            </p>
          </TermsSection>

          <TermsSection number="08" title="Disclaimer">
            <p>
              We aim to provide a reliable and valuable experience, but our
              services are provided on an &quot;as available&quot; basis. We do
              not guarantee that the website or services will always be
              uninterrupted, error-free, or completely secure.
            </p>
          </TermsSection>

          <TermsSection number="09" title="Changes to these terms">
            <p>
              We may update these terms from time to time. When changes are
              made, the updated version will be posted on this page along with a
              revised effective date.
            </p>
          </TermsSection>

          <TermsSection number="10" title="Contact us">
            <p>
              If you have questions regarding these Terms of Service, please
              contact us.
            </p>

            <a
              href="mailto:ivan@daretodreaminc.com"
              className="mt-4 inline-block font-sans font-medium text-secondary hover:underline"
            >
              ivan@daretodreaminc.com
            </a>
          </TermsSection>
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

export default TermsPage
