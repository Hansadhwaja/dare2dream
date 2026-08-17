import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"

import { Update } from "@/types/update.types"

interface UpdateCardProps {
  update: Update
}

const UpdateCard = ({ update }: UpdateCardProps) => {
  return (
    <Link
      href={`/updates/${update.id}`}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={update.image}
          alt={update.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4">
          <span className="inline-flex rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground sm:text-base">
            {update.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Date */}
        <div className="mb-5 flex items-center gap-2.5 text-base font-medium text-muted-foreground sm:text-lg">
          <CalendarDays className="size-5 shrink-0 text-secondary" />
          <span>{update.publishedAt}</span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 font-heading text-2xl leading-tight font-semibold transition-colors group-hover:text-secondary sm:text-3xl">
          {update.title}
        </h3>

        {/* Description */}
        <p className="mt-4 line-clamp-3 flex-1 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {update.excerpt}
        </p>

        {/* CTA */}
        <div className="mt-7 inline-flex items-center gap-2 text-base font-bold text-secondary transition-all group-hover:gap-3 sm:text-lg">
          Read More
          <ArrowRight className="size-5" />
        </div>
      </div>
    </Link>
  )
}

export default UpdateCard
