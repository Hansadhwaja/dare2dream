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
  arrow: <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />,
  play: <Play className="size-4 fill-current" />,
}

const buttonStyles = {
  primary:
    "group inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3.5 font-sans text-sm font-semibold text-secondary-foreground shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:brightness-95 hover:shadow-md sm:w-auto sm:px-7 sm:py-4",

  secondary:
    "group inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3.5 font-sans text-sm font-semibold text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:shadow-md sm:w-auto sm:px-7 sm:py-4",
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
    <section className="max-container pt-3 sm:pt-5">
      <div className="relative overflow-hidden rounded-[1.5rem] bg-primary sm:rounded-[2rem]">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,color-mix(in_oklab,var(--secondary)_70%,transparent),transparent_27%),linear-gradient(125deg,color-mix(in_oklab,var(--primary)_92%,white),var(--primary)_60%,color-mix(in_oklab,var(--primary)_80%,black))]" />

        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 size-56 rounded-full border-[36px] border-secondary/15 sm:-top-24 sm:-right-24 sm:size-80 sm:border-[52px]" />

        <div className="absolute -bottom-20 -left-20 size-56 rounded-full border-[32px] border-white/5 sm:-bottom-28 sm:-left-16 sm:size-80 sm:border-[48px]" />

        {/* Content */}
        <div
          className="
            relative
            grid
            gap-10
            px-5
            py-10
            sm:gap-14
            sm:px-10
            sm:py-12
            lg:grid-cols-[1fr_.8fr]
            lg:items-end
            lg:px-16
            lg:py-14
          "
        >
          {/* Text */}
          <div className="max-w-2xl lg:pb-6">
            {/* Badge */}
            {badge && (
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 font-sans text-[11px] font-semibold tracking-[0.12em] text-white/90 uppercase backdrop-blur sm:mb-7 sm:px-4 sm:text-xs">
                <span className="size-1.5 shrink-0 rounded-full bg-secondary sm:size-2" />
                {badge}
              </div>
            )}

            {/* Heading */}
            <h1
              className="
                max-w-2xl
                font-heading
                text-[2.75rem]
                leading-[0.96]
                font-semibold
                tracking-[-0.025em]
                text-balance
                text-white
                sm:text-6xl
                sm:leading-[0.94]
                lg:text-[84px]
              "
            >
              {title}
            </h1>

            {/* Description */}
            <p
              className="
                mt-5
                max-w-xl
                font-sans
                text-base
                leading-7
                text-white/75
                sm:mt-7
                sm:text-xl
                sm:leading-8
              "
            >
              {description}
            </p>

            {/* Actions */}
            {(primaryAction || secondaryAction) && (
              <div className="mt-7 flex flex-col gap-3 sm:mt-9 sm:flex-row">
                {primaryAction && (
                  <Link
                    href={primaryAction.href}
                    className={
                      buttonStyles[primaryAction.variant ?? "primary"]
                    }
                  >
                    {primaryAction.label}

                    {primaryAction.icon && iconMap[primaryAction.icon]}
                  </Link>
                )}

                {secondaryAction && (
                  <Link
                    href={secondaryAction.href}
                    className={
                      buttonStyles[secondaryAction.variant ?? "secondary"]
                    }
                  >
                    {secondaryAction.icon &&
                      iconMap[secondaryAction.icon]}

                    {secondaryAction.label}
                  </Link>
                )}
              </div>
            )}
          </div>

          {/* Child / Preview */}
          {children && (
            <div className="w-full min-w-0">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default SectionHero