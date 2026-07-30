"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

type NavLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({
  href,
  children,
  className,
}: NavLinkProps) {
  const pathname = usePathname()

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={cn(
        "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
        className
      )}
    >
      {children}

      {isActive && (
        <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-white" />
      )}
    </Link>
  )
}