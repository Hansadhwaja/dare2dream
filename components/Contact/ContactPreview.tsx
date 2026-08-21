import Link from "next/link"
import { ArrowRight, MessageCircle, Users } from "lucide-react"

import { Card, CardContent, CardHeader } from "@/components/ui/card"

const ContactPreview = () => {
  return (
    <Card className="relative mx-auto w-full max-w-xl overflow-hidden border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
      {/* Decorative Background */}
      <div className="absolute -right-10 -top-10 size-28 rounded-full bg-secondary/15 blur-3xl sm:-right-12 sm:-top-12 sm:size-40" />
      <div className="absolute -bottom-12 -left-12 size-32 rounded-full bg-white/5 blur-3xl sm:-bottom-16 sm:-left-16 sm:size-48" />

      {/* Header */}
      <CardHeader className="relative p-5 sm:p-7 md:p-8 lg:p-10">
        <h3 className="font-heading text-xl font-semibold leading-tight text-white sm:text-2xl md:text-3xl">
          Let&apos;s start a conversation.
        </h3>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 sm:mt-4 sm:text-base sm:leading-7 md:text-lg md:leading-8">
          Have questions, ideas, or want to collaborate? Our team would love to
          connect with you.
        </p>
      </CardHeader>

      {/* Content */}
      <CardContent className="relative space-y-4 p-5 pt-0 sm:space-y-5 sm:p-7 sm:pt-0 md:p-8 md:pt-0 lg:p-10 lg:pt-0">
        {/* Info Cards */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
          {/* Quick Response */}
          <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4 md:p-5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary sm:size-11">
              <MessageCircle className="size-4 sm:size-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white sm:text-base md:text-lg">
                Quick Response
              </p>

              <p className="mt-0.5 text-xs text-white/65 sm:text-sm md:text-base">
                Within 24 hours
              </p>
            </div>
          </div>

          {/* Community */}
          <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 sm:p-4 md:p-5">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-secondary/15 text-secondary sm:size-11">
              <Users className="size-4 sm:size-5" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-white sm:text-base md:text-lg">
                Community
              </p>

              <p className="mt-0.5 text-xs text-white/65 sm:text-sm md:text-base">
                Join the movement
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <Link
          href="#contact-form"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-bold text-secondary-foreground transition-all hover:brightness-95 sm:min-h-12 sm:px-6 sm:text-base md:min-h-13 md:text-lg"
        >
          Send a Message
          <ArrowRight className="size-4 sm:size-5" />
        </Link>
      </CardContent>
    </Card>
  )
}

export default ContactPreview