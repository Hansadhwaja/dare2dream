import TermsSection from "./TermsSection"

const termsSections = [
  {
    number: "01",
    title: "Acceptance of terms",
    paragraphs: [
      `By accessing or using the Dare to Dream website and services, you agree to comply with these Terms of Service. If you do not agree with these terms, please do not use our services.`,
    ],
  },
  {
    number: "02",
    title: "Using our services",
    paragraphs: [
      `You agree to use Dare to Dream services responsibly and in accordance with applicable laws and regulations.`,
      `You are responsible for maintaining the confidentiality of your account credentials and for activity that occurs through your account.`,
    ],
  },
  {
    number: "03",
    title: "Your account",
    paragraphs: [
      `Some features may require you to create an account. You agree to provide accurate information and keep your account information reasonably up to date.`,
      `We reserve the right to suspend or terminate accounts where necessary to protect our community, services, or users.`,
    ],
  },
  {
    number: "04",
    title: "Webinars and content",
    paragraphs: [
      `Dare to Dream may provide webinars, articles, updates, videos, educational materials, and other content through the platform.`,
      `Content is provided for informational and educational purposes. You should use your own judgment when applying information or ideas obtained through our services.`,
    ],
  },
  {
    number: "05",
    title: "User conduct",
    paragraphs: [
      `You agree not to misuse the platform, interfere with its operation, attempt unauthorized access, distribute harmful material, or engage in behavior that could negatively affect other members or our services.`,
    ],
  },
  {
    number: "06",
    title: "Intellectual property",
    paragraphs: [
      `Unless otherwise stated, content available through Dare to Dream, including branding, graphics, text, designs, and original materials, belongs to Dare to Dream or its respective licensors.`,
      `You may not reproduce, distribute, modify, or commercially exploit protected content without appropriate permission.`,
    ],
  },
  {
    number: "07",
    title: "Third-party services",
    paragraphs: [
      `Our website may contain links or integrations with third-party websites and services. We are not responsible for the content, policies, or practices of third-party services.`,
    ],
  },
  {
    number: "08",
    title: "Disclaimer",
    paragraphs: [
      `We aim to provide a reliable and valuable experience, but our services are provided on an "as available" basis. We do not guarantee that the website or services will always be uninterrupted, error-free, or completely secure.`,
    ],
  },
  {
    number: "09",
    title: "Changes to these terms",
    paragraphs: [
      `We may update these terms from time to time. When changes are made, the updated version will be posted on this page along with a revised effective date.`,
    ],
  },
  {
    number: "10",
    title: "Contact us",
    paragraphs: [
      `If you have questions regarding these Terms of Service, please contact us.`,
    ],
    email: "ivan@daretodreaminc.com",
  },
]

const TermsContent = () => {
  return (
    <section className="mx-auto max-w-250 px-5 py-16 lg:px-8 lg:py-24">
      <div className="space-y-14">
        {termsSections.map((section) => (
          <TermsSection
            key={section.number}
            number={section.number}
            title={section.title}
          >
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {section.email && (
              <a
                href={`mailto:${section.email}`}
                className="mt-4 inline-block font-sans font-medium text-secondary hover:underline"
              >
                {section.email}
              </a>
            )}
          </TermsSection>
        ))}
      </div>
    </section>
  )
}

export default TermsContent
