import Image from "next/image"
import Link from "next/link"

const BrandLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="Dare to Dream"
        width={120}
        height={48}
        priority
        className="h-auto w-20 object-contain sm:w-24"
      />

      <span className="hidden h-8 w-px bg-border sm:block" />

      <span className="hidden max-w-52 font-sans text-[11px] leading-4 font-semibold tracking-[0.06em] text-muted-foreground uppercase sm:block lg:text-xs lg:leading-4">
        Where the extraordinary becomes reality
      </span>
    </Link>
  )
}

export default BrandLogo