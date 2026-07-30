import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { navItems } from "@/constants"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-container">
        <div className="grid gap-12 py-8 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Dare to Dream">
              <Image
                src="/logo.jpeg"
                alt="Dare to Dream"
                width={150}
                height={90}
                className="h-14 w-auto object-contain"
              />
            </Link>

            <p className="mt-6 text-sm leading-7 text-background/65">
              Inspiring people to dream boldly, discover possibilities, and
              create a future beyond what they thought was possible.
            </p>

            <Button asChild className="mt-7 rounded-full">
              <Link href="/contact">
                Get Started
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Explore</h3>

            <nav className="mt-5 flex flex-col items-start gap-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-background/60 transition-colors hover:text-background"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Company</h3>

            <nav className="mt-5 flex flex-col items-start gap-3">
              <Link
                href="/about"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                About Us
              </Link>

              <Link
                href="/programs"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Programs
              </Link>

              <Link
                href="/services"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Services
              </Link>

              <Link
                href="/contact"
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                Contact
              </Link>
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Let&apos;s Connect</h3>

            <div className="mt-5 space-y-3 text-sm text-background/60">
              <a
                href="mailto:hello@example.com"
                className="block transition-colors hover:text-background"
              >
                hello@example.com
              </a>

              <a
                href="tel:+10000000000"
                className="block transition-colors hover:text-background"
              >
                +1 000 000 0000
              </a>

              <p>Your address goes here</p>
            </div>

            {/* Socials */}
            {/* <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon

                return (
                  <Button
                    key={social.label}
                    asChild
                    variant="outline"
                    size="icon"
                    className="size-9 rounded-full border-background/15 bg-transparent text-background hover:bg-background/10 hover:text-background"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                    >
                      <Icon className="size-4" />
                    </a>
                  </Button>
                )
              })}
            </div> */}
          </div>
        </div>

        <Separator className="bg-background/10" />

        <div className="flex flex-col gap-4 py-6 text-sm text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Dare to Dream. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <Link
              href="/privacy"
              className="transition-colors hover:text-background"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="transition-colors hover:text-background"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
