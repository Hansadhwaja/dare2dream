import Image from "next/image"
import Link from "next/link"

const BrandLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src="/logo.png"
        alt="Dare to Dream"
        width={100}
        height={40}
        priority
        className="h-auto w-16 object-contain"
      />

      <span className="hidden h-7 w-px bg-border sm:block" />

      <span className="hidden max-w-45 font-sans text-[8px] leading-3.5 font-medium tracking-[0.08em] text-muted-foreground uppercase sm:block">
        Where the extraordinary becomes reality
      </span>
    </Link>
  )
}

export default BrandLogo