import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import BrandLogo from "../common/BrandLogo"

const AuthHeader = () => {
  return (
    <header className="flex items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
      <BrandLogo />

      <Link
        href="/"
        className="font-sans inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="size-3.5" />
        Back to website
      </Link>
    </header>
  )
}

export default AuthHeader