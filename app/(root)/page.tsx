import HeroSection from "@/components/Homepage/Hero/HeroSection"
import ImpactSection from "@/components/Homepage/Impact"
import JoinCta from "@/components/Homepage/JoinCta"
import JourneySection from "@/components/Homepage/Journey"
import NextHomeSection from "@/components/Homepage/NextHome"
import OurStorySection from "@/components/Homepage/Story"
import VisionSection from "@/components/Homepage/Vision"
import WelcomeVideoSection from "@/components/Homepage/Welcome"
import { getCms } from "@/lib/api/server/home"
import { HomeContent } from "@/types/cms.types"

export default async function HomePage() {
  const homeRes = await getCms("home")
  const homeCms: HomeContent = JSON.parse(homeRes.content)

  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection content={homeCms.hero} />
      <VisionSection content={homeCms.mission} />
      <JourneySection content={homeCms.mission.cards} />
      <WelcomeVideoSection content={homeCms.webinar} />
      <OurStorySection content={homeCms.story} />
      <ImpactSection content={homeCms.impact} />
      <NextHomeSection content={homeCms.impact.cards} />
      <JoinCta content={homeCms.banner} />
    </main>
  )
}
