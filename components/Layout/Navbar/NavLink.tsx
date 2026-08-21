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
        "group relative flex items-center font-sans transition-all duration-300 ease-out",

        // Desktop
        !mobile && [
          "rounded-full px-4 py-3",
          "text-base font-semibold tracking-[-0.005em]",
          "hover:-translate-y-0.5",

          transparent
            ? "text-white hover:text-white"
            : "text-foreground hover:text-foreground",
        ],

        // Mobile
        mobile && [
          "relative flex w-full items-center justify-between",
          "border-b border-border/60",
          "px-1 py-5",
          "text-xl font-semibold tracking-[-0.005em]",
          "transition-all duration-300",

          transparent
            ? "text-white"
            : "text-foreground",

          "hover:pl-2",
        ],

        className
      )}
    >
      {/* Text */}
      <span className="relative z-10">
        {children}
      </span>

      {/* Desktop Active Indicator */}
      {!mobile && (
        <span
          className={cn(
            "absolute right-3 bottom-1 left-3 h-0.5 rounded-full",
            "bg-secondary",
            "transition-all duration-300 ease-out",

            isActive
              ? "scale-x-100 opacity-100"
              : "scale-x-0 opacity-0 group-hover:scale-x-75 group-hover:opacity-100"
          )}
        />
      )}

      {/* Mobile Active Indicator */}
      {mobile && (
        <span
          className={cn(
            "absolute right-0 top-1/2",
            "h-8 w-1 -translate-y-1/2 rounded-full",
            "bg-secondary",
            "transition-all duration-300 ease-out",

            isActive
              ? "scale-y-100 opacity-100"
              : "scale-y-0 opacity-0 group-hover:scale-y-75 group-hover:opacity-60"
          )}
        />
      )}
    </Link>
  )
}

export default NavLink