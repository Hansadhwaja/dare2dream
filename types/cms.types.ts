export type CMSResponse = {
  _id: string
  slug: string
  __v: number
  content: string
  createdAt: Date
  title: string
  updatedAt: Date
}

export interface HomeContent {
  hero: HeroContent

  mission: MissionContent

  webinar: WebinarContent

  story: StoryContent
  impact: ImpactContent

  banner: BannerContent
}

export type BannerContent = {
  badge: string
  heading: string
  ctaText: string
}

export type ImpactContent = {
  badge: string
  heading: string
  paragraph: string
  statNumber: string
  statText: string
  cards: ImpactContentCards[]
}

export type ImpactContentCards = {
  badge: string
  title: string
  text: string
  ctaText?: string
}

export type StoryContent = {
  badge: string
  heading: string
  paragraphs: string[]
  callout: string
}

export type WebinarContent = {
  badge: string
  heading: string
  subheading: string
  ctaText: string
}

export type MissionContent = {
  badge: string
  heading: string
  paragraph: string
  cards: MissionContentCards[]
}

export type MissionContentCards = {
  number: string
  title: string
  text: string
}

export type HeroContent = {
  badge: string
  heading: string
  subheading: string
  ctaText: string
  videoCtaText: string
  cards: HeroContentCards[]
}

export type HeroContentCards = {
  title: string
  text: string
}

export type PrivacyPolicySection = {
  title: string
  description: string
}

export type PrivacyPolicyContent = {
  header: string
  subheader: string
  sections: PrivacyPolicySection[]
}

export type TermsSection = {
  title: string
  description: string
}

export type TermsContent = {
  header: string
  subheader: string
  sections: TermsSection[]
}