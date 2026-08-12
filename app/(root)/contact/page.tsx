import ContactFormSection from "@/components/Contact/ContactFormSection"
import ContactHero from "@/components/Contact/ContactHero"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Dare to Dream and learn more about our community, programs, and opportunities.",
}

const ContactPage = () => {
  return (
    <div>
      <ContactHero />
      <ContactFormSection />
    </div>
  )
}

export default ContactPage
