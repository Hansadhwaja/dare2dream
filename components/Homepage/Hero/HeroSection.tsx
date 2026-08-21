"use client"

import HeroStoryCard from "./HeroStoryCard"
import { useAuthStore } from "@/store/auth/authStore"
import { HeroContent } from "@/types/cms.types"
import SectionHero from "@/components/common/Hero/SectionHero"
interface Props {
  content: HeroContent
}

const HeroSection = ({ content }: Props) => {
  const token = useAuthStore((state) => state.token)

  return (
    <SectionHero
      badge={content.badge}
      title={content.heading}
      description={content.subheading}
      primaryAction={{
        label: token ? content.ctaText : "Start your journey",
        href: token ? "/webinar" : "/register",
        icon: "arrow",
        variant: "primary",
      }}
      secondaryAction={{
        label: content.videoCtaText,
        href: "#welcome",
        icon: "play",
        variant: "secondary",
      }}
    >
      <HeroStoryCard cards={content.cards} />
    </SectionHero>
  )
}

export default HeroSection
