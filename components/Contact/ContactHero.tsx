import React from "react"
import SectionHero from "../common/Hero/SectionHero"
import ContactPreview from "./ContactPreview"

const ContactHero = () => {
  return (
    <SectionHero
      badge="Get in Touch"
      title={
        <>
          Let&apos;s start
          <br />
          the <span className="text-secondary">conversation.</span>
        </>
      }
      description="Whether you have a question, partnership opportunity, or simply want to connect, we're here to help. Reach out to the Dare to Dream team and we'll get back to you as soon as possible."
    >
      <ContactPreview />
    </SectionHero>
  )
}

export default ContactHero
