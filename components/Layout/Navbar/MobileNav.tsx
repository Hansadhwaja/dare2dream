"use client"

import Link from "next/link"
import { ArrowRight, Menu, LogIn } from "lucide-react"

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
import ProfileMenu from "@/components/Profile/ProfileMenu"

type MobileNavProps = {
  transparent?: boolean
  isAuthenticated: boolean
  items: {
    label: string
    href: string
  }[]
}

const MobileNav = ({
  transparent = false,
  isAuthenticated,
  items,
}: MobileNavProps) => {
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

          {/* Auth Actions */}
          <div className="mt-8">
            {isAuthenticated ? (
              <div className="rounded-2xl border border-border bg-muted p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">Welcome back</p>

                    <p className="text-sm text-muted-foreground">
                      Access your account
                    </p>
                  </div>

                  <ProfileMenu />
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                <Button asChild variant="outline" className="rounded-xl py-6">
                  <Link href="/login">
                    <LogIn className="mr-2 size-4" />
                    Login
                  </Link>
                </Button>

                <Button asChild className="rounded-xl py-6">
                  <Link href="/register">Join Dare to Dream</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
