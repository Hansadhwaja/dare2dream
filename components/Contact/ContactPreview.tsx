import Link from "next/link"
import { ArrowRight, MessageCircle, Users } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const ContactPreview = () => {
  return (
    <Card className="relative mx-auto w-full max-w-lg overflow-hidden border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
      {/* Decorative Background */}
      <div className="absolute -top-12 -right-12 size-32 rounded-full bg-secondary/15 blur-3xl sm:size-40" />
      <div className="absolute -bottom-16 -left-16 size-40 rounded-full bg-white/5 blur-3xl sm:size-48" />

      <CardHeader className="relative p-6 sm:p-8">
        <h3 className="mt-5 font-heading text-2xl font-semibold text-white sm:text-3xl">
          Let&apos;s start a conversation.
        </h3>

        <p className="mt-4 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          Have questions, ideas, or want to collaborate? Our team would love to
          connect with you.
        </p>
      </CardHeader>

      <CardContent className="relative space-y-5 p-6 pt-0 sm:p-8 sm:pt-0">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Quick Response */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <MessageCircle className="size-5" />
            </div>

            <div>
              <p className="text-base font-semibold text-white sm:text-lg">
                Quick Response
              </p>

              <p className="mt-0.5 text-sm text-white/65 sm:text-base">
                Within 24 hours
              </p>
            </div>
          </div>

          {/* Community */}
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <Users className="size-5" />
            </div>

            <div>
              <p className="text-base font-semibold text-white sm:text-lg">
                Community
              </p>

              <p className="mt-0.5 text-sm text-white/65 sm:text-base">
                Join the movement
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="#contact-form"
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-base font-bold text-secondary-foreground transition hover:brightness-95 sm:min-h-13 sm:text-lg"
        >
          Send a Message
          <ArrowRight className="size-5" />
        </Link>
      </CardContent>
    </Card>
  )
}

export default ContactPreview
