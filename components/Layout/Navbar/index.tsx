"use client"

import Link from "next/link"

import NavLink from "./NavLink"
import { authItems, navItems } from "@/constants"
import BrandLogo from "@/components/common/BrandLogo"
import MobileNav from "./MobileNav"

import ProfileMenu from "@/components/Profile/ProfileMenu"
import { useAuthStore } from "@/store/auth/authStore"

const Navbar = () => {
  const token = useAuthStore((state) => state.token)
  const isAuthenticated = !!token

  const items = isAuthenticated ? navItems : authItems

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="max-container flex h-20 items-center justify-between sm:h-24 lg:h-28">
        <BrandLogo />

        {/* Desktop */}
        <nav className="hidden items-center gap-1.5 lg:flex">
          {items.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}

          {isAuthenticated ? (
            <div className="ml-2">
              <ProfileMenu />
            </div>
          ) : (
            <div className="ml-3 flex items-center gap-3">
              <Link
                href="/login"
                className="inline-flex h-11 items-center justify-center rounded-full border border-primary/20 bg-background px-6 text-base font-semibold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:shadow-sm"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-6 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:brightness-105 active:translate-y-0"
              >
                Register
              </Link>
            </div>
          )}
        </nav>

        {/* Mobile */}
        <MobileNav items={items} isAuthenticated={isAuthenticated} />
      </div>
    </header>
  )
}

export default Navbar
