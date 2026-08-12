import { Cormorant_Garamond, Montserrat } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Dare to Dream | Where Extraordinary Becomes Reality",
    template: "%s | Dare to Dream",
  },
  description:
    "Dare to Dream empowers individuals in under-resourced communities to create fulfilling work, take ownership, and build a better future through entrepreneurship, mentorship, and community.",
  keywords: [
    "Dare to Dream",
    "entrepreneurship",
    "entrepreneurial community",
    "mentorship",
    "business development",
    "community empowerment",
    "under-resourced communities",
    "entrepreneurship opportunities",
  ],
  authors: [{ name: "Dare to Dream" }],
  creator: "Dare to Dream",
  publisher: "Dare to Dream",

  metadataBase: new URL("https://daretodreaminc.com"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://daretodreaminc.com",
    siteName: "Dare to Dream",
    title: "Dare to Dream | Where Extraordinary Becomes Reality",
    description:
      "Empowering people to create fulfilling work, take ownership, and build a better future through entrepreneurship, mentorship, and community.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dare to Dream",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dare to Dream | Where Extraordinary Becomes Reality",
    description:
      "Empowering people to create fulfilling work, take ownership, and build a better future.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        montserrat.variable,
        "font-sans",
        cormorant.variable
      )}
    >
      <body>
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}
