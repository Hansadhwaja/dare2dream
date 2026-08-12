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
        "rounded-[1.75rem] border-0 p-7 shadow-none sm:p-9",
        className
      )}
    >
      <p
        className={cn(
          "font-sans text-[10px] font-semibold tracking-[0.12em] uppercase",
          isDark ? "text-white/45" : "text-muted-foreground"
        )}
      >
        {number}
      </p>

      <div className="mt-28">
        <h3
          className={cn(
            "max-w-sm font-heading text-4xl leading-[0.95] font-semibold tracking-[-0.015em]",
            isDark ? "text-white" : "text-card-foreground"
          )}
        >
          {title}
        </h3>

        <p
          className={cn(
            "mt-4 max-w-sm font-sans text-[14px] leading-7 font-light",
            isDark ? "text-white/60" : "text-muted-foreground"
          )}
        >
          {description}
        </p>

        {number === "03" && (
          <Link
            href="#join"
            className="mt-8 inline-flex items-center gap-2 font-sans text-sm font-semibold text-secondary transition-opacity hover:opacity-70"
          >
            Explore our community
            <ArrowRight className="size-4" />
          </Link>
        )}
      </div>
    </Card>
  )
}

export default JourneyCard
