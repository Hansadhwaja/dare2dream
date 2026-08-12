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
      <div className="max-container py-16 lg:py-20">
        {/* Main Footer */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/footer-logo.png"
                alt="Dare to Dream"
                width={100}
                height={40}
                priority
                className="h-auto w-20 object-contain"
              />
            </Link>

            <p className="mt-6 max-w-lg text-sm leading-7 text-primary-foreground/60">
              Dare to Dream empowers individuals in under-resourced communities
              to create fulfilling work, take ownership, and build a better
              future through entrepreneurship, mentorship, and community.
            </p>

            <Link
              href={token ? "/webinar" : "/register"}
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-3 text-sm font-medium text-secondary-foreground transition hover:brightness-95"
            >
              {token ? "Explore Webinars" : "Start Your Journey"}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          {/* Explore */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-[0.18em] text-secondary uppercase">
              Explore
            </h3>

            <nav className="flex flex-col gap-4 text-sm text-primary-foreground/60">
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
            <h3 className="mb-6 text-sm font-semibold tracking-[0.18em] text-secondary uppercase">
              Connect
            </h3>

            <div className="space-y-4 text-sm text-primary-foreground/60">
              <a
                href="mailto:ivan@daretodreaminc.com"
                className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
              >
                <Mail className="size-4 shrink-0" />
                ivan@daretodreaminc.com
              </a>

              <a
                href="tel:+14803312624"
                className="flex items-center gap-3 transition-colors hover:text-primary-foreground"
              >
                <Phone className="size-4 shrink-0" />
                +1 480 331 2624
              </a>

              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" />

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
        <div className="my-12 h-px bg-primary-foreground/10" />

        {/* Bottom Footer */}
        <div className="flex flex-col gap-4 text-xs text-primary-foreground/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Dare to Dream. Where The Extraordinary Becomes Reality.
          </p>

          <div className="flex gap-6">
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
          <p className="font-sans text-xs text-primary-foreground/40">
            Made with <span className="text-secondary">♥</span> by{" "}
            <a
              href="https://quantumitinnovation.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary-foreground/60 transition-colors hover:text-secondary"
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
