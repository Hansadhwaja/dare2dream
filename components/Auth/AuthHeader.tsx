import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import BrandLogo from "../common/BrandLogo"

const AuthHeader = () => {
  return (
    <header className="max-container flex h-20 sm:h-24 lg:h-28 items-center justify-between border-b">
      <BrandLogo />

      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full px-3 py-2 font-sans text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:text-base"
      >
        <ArrowLeft className="size-4 sm:size-5" />
        Back to website
      </Link>
    </header>
  )
}

export default AuthHeader