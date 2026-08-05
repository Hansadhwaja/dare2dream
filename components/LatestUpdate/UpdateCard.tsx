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
      className="group overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={update.image}
          alt={update.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-4 left-4">
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
            {update.category}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
          <CalendarDays className="size-4" />
          <span>{update.publishedAt}</span>
        </div>

        <h3 className="line-clamp-2 font-heading text-2xl font-semibold transition-colors group-hover:text-secondary">
          {update.title}
        </h3>

        <p className="mt-4 line-clamp-3 flex-1 text-muted-foreground">
          {update.excerpt}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 font-semibold text-secondary transition-all group-hover:gap-3">
          Read More
          <ArrowRight className="size-4" />
        </div>
      </div>
    </Link>
  )
}

export default UpdateCard
