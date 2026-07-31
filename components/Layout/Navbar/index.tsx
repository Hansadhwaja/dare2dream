"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import NavLink from "./NavLink"
import { authItems, navItems } from "@/constants"
import BrandLogo from "@/components/common/BrandLogo"
import MobileNav from "./MobileNav"

const Navbar = () => {
  const isAuthenticated = true

  const links = isAuthenticated ? navItems : authItems

  return (
    <header className="sticky inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-350 items-center justify-between px-5 lg:px-8">
        <BrandLogo />

        <nav className="hidden items-center gap-2 lg:flex">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.label}
            </NavLink>
          ))}

          {isAuthenticated && (
            <Link
              href="#join"
              className="ml-3 rounded-full bg-primary px-5 py-2.5 font-sans text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              Join Dare to Dream
            </Link>
          )}
        </nav>

        <MobileNav items={links} />
      </div>
    </header>
  )
}

export default Navbar
