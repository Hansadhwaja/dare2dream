import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface JourneyCardProps {
  number: string
  title: string
  description: string
  className: string
}

const JourneyCard = ({
  number,
  title,
  description,
  className,
}: JourneyCardProps) => {
  const isDark = className.includes("text-white")

  return (
    <article
      className={`min-h-[430px] rounded-[1.75rem] p-7 sm:p-9 ${className}`}
    >
      <p
        className={`font-sans text-[10px] font-semibold tracking-[0.12em] uppercase ${
          isDark ? "text-white/45" : "text-muted-foreground"
        }`}
      >
        {number}
      </p>

      <h3
        className={`font-heading mt-28 max-w-sm text-4xl leading-[0.95] font-semibold tracking-[-0.015em] ${
          isDark ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h3>

      <p
        className={`font-sans mt-4 max-w-sm text-[14px] leading-7 font-light ${
          isDark ? "text-white/60" : "text-muted-foreground"
        }`}
      >
        {description}
      </p>

      {number === "03" && (
        <Link
          href="#join"
          className="font-sans mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-opacity hover:opacity-70"
        >
          Explore the journey
          <ArrowRight className="size-4" />
        </Link>
      )}
    </article>
  )
}

export default JourneyCard