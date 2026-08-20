import { CalendarDays, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import VideoPlayer from "@/components/common/Video/VideoPlayer"
import { Video } from "@/types/video.types"
import { formatDate } from "@/utils/date"
import { Badge } from "../ui/badge"

interface UpdatePreviewProps {
  update: Video
}

const UpdatePreview = ({ update }: UpdatePreviewProps) => {
  return (
    <div className="w-full max-w-lg self-center">
      <div className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/10 shadow-xl backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl">
        {/* Video Preview */}
        <div className="relative aspect-16/10 overflow-hidden bg-black">
          <video
            src={update.videoUrl}
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

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

          {/* Page Badge */}
          <div className="absolute top-4 right-4 sm:top-5 sm:right-5">
            <Badge className="h-8 rounded-full border border-white/20 bg-secondary/95 px-4 py-1.5 text-sm font-semibold tracking-wide text-secondary-foreground shadow-md backdrop-blur-sm sm:text-base">
              Latest Update
            </Badge>
          </div>

          {/* Video Title */}
          <div className="absolute right-5 bottom-5 left-5">
            <h3 className="font-heading text-2xl leading-tight font-semibold text-white sm:text-3xl">
              {update.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6 p-6 sm:p-7">
          {/* Date */}
          <div className="flex items-center gap-2.5 text-base font-medium text-white/75 sm:text-lg">
            <CalendarDays className="size-5 shrink-0 text-secondary" />

            <span>{formatDate(update.date)}</span>
          </div>

          {/* Description */}
          <p className="line-clamp-3 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
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
                className="h-auto gap-2 rounded-none p-0 text-base font-bold text-secondary hover:bg-transparent hover:text-secondary/80 sm:text-lg"
              >
                Watch Now
              </Button>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default UpdatePreview
