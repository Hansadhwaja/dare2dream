import { ReactNode } from "react"

import Footer from "@/components/Layout/Footer"
import Navbar from "@/components/Layout/Navbar"
import { getCms } from "@/lib/api/home"
import { FooterContent } from "@/types/footer.types"

interface Props {
  children: ReactNode
}

const HomeLayout = async ({ children }: Props) => {
  const footerRes = await getCms("footer")
  const footerCms: FooterContent = JSON.parse(footerRes.content)
  return (
    <main className="relative">
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {children}
      </main>
      <Footer content={footerCms.content} />
    </main>
  )
}

export default HomeLayout
