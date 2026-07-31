"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import NavLink from "./NavLink"
import BrandLogo from "@/components/common/BrandLogo"

type MobileNavProps = {
  transparent?: boolean
  items: {
    label: string
    href: string
  }[]
}

const MobileNav = ({ transparent = false, items }: MobileNavProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className={
            transparent
              ? "size-10 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 hover:text-primary-foreground"
              : "size-10 rounded-full border border-border bg-background text-foreground shadow-sm hover:bg-muted"
          }
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[320px] border-l border-border bg-background px-6 shadow-2xl sm:w-[380px]"
      >
        <SheetHeader className="border-b border-border pb-6">
          <SheetTitle className="flex items-center">
            <BrandLogo />
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col">
          <nav className="mt-8 flex flex-col gap-1.5">
            {items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="w-full rounded-xl px-4 py-3.5 text-[15px]"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="mt-auto pt-10 pb-6">
            <div className="rounded-2xl border border-border bg-muted p-5">
              <p className="font-sans text-sm font-semibold text-foreground">
                Ready to take the next step?
              </p>

              <p className="mt-1.5 font-sans text-xs leading-5 text-muted-foreground">
                Let&apos;s turn your vision into something meaningful.
              </p>

              <Button
                asChild
                className="group mt-5 w-full rounded-xl py-6 font-sans text-sm font-semibold"
              >
                <Link href="/contact">
                  Get Started
                  <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
