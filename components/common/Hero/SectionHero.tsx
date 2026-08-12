import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

interface HeroAction {
  label: string
  href: string
  icon?: "arrow" | "play"
  variant?: "primary" | "secondary"
}

interface SectionHeroProps {
  badge?: string
  title: React.ReactNode
  description: string
  primaryAction?: HeroAction
  secondaryAction?: HeroAction
  children?: React.ReactNode
}

const iconMap = {
  arrow: <ArrowRight className="size-4" />,
  play: <Play className="size-4 fill-current" />,
}

const buttonStyles = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-7 py-4 font-sans text-sm font-semibold text-secondary-foreground hover:brightness-95 transition-all",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-4 font-sans text-sm font-semibold text-white backdrop-blur hover:bg-white/15 transition-all",
}

const SectionHero = ({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
  children,
}: SectionHeroProps) => {
  return (
    <section className="max-container pt-5">
      <div className="relative overflow-hidden rounded-[2rem] bg-primary">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,color-mix(in_oklab,var(--secondary)_70%,transparent),transparent_27%),linear-gradient(125deg,color-mix(in_oklab,var(--primary)_92%,white),var(--primary)_60%,color-mix(in_oklab,var(--primary)_80%,black))]" />

        <div className="absolute -top-24 -right-24 size-80 rounded-full border-[52px] border-secondary/15" />

        <div className="absolute -bottom-28 -left-16 size-80 rounded-full border-[48px] border-white/5" />

        <div className="relative grid min-h-160 items-end gap-14 px-7 py-8 sm:px-10 lg:grid-cols-[1fr_.8fr] lg:px-16 lg:py-14">
          <div className="max-w-2xl pb-2 lg:pb-6">
            {badge && (
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-sans text-xs font-semibold tracking-[0.14em] text-white/80 uppercase backdrop-blur">
                <span className="size-2 rounded-full bg-secondary" />
                {badge}
              </div>
            )}

            <h1 className="font-heading text-5xl leading-[0.94] font-semibold tracking-[-0.02em] text-balance text-white sm:text-6xl lg:text-[84px]">
              {title}
            </h1>

            <p className="mt-7 max-w-xl font-sans text-lg leading-8 text-white/70 sm:text-xl">
              {description}
            </p>

            {(primaryAction || secondaryAction) && (
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                {primaryAction && (
                  <Link
                    href={primaryAction.href}
                    className={buttonStyles.primary}
                  >
                    {primaryAction.label}
                    {primaryAction.icon && iconMap[primaryAction.icon]}
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className={buttonStyles.secondary}
                  >
                    {secondaryAction.icon && iconMap[secondaryAction.icon]}
                    {secondaryAction.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {children}
        </div>
      </div>
    </section>
  )
}

export default SectionHero
