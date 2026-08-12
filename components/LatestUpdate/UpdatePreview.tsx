import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CalendarDays, Pin } from "lucide-react"
import { Update } from "@/types/update.types"

interface UpdatePreviewProps {
  update: Update
}

const UpdatePreview = ({ update }: UpdatePreviewProps) => {
  return (
    <div className="w-full max-w-lg self-center">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-xl">
        {/* Cover Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={update.image}
            alt={update.title}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 70vw, 512px"
            className="object-cover transition duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          <div className="absolute top-5 right-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
              <Pin className="size-3.5" />
              Featured Update
            </span>
          </div>

          <div className="absolute right-5 bottom-5 left-5">
            <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
              {update.category}
            </span>

            <h3 className="mt-3 font-heading text-2xl leading-tight font-semibold text-white">
              {update.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 p-6">
          <div className="flex items-center gap-2 text-sm text-white/65">
            <CalendarDays className="size-4" />
            <span>{update.publishedAt}</span>
          </div>

          <p className="line-clamp-3 text-sm leading-7 text-white/75">
            {update.excerpt}
          </p>

          <Link
            href={`/updates/${update.id}`}
            className="inline-flex items-center gap-2 font-semibold text-secondary transition hover:gap-3"
          >
            Read Update
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpdatePreview
