import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"

import { Webinar } from "@/types/webinar.types"

interface Props {
  webinar: Webinar
}

const WebinarPreview = ({ webinar }: Props) => {
  return (
    <Link
      href={`/webinars/${webinar.id}`}
      className="group mx-auto block w-full max-w-xl overflow-hidden rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/10"
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={webinar.thumbnail}
          alt={webinar.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex size-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-secondary group-hover:text-secondary-foreground sm:size-20">
            <Play className="ml-1 size-7 fill-current transition-transform duration-300 group-hover:scale-110 sm:size-8" />
          </div>
        </div>

        {/* Featured Badge */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-secondary/30 bg-secondary/90 px-4 py-2 text-sm font-bold tracking-wide text-secondary-foreground uppercase backdrop-blur sm:text-base">
            <span className="size-2 rounded-full bg-white" />
            Featured
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6 sm:p-8">
        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-semibold text-secondary sm:text-base">
            {webinar.duration}
          </span>

          <span className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white/75 sm:text-base">
            {webinar.speaker}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-3xl leading-tight font-semibold text-white sm:text-4xl">
          {webinar.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
          {webinar.description}
        </p>

        {/* CTA */}
        <div className="inline-flex items-center gap-2 text-base font-bold text-secondary sm:text-lg">
          Watch Now
          <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}

export default WebinarPreview
