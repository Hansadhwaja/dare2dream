"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useAuthStore } from "@/store/auth/authStore"

const JoinCta = () => {
  const token = useAuthStore((state) => state.token)

  return (
    <section id="join" className="max-container py-16 lg:py-24">
      <div className="rounded-[2rem] bg-secondary/80 px-7 py-12 sm:px-12 lg:flex lg:items-end lg:justify-between lg:px-16 lg:py-14">
        <div>
          <p className="font-sans text-[10px] font-semibold tracking-[0.12em] text-secondary-foreground/55 uppercase">
            {token ? "Keep Growing" : "Your next step"}
          </p>

          <h2 className="font-heading mt-4 max-w-2xl text-5xl leading-[0.95] font-semibold tracking-[-0.015em] sm:text-6xl">
            {token
              ? "Keep learning, connecting, and moving forward."
              : "Your extraordinary journey can start here."}
          </h2>
        </div>

        <Link
          href={token ? "/webinar" : "/register"}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-sans text-sm font-semibold text-primary-foreground transition hover:brightness-95 lg:mt-0"
        >
          {token ? "Explore Webinars" : "Become a Member"}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  )
}

export default JoinCta