import { ReactNode } from "react"

import Footer from "@/components/Layout/Footer"
import Navbar from "@/components/Layout/Navbar"

interface Props {
  children: ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <main className="relative">
      <Navbar />
      <main className="min-h-screen bg-background text-foreground">
        {children}
      </main>
      <Footer />
    </main>
  )
}

export default HomeLayout
