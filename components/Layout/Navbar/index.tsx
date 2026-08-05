"use client"

import Link from "next/link"

import NavLink from "./NavLink"
import { authItems, navItems } from "@/constants"
import BrandLogo from "@/components/common/BrandLogo"
import MobileNav from "./MobileNav"

import ProfileMenu from "@/components/Profile/ProfileMenu"
import { Button } from "@/components/ui/button"

const Navbar = () => {
  // Replace this with your auth state
  const isAuthenticated = true

  const items = isAuthenticated ? navItems : authItems

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-350 items-center justify-between px-5 lg:px-8">
        <BrandLogo />

        {/* Desktop */}
        <nav className="hidden items-center gap-2 lg:flex">
          {isAuthenticated &&
            items.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}

          {isAuthenticated ? (
            <ProfileMenu />
          ) : (
            <div className="ml-3 flex items-center gap-3">
              <Button asChild variant="outline">
                <Link href="/login">Login</Link>
              </Button>

              <Button asChild>
                <Link href="/register">Join Dare to Dream</Link>
              </Button>
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
