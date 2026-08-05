"use client"

import ContactInfo from "./ContactInfo"
import ContactForm from "./Form/ContactForm"

const ContactFormSection = () => {
  return (
    <section id="contact-form" className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.3fr_.7fr]">
        {/* Form */}
        <div className="rounded-[2rem] border bg-card p-8 shadow-sm lg:p-10">
          <div className="mb-8">
            <p className="text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
              Contact Us
            </p>

            <h2 className="mt-3 font-heading text-4xl font-semibold">
              Send us a message
            </h2>

            <p className="mt-4 text-muted-foreground">
              Have a question or partnership opportunity? Fill out the form
              below and our team will get back to you shortly.
            </p>
          </div>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <ContactInfo />
      </div>
    </section>
  )
}

export default ContactFormSection
