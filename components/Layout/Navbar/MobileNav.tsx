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
      {/* Menu Button */}
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className={
            transparent
              ? "size-10 rounded-full text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              : "size-10 rounded-full text-foreground hover:bg-muted"
          }
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      {/* Mobile Drawer */}
      <SheetContent
        side="right"
        className="w-[300px] border-l border-border bg-background px-6 shadow-2xl sm:w-[360px]"
      >
        {/* Header */}
        <SheetHeader className="border-b border-border pb-5">
          <SheetTitle className="flex items-center">
            <BrandLogo />
          </SheetTitle>
        </SheetHeader>

        <div className="flex h-full flex-col">
          {/* Navigation */}
          <nav className="mt-8 flex flex-col gap-2">
            {items.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="w-full justify-start rounded-none px-1 py-3 text-base"
                mobile
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Divider */}
          <div className="my-8 h-px bg-border" />

          {/* Auth */}
          <div>
            {isAuthenticated ? (
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Welcome back
                  </p>

                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Manage your account
                  </p>
                </div>

                <ProfileMenu />
              </div>
            ) : (
              <div className="space-y-3">
                {/* Login */}
                <Button
                  asChild
                  variant="outline"
                  className="h-12 w-full rounded-full font-semibold"
                >
                  <Link href="/login">
                    <LogIn className="mr-2 size-4" />
                    Login
                  </Link>
                </Button>

                {/* Register */}
                <Button
                  asChild
                  className="h-12 w-full rounded-full font-semibold"
                >
                  <Link href="/register">
                    Join Dare to Dream
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
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
