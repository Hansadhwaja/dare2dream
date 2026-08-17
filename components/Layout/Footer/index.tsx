"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react"

import { useAuthStore } from "@/store/auth/authStore"

const Footer = () => {
  const year = new Date().getFullYear()
  const token = useAuthStore((state) => state.token)

  return (
    <footer
      id="contact"
      className="border-t border-border bg-primary text-primary-foreground"
    >
      <div className="max-container py-14 sm:py-16 lg:py-20">
        {/* Main Footer */}
        <div className="grid gap-10 sm:gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/footer-logo.png"
                alt="Dare to Dream"
                width={120}
                height={48}
                priority
                className="h-auto w-24 object-contain sm:w-28"
              />
            </Link>

            <p className="mt-5 max-w-lg text-base leading-7 font-normal text-primary-foreground/75 sm:mt-6 sm:text-lg sm:leading-8">
              Dare to Dream empowers individuals in under-resourced communities
              to create fulfilling work, take ownership, and build a better
              future through entrepreneurship, mentorship, and community.
            </p>

            <Link
              href={token ? "/webinar" : "/register"}
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-secondary px-6 text-base font-semibold text-secondary-foreground transition hover:brightness-95 sm:h-14 sm:px-7"
            >
              {token ? "Explore Webinars" : "Start Your Journey"}
              <ArrowUpRight className="size-4 sm:size-5" />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-[0.16em] text-secondary uppercase sm:text-base">
              Explore
            </h3>

            <nav className="flex flex-col gap-4 text-base font-normal text-primary-foreground/75 sm:text-lg">
              <Link
                href="/"
                className="transition-colors hover:text-primary-foreground"
              >
                Home
              </Link>

              <Link
                href="/webinar"
                className="transition-colors hover:text-primary-foreground"
              >
                Webinars
              </Link>

              <Link
                href="/updates"
                className="transition-colors hover:text-primary-foreground"
              >
                Latest Updates
              </Link>

              {token && (
                <Link
                  href="/profile"
                  className="transition-colors hover:text-primary-foreground"
                >
                  Profile
                </Link>
              )}

              <Link
                href="/contact"
                className="transition-colors hover:text-primary-foreground"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Connect */}
          <div>
            <h3 className="mb-5 text-sm font-bold tracking-[0.16em] text-secondary uppercase sm:text-base">
              Connect
            </h3>

            <div className="space-y-5 text-base font-normal leading-7 text-primary-foreground/75 sm:text-lg sm:leading-8">
              <a
                href="mailto:ivan@daretodreaminc.com"
                className="flex items-start gap-3 transition-colors hover:text-primary-foreground"
              >
                <Mail className="mt-1 size-5 shrink-0" />
                <span className="break-all">ivan@daretodreaminc.com</span>
              </a>

              <a
                href="tel:+14803312624"
                className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
              >
                <Phone className="size-5 shrink-0" />
                <span>+1 480 331 2624</span>
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 size-5 shrink-0" />

                <span>
                  Arizona, USA
                  <br />
                  Building dreams, creating possibilities.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-primary-foreground/15 sm:my-12" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-5 text-sm text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between sm:text-base">
          <p>
            © {year} Dare to Dream. Where The Extraordinary Becomes Reality.
          </p>

          <div className="flex flex-wrap gap-x-6 gap-y-3">
            <Link
              href="/privacy"
              className="transition-colors hover:text-primary-foreground"
            >
              Privacy
            </Link>

            <Link
              href="/contact"
              className="transition-colors hover:text-primary-foreground"
            >
              Contact
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-primary-foreground"
            >
              Terms
            </Link>
          </div>
        </div>

        {/* Agency Credit */}
        <div className="mt-6 border-t border-primary-foreground/10 pt-5 text-center">
          <p className="font-sans text-sm text-primary-foreground/55">
            Made with <span className="text-secondary">♥</span> by{" "}
            <a
              href="https://quantumitinnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-primary-foreground/70 transition-colors hover:text-secondary"
            >
              Quantum IT Innovation
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer