import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { MissionContentCards } from "@/types/cms.types"

interface JourneyCardProps {
  item: MissionContentCards
}

const JourneyCard = ({ item }: JourneyCardProps) => {
  const isDark = item.number === "03"

  return (
    <Card
      className={cn(
        "relative overflow-hidden rounded-[1.75rem] border-0 p-6 shadow-none",
        "sm:p-8 lg:p-10",

        // Card colors
        isDark ? "bg-primary" : "bg-[#e9dcc7]"
      )}
    >
      {/* Number */}
      <p
        className={cn(
          "font-sans text-xs font-semibold tracking-[0.14em] uppercase sm:text-sm",
          isDark ? "text-white/50" : "text-primary/50"
        )}
      >
        {item.number}
      </p>

      <div className="mt-20 sm:mt-28 lg:mt-32">
        {/* Title */}
        <h3
          className={cn(
            "max-w-sm font-heading text-3xl leading-[1.02] font-semibold tracking-[-0.02em]",
            "sm:text-4xl lg:text-[2.65rem]",
            isDark ? "text-white" : "text-primary"
          )}
        >
          {item.title}
        </h3>

        {/* Description */}
        <p
          className={cn(
            "mt-5 max-w-md font-sans text-base leading-7",
            "sm:text-lg sm:leading-8",
            isDark ? "text-white/85" : "text-primary/85"
          )}
        >
          {item.text}
        </p>

        {/* CTA */}
        {item.number === "03" && (
          <Link
            href="#join"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-secondary transition-all hover:gap-3 sm:text-base"
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
