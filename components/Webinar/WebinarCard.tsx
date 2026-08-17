import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Play, User } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Webinar } from "@/types/webinar.types"

interface Props {
  webinar: Webinar
}

const WebinarCard = ({ webinar }: Props) => {
  return (
    <Card className="group overflow-hidden rounded-[1.75rem] border-border bg-card py-0 transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-xl">
      <Link href="#" className="block">
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={webinar.thumbnail}
            alt={webinar.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex size-16 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg sm:size-[72px]">
              <Play className="ml-1 size-7 fill-current sm:size-8" />
            </div>
          </div>
        </div>

        <CardContent className="space-y-6 p-6 sm:p-7">
          {/* Meta */}
          <div className="flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary sm:text-base">
              <Clock className="size-4 shrink-0" />
              {webinar.duration}
            </span>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-4 py-1.5 text-sm font-medium text-muted-foreground sm:text-base">
              <User className="size-4 shrink-0" />
              {webinar.speaker}
            </span>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="font-heading text-2xl leading-tight font-semibold transition-colors group-hover:text-secondary sm:text-3xl">
              {webinar.title}
            </h3>

            <p className="mt-4 line-clamp-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {webinar.description}
            </p>
          </div>

          {/* CTA */}
          <div className="inline-flex items-center gap-2 text-base font-bold text-secondary sm:text-lg">
            Watch Now
            <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export default WebinarCard