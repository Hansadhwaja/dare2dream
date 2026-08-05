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

        <p className="mt-3 text-sm leading-6 text-white/70 sm:text-base">
          Have questions, ideas, or want to collaborate? Our team would love to
          connect with you.
        </p>
      </CardHeader>

      <CardContent className="relative space-y-4 p-6 pt-0 sm:p-8 sm:pt-0">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <MessageCircle className="size-5" />
            </div>

            <div>
              <p className="text-sm font-medium text-white">Quick Response</p>
              <p className="text-xs text-white/60">Within 24 hours</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
            <div className="flex size-10 items-center justify-center rounded-full bg-secondary/15 text-secondary">
              <Users className="size-5" />
            </div>

            <div>
              <p className="text-sm font-medium text-white">Community</p>
              <p className="text-xs text-white/60">Join the movement</p>
            </div>
          </div>
        </div>

        <Link
          href="#contact-form"
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold text-secondary-foreground transition hover:brightness-95"
        >
          Send a Message
          <ArrowRight className="size-4" />
        </Link>
      </CardContent>
    </Card>
  )
}

export default ContactPreview
