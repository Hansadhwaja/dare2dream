import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navItems } from "@/constants"
import { Menu } from "lucide-react"
import Image from "next/image"
import { NavLink } from "./NavLink"
import Link from "next/link"

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button
          variant="ghost"
          size="icon"
          className="rounded-full text-white hover:bg-white/10 hover:text-white"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="bg-background">
        <SheetHeader>
          <SheetTitle className="text-left">
            <Image
              src="/logo.png"
              alt="Dare to Dream"
              width={130}
              height={75}
              className="h-12 w-auto object-contain"
            />
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <NavLink key={item.href} href={item.href}>
              {item.label}
            </NavLink>
          ))}

          <Button asChild className="mt-6 rounded-full">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNav
