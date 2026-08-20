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
      {/* Video */}
      <div className="relative aspect-[16/10] overflow-hidden bg-black">
        <video
          src={update.videoUrl}
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <VideoPlayer
            video={update.videoUrl}
            title={update.title}
            trigger={
              <Button
                type="button"
                size="icon"
                className="size-16 rounded-full bg-white/95 text-primary shadow-lg hover:bg-secondary hover:text-secondary-foreground sm:size-[72px]"
              >
                <Play className="ml-1 size-7 fill-current sm:size-8" />
              </Button>
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
              className="mt-7 h-auto w-fit gap-2 rounded-none p-0 text-base font-bold text-secondary hover:bg-transparent hover:text-secondary/80 sm:text-lg"
            >
              Watch Now
              <ArrowRight className="size-5" />
            </Button>
          }
        />
      </div>
    </div>
  )
}

export default UpdateCard
