import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface JourneyCardProps {
  number: string
  title: string
  description: string
  className?: string
}

const JourneyCard = ({
  number,
  title,
  description,
  className,
}: JourneyCardProps) => {
  const isDark = number === "03"

  return (
    <Card
      className={cn(
        "rounded-[1.5rem] border-0 p-6 shadow-none",
        "sm:rounded-[1.75rem] sm:p-8",
        "lg:p-9",
        className
      )}
    >
      {/* Number */}
      <p
        className={cn(
          "font-sans text-xs font-semibold tracking-[0.12em] uppercase sm:text-sm",
          isDark ? "text-white/55" : "text-muted-foreground"
        )}
      >
        {number}
      </p>

      <div className="mt-16 sm:mt-24 lg:mt-28">
        {/* Title */}
        <h3
          className={cn(
            "max-w-sm font-heading text-3xl leading-[1] font-semibold tracking-[-0.015em]",
            "sm:text-4xl",
            isDark ? "text-white" : "text-card-foreground"
          )}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "mt-4 max-w-sm font-sans text-base leading-7 font-normal",
            "sm:text-lg sm:leading-8",
            isDark ? "text-white/75" : "text-muted-foreground"
          )}
        >
          {description}
        </p>

        {/* CTA */}
        {number === "03" && (
          <Link
            href="#join"
            className="mt-7 inline-flex items-center gap-2 font-sans text-base font-semibold text-secondary transition-opacity hover:opacity-70 sm:mt-8"
          >
            Explore our community
            <ArrowRight className="size-4 sm:size-5" />
          </Link>
        )}
      </div>
    </Card>
  )
}

export default JourneyCard