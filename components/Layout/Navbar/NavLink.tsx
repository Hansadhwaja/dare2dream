"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type NavLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  transparent?: boolean
}

const NavLink = ({
  href,
  children,
  className,
  transparent = false,
}: NavLinkProps) => {
  const pathname = usePathname()

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`)

  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center rounded-full px-4 py-2 font-sans text-sm font-medium",
        "transition-all duration-200 ease-out",

        transparent
          ? "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",

        isActive &&
          (transparent
            ? "bg-primary-foreground/10 text-primary-foreground"
            : "bg-muted text-foreground"),

        className
      )}
    >
      <span className="relative z-10">{children}</span>

      <span
        className={cn(
          "absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full",
          "transition-all duration-200",

          isActive
            ? "w-4 opacity-100"
            : "w-0 opacity-0 group-hover:w-2 group-hover:opacity-60",

          transparent ? "bg-secondary" : "bg-primary"
        )}
      />
    </Link>
  )
}

export default NavLink