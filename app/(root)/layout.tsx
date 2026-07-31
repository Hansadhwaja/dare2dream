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
      {children}
      <Footer />
    </main>
  )
}

export default HomeLayout
