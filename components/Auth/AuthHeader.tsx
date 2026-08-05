import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import BrandLogo from "../common/BrandLogo"

const AuthHeader = () => {
  return (
    <header className="mx-auto flex h-20 max-w-350 items-center justify-between px-5 lg:px-8">
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