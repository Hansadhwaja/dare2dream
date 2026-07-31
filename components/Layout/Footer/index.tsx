import Link from "next/link"

const Footer = () => {
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© 2026 Dare to Dream. Where The Extraordinary Becomes Reality.</p>

        <div className="flex gap-5">
          <Link href="#" className="transition-colors hover:text-foreground">
            Privacy
          </Link>

          <Link
            href="#contact"
            className="transition-colors hover:text-foreground"
          >
            Contact
          </Link>

          <Link href="#" className="transition-colors hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
