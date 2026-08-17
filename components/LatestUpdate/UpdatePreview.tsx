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

          {/* Featured Badge */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-bold text-secondary-foreground sm:text-base">
              <Pin className="size-4" />
              Featured Update
            </span>
          </div>

          {/* Image Content */}
          <div className="absolute right-5 bottom-5 left-5">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white backdrop-blur sm:text-base">
              {update.category}
            </span>

            <h3 className="mt-3 font-heading text-2xl leading-tight font-semibold text-white sm:text-3xl">
              {update.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6 sm:p-7">
          {/* Date */}
          <div className="flex items-center gap-2.5 text-base font-medium text-white/75 sm:text-lg">
            <CalendarDays className="size-5 shrink-0 text-secondary" />
            <span>{update.publishedAt}</span>
          </div>

          {/* Excerpt */}
          <p className="line-clamp-3 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            {update.excerpt}
          </p>

          {/* CTA */}
          <Link
            href={`/updates/${update.id}`}
            className="inline-flex items-center gap-2 text-base font-bold text-secondary transition hover:gap-3 sm:text-lg"
          >
            Read Update
            <ArrowRight className="size-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UpdatePreview
