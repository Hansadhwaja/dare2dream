"use client"

import Image from "next/image"
import Link from "next/link"

import { navItems } from "@/constants"
import { NavLink } from "./NavLink"
import MobileNav from "./MobileNav"

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-linear-to-b from-black/80 via-black/40 to-transparent" />

      <div className="relative">
        <div className="nav-container flex h-20 items-center justify-between rounded-b-2xl border-x border-b border-white/10 bg-black/30 backdrop-blur-md">
          <Link href="/" className="shrink-0" aria-label="Dare to Dream">
            <Image
              src="/logo.jpeg"
              alt="Dare to Dream"
              width={150}
              height={90}
              priority
              className="h-14 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.href}
                href={item.href}
                className="text-white/90 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}
