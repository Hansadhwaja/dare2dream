"use client"

import { useState } from "react"
import ContactInfo from "./ContactInfo"
import ContactForm from "./Form/ContactForm"
import { ContactFormValues } from "@/schemas/Contact/contact.schemas"
import { sendMessage } from "@/lib/api/client/contact"
import { toast } from "sonner"

const ContactFormSection = () => {
  const [isLoading, setIsLoading] = useState(false)
  const handleSubmit = async (values: ContactFormValues) => {
    try {
      setIsLoading(true)

      const response = await sendMessage(values)

      toast.success("Message Sent successfully")
    } catch (error) {
      console.error("MEssage Sent Failed", error)

      toast.error(
        error instanceof Error ? error.message : "Error while sending message"
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact-form"
      className="mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_.7fr] lg:gap-12">
        {/* Form */}
        <div className="w-full rounded-3xl border bg-card p-5 shadow-sm sm:rounded-[2rem] sm:p-7 md:p-8 lg:p-10">
          <div className="mb-6 sm:mb-8">
            <p className="badge-heading">Contact Us</p>

            <h2 className="mt-2 font-heading text-2xl leading-tight font-semibold sm:mt-3 sm:text-3xl md:text-4xl">
              Send us a message
            </h2>

            <p className="mt-3 text-sm leading-6 text-muted-foreground sm:mt-4 sm:text-base sm:leading-7">
              Have a question or partnership opportunity? Fill out the form
              below and our team will get back to you shortly.
            </p>
          </div>

          <ContactForm onSubmit={handleSubmit} isLoading={isLoading} />
        </div>

        {/* Contact Info */}
        <div className="w-full">
          <ContactInfo />
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
