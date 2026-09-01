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
import Loader from "@/components/common/Loader/Loader"
interface Props {
  onSubmit: (v: ContactFormValues) => void
  isLoading: boolean
}

const ContactForm = ({ onSubmit, isLoading }: Props) => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  const onFormSubmit = (values: ContactFormValues) => {
    onSubmit(values)
    form.reset()
  }

  return (
    <form onSubmit={form.handleSubmit(onFormSubmit)} className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        <FormField
          control={form.control}
          name="name"
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

      <Button
        type="submit"
        size="lg"
        className="rounded-full"
        disabled={isLoading}
      >
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <Send className="mr-2 size-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}

export default ContactForm
