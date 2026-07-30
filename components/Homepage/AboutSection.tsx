import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function AboutSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-32">
      <div className="max-container">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          {/* Image */}
          {/* Image */}
          <div className="relative mx-auto w-full max-w-xl lg:mx-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src="/carousel/image-1.jpg"
                alt="About Dare to Dream"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            {/* Meaningful floating card */}
            <div className="absolute -bottom-6 left-6 max-w-[260px] rounded-2xl border bg-background/95 p-5 shadow-xl backdrop-blur sm:left-8">
              <div className="flex items-start gap-4">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <Check className="size-5" />
                </div>

                <div>
                  <p className="text-2xl font-bold tracking-tight">10+</p>

                  <p className="mt-1 text-sm font-medium">
                    Years of inspiring possibilities
                  </p>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    Helping people turn ideas, ambition, and dreams into action.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-2xl">
            <Badge
              variant="default"
              className="rounded-full px-4 py-1.5 text-xs"
            >
              About Us
            </Badge>

            <h2 className="mt-6 text-4xl leading-[1.08] font-bold tracking-tight sm:text-5xl lg:text-6xl">
              We believe every <span className="text-primary">dream</span>{" "}
              deserves a chance.
            </h2>

            <div className="mt-7 space-y-4 text-base leading-8 text-muted-foreground sm:text-lg">
              <p>
                Dare to Dream is built around a simple idea — helping people see
                possibilities beyond the limits they may have placed on
                themselves.
              </p>

              <p>
                Through meaningful experiences, support, and opportunity, we
                help turn ambition into action and ideas into something real.
              </p>
            </div>

            {/* Mission / Vision */}
            <div className="mt-9 grid gap-6 sm:grid-cols-2">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/15">
                    <Check className="size-4 text-primary" />
                  </div>

                  <h3 className="font-semibold">Our Mission</h3>
                </div>

                <p className="pl-12 text-sm leading-6 text-muted-foreground">
                  Create opportunities that inspire people to move forward.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-full bg-accent">
                    <Check className="size-4 text-accent-foreground" />
                  </div>

                  <h3 className="font-semibold">Our Vision</h3>
                </div>

                <p className="pl-12 text-sm leading-6 text-muted-foreground">
                  Build a future where bold ideas can become reality.
                </p>
              </div>
            </div>

            <Button asChild className="mt-9 rounded-full px-6">
              <Link href="/about">
                Discover Our Story
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
