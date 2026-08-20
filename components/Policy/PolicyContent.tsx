import { getCms } from "@/lib/api/home"
import PolicySection from "./PolicySection"

const policySections = [
  {
    number: "01",
    title: "Information we collect",
    paragraphs: [
      "When you create an account, register for a webinar, contact us, or interact with our services, we may collect information that you voluntarily provide.",
      "This may include your name, email address, contact information, account details, and information you choose to provide when participating in our programs or community.",
    ],
  },
  {
    number: "02",
    title: "How we use your information",
    paragraphs: [
      "We use information we collect to provide and improve our services, manage your account, communicate with you, and provide access to webinars, updates, and other Dare to Dream experiences.",
      "We may also use your information to send important service notifications or, where permitted, information about events and opportunities that may be relevant to you.",
    ],
  },
  {
    number: "03",
    title: "Information sharing",
    paragraphs: [
      "We do not sell your personal information. We may share information with trusted service providers when necessary to operate our website, process services, maintain our systems, or provide functionality you have requested.",
      "We may also disclose information where required by law or when necessary to protect our rights, users, or services.",
    ],
  },
  {
    number: "04",
    title: "Cookies and technology",
    paragraphs: [
      "Our website may use cookies and similar technologies to maintain sessions, remember preferences, understand website usage, and improve your experience.",
      "You may be able to control cookies through your browser settings. Disabling certain cookies may affect some functionality of the website.",
    ],
  },
  {
    number: "05",
    title: "Data security",
    paragraphs: [
      "We take reasonable technical and organizational measures to protect your information from unauthorized access, alteration, disclosure, or destruction.",
      "However, no method of transmission or storage over the internet can be guaranteed to be completely secure.",
    ],
  },
  {
    number: "06",
    title: "Your choices",
    paragraphs: [
      "You may have rights to access, update, correct, or request deletion of certain personal information associated with your account.",
      "If you have questions about your information or would like to make a privacy-related request, please contact us.",
    ],
  },
  {
    number: "07",
    title: "Contact us",
    paragraphs: [
      "If you have questions about this Privacy Policy or how your information is handled, you can reach us at:",
    ],
    email: "ivan@daretodreaminc.com",
  },
]

const PolicyContent = async () => {
  const cmsRes = await getCms("privacy-policy")
  console.log(cmsRes)
  const privacyPolicy = cmsRes.content

  return (
    <section className="mx-auto max-w-250 px-5 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="space-y-14">
        {policySections.map((section) => (
          <PolicySection
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
                className="mt-4 inline-block font-sans text-base font-semibold text-secondary hover:underline sm:text-lg"
              >
                {section.email}
              </a>
            )}
          </PolicySection>
        ))}
      </div>
    </section>
  )
}

export default PolicyContent
