"use client"

import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

import HeroStoryCard from "./HeroStoryCard"
import { useAuthStore } from "@/store/auth/authStore"

const HeroSection = () => {
  const token = useAuthStore((state) => state.token)

  return (
    <section className="max-container pt-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,color-mix(in_oklab,var(--secondary)_70%,transparent),transparent_27%),linear-gradient(125deg,color-mix(in_oklab,var(--primary)_92%,white),var(--primary)_60%,color-mix(in_oklab,var(--primary)_80%,black))]" />

        <div className="absolute -top-24 -right-24 size-80 rounded-full border-52 border-secondary/15" />

        <div className="absolute -bottom-28 -left-16 size-80 rounded-full border-48 border-white/5" />

        <div className="relative grid min-h-162.5 items-end gap-14 px-7 py-8 sm:px-10 lg:grid-cols-[1fr_.8fr] lg:px-16 lg:py-14">
          <div className="max-w-2xl pb-2 lg:pb-6">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-sans text-xs font-semibold tracking-[0.14em] text-white/80 uppercase backdrop-blur">
              <span className="size-2 rounded-full bg-secondary" />
              Dare to Dream Inc.
            </div>

            <h1 className="font-heading text-5xl leading-[0.94] font-semibold tracking-[-0.02em] text-balance text-white sm:text-6xl lg:text-[84px]">
              Where the
              <br />
              <span className="text-secondary">extraordinary</span>
              <br />
              becomes reality.
            </h1>

            <p className="mt-7 max-w-xl font-sans text-lg leading-8 text-white/68 sm:text-xl">
              Empowering people in under-resourced communities to create
              fulfilling work, take ownership, and build a better future
              together.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href={token ? "/webinar" : "/register"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-4 font-sans text-sm font-semibold text-secondary-foreground hover:brightness-95"
              >
                {token ? "Explore webinars" : "Start your journey"}
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="#welcome"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-sans text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                <Play className="size-4 fill-current" />
                Discover our story
              </Link>
            </div>
          </div>

          <HeroStoryCard />
        </div>
      </div>
    </section>
  )
}

export default HeroSection