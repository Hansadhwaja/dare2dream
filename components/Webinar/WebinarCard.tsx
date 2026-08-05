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

          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex size-14 items-center justify-center rounded-full bg-white/90 text-primary shadow-lg">
              <Play className="ml-1 size-6 fill-current" />
            </div>
          </div>
        </div>

        <CardContent className="space-y-5 p-6">
          {/* Meta */}
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
              <Clock className="size-3" />
              {webinar.duration}
            </span>

            <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              <User className="size-3" />
              {webinar.speaker}
            </span>
          </div>

          {/* Title & Description */}
          <div>
            <h3 className="font-heading text-2xl leading-tight font-semibold transition-colors group-hover:text-secondary">
              {webinar.title}
            </h3>

            <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
              {webinar.description}
            </p>
          </div>

          {/* CTA */}
          <div className="inline-flex items-center gap-2 font-semibold text-secondary">
            Watch Now
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </CardContent>
      </Link>
    </Card>
  )
}

export default WebinarCard
