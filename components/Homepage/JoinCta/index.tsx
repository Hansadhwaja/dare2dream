"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useAuthStore } from "@/store/auth/authStore"

const JoinCta = () => {
  const token = useAuthStore((state) => state.token)

  return (
    <section id="join" className="max-container py-14 sm:py-16 lg:py-24">
      <div className="rounded-[1.5rem] bg-secondary/80 px-6 py-10 sm:rounded-[2rem] sm:px-10 sm:py-12 lg:flex lg:items-end lg:justify-between lg:px-16 lg:py-14">
        <div>
          <p className="font-sans text-xs font-semibold tracking-[0.12em] text-secondary-foreground/70 uppercase sm:text-sm">
            {token ? "Keep Growing" : "Your next step"}
          </p>

          <h2 className="mt-4 max-w-2xl font-heading text-4xl leading-[1] font-semibold tracking-[-0.015em] sm:text-5xl sm:leading-[0.95] lg:text-6xl">
            {token
              ? "Keep learning, connecting, and moving forward."
              : "Your extraordinary journey can start here."}
          </h2>
        </div>

        <Link
          href={token ? "/webinar" : "/register"}
          className="mt-8 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-7 font-sans text-base font-semibold text-primary-foreground transition hover:brightness-95 sm:h-14 sm:px-8 lg:mt-0"
        >
          {token ? "Explore Webinars" : "Become a Member"}
          <ArrowRight className="size-4 sm:size-5" />
        </Link>
      </div>
    </section>
  )
}

export default JoinCta
