import { ReactNode } from "react"
import Navbar from "@/components/Layout/Navbar"
import Footer from "@/components/Layout/Footer"

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
