import HeroSection from "@/components/Homepage/Hero/HeroSection"
import ImpactSection from "@/components/Homepage/Impact"
import JoinCta from "@/components/Homepage/JoinCta"
import JourneySection from "@/components/Homepage/Journey"
import NextHomeSection from "@/components/Homepage/NextHome"
import OurStorySection from "@/components/Homepage/Story"
import VisionSection from "@/components/Homepage/Vision"
import WelcomeVideoSection from "@/components/Homepage/Welcome"

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <VisionSection />
      <JourneySection />
      <WelcomeVideoSection />
      <OurStorySection />
      <ImpactSection />
      <NextHomeSection />
      <JoinCta />
    </main>
  )
}
