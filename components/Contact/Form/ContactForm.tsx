"use client"

import { Send } from "lucide-react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { FieldContent, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import {
  ContactFormValues,
  contactSchema,
} from "@/schemas/Contact/contact.schemas"
import FormField from "@/components/common/Form/FormField"

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onSubmit = (values: ContactFormValues) => {
    console.log(values)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="fullName"
          render={(field) => (
            <>
              <FieldLabel>Full Name</FieldLabel>

              <FieldContent>
                <Input placeholder="John Doe" {...field} />
              </FieldContent>
            </>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={(field) => (
            <>
              <FieldLabel>Email Address</FieldLabel>

              <FieldContent>
                <Input type="email" placeholder="john@example.com" {...field} />
              </FieldContent>
            </>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="subject"
        render={(field) => (
          <>
            <FieldLabel>Subject</FieldLabel>

            <FieldContent>
              <Input placeholder="How can we help?" {...field} />
            </FieldContent>
          </>
        )}
      />

      <FormField
        control={form.control}
        name="message"
        render={(field) => (
          <>
            <FieldLabel>Message</FieldLabel>

            <FieldContent>
              <Textarea
                rows={6}
                placeholder="Write your message here..."
                {...field}
              />
            </FieldContent>
          </>
        )}
      />

      <Button type="submit" size="lg" className="rounded-full">
        <Send className="mr-2 size-4" />
        Send Message
      </Button>
    </form>
  )
}

export default ContactForm
