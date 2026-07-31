import HeroSection from "@/components/Homepage/Hero/HeroSection"
import JoinCta from "@/components/Homepage/JoinCta"
import JourneySection from "@/components/Homepage/Journey"
import VisionSection from "@/components/Homepage/Vision"
import WelcomeVideoSection from "@/components/Homepage/Welcome"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <VisionSection />
      <JourneySection />
      <WelcomeVideoSection />
      <JoinCta />
    </main>
  )
}
