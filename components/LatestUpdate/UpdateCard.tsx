import Image from "next/image"
import { ArrowRight, CalendarDays, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/common/Video/VideoPlayer"
import { Video } from "@/types/video.types"
import { formatDate } from "@/utils/date"
import { Badge } from "../ui/badge"

interface UpdateCardProps {
  update: Video
}

const UpdateCard = ({ update }: UpdateCardProps) => {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      {/* Video Thumbnail */}
      <div className="relative aspect-[16/10] overflow-hidden bg-primary">
        <Image
          src={update.thumbnail}
          alt={update.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/15 transition-colors duration-500 group-hover:bg-black/25" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <VideoPlayer
            video={update.videoUrl}
            title={update.title}
            trigger={
              <div className="group/play relative">
                {/* Outer ring */}
                <div className="absolute -inset-2 rounded-full border border-white/30 opacity-0 transition-all duration-500 group-hover/play:-inset-3 group-hover/play:opacity-100" />

                <Button
                  type="button"
                  size="icon"
                  className="
                    relative size-16 rounded-full
                    bg-white/95 text-primary
                    shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                    transition-all duration-500 ease-out
                    hover:bg-secondary hover:text-secondary-foreground
                    group-hover/play:scale-110
                    group-active/play:scale-95
                    sm:size-[72px]
                  "
                >
                  <Play className="ml-1 size-7 fill-current transition-transform duration-300 group-hover/play:scale-105 sm:size-8" />
                </Button>
              </div>
            }
          />
        </div>

        {/* Update Badge */}
        <div className="absolute top-4 left-4">
          <Badge className="h-6 rounded-full border-0 bg-secondary px-4 py-1.5 text-sm font-semibold tracking-wide text-secondary-foreground shadow-sm sm:text-base">
            Update
          </Badge>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        {/* Date */}
        <div className="mb-5 flex items-center gap-2.5 text-base font-medium text-muted-foreground sm:text-lg">
          <CalendarDays className="size-5 shrink-0 text-secondary" />
          <span>{formatDate(update.date)}</span>
        </div>

        {/* Title */}
        <h3 className="line-clamp-2 font-heading text-2xl leading-tight font-semibold sm:text-3xl">
          {update.title}
        </h3>

        {/* Description */}
        <p className="mt-4 line-clamp-3 flex-1 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
          {update.description}
        </p>

        {/* CTA */}
        <VideoPlayer
          video={update.videoUrl}
          title={update.title}
          trigger={
            <Button
              type="button"
              variant="ghost"
              className="group/cta mt-7 h-auto w-fit gap-2 rounded-none p-0 text-base font-semibold text-tertiary hover:bg-transparent hover:text-tertiary/80 sm:text-lg"
            >
              Watch Now
              <ArrowRight className="size-5 transition-transform duration-300 group-hover/cta:translate-x-1" />
            </Button>
          }
        />
      </div>
    </div>
  )
}

export default UpdateCard