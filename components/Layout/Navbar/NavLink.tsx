"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

type NavLinkProps = {
  href: string
  children: React.ReactNode
  className?: string
  transparent?: boolean
  mobile?: boolean
}

const NavLink = ({
  href,
  children,
  className,
  transparent = false,
  mobile = false,
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
        "group relative flex items-center font-sans transition-all duration-200",

        // Desktop
        !mobile && [
          "rounded-full px-4 py-2.5 text-base",
          "font-medium",
          transparent
            ? "text-primary-foreground/75 hover:text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",

          isActive &&
            (transparent
              ? "font-bold text-primary-foreground"
              : "font-bold text-foreground"),
        ],

        // Mobile
        mobile && [
          "w-full border-b border-border/60 px-1 py-4",
          "justify-between text-lg font-medium",

          transparent
            ? "text-primary-foreground/75 hover:text-primary-foreground"
            : "text-muted-foreground hover:text-foreground",

          isActive &&
            (transparent
              ? "font-bold text-primary-foreground"
              : "font-bold text-foreground"),
        ],

        className
      )}
    >
      <span className="relative z-10">{children}</span>

      {/* Active indicator */}
      <span
        className={cn(
          "absolute rounded-full transition-all duration-200",

          // Desktop
          !mobile && [
            "bottom-1 left-1/2 h-0.5 -translate-x-1/2",
            isActive
              ? "w-4 opacity-100"
              : "w-0 opacity-0 group-hover:w-2 group-hover:opacity-60",
          ],

          // Mobile
          mobile && [
            "right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2",
            isActive
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-60",
          ],

          transparent ? "bg-secondary" : "bg-primary"
        )}
      />
    </Link>
  )
}

export default NavLink