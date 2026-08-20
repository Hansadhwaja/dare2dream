import { ArrowRight, Calendar, Play } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import VideoPlayer from "@/components/common/Video/VideoPlayer"
import { Video } from "@/types/video.types"
import { formatDate } from "@/utils/date"

interface Props {
  webinar: Video
}

const WebinarCard = ({ webinar }: Props) => {
  return (
    <Card
      className="
        group
        overflow-hidden
        rounded-[1.75rem]
        border-border
        bg-card
        py-0
        shadow-sm
        transition-all
        duration-300
        ease-out
        hover:-translate-y-1
        hover:shadow-lg
      "
    >
      {/* Video */}
      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          src={webinar.videoUrl}
          muted
          playsInline
          preload="metadata"
          className="
            absolute
            inset-0
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.02]
          "
        />

        <div className="absolute inset-0 bg-black/20" />

        {/* Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <VideoPlayer
            video={webinar.videoUrl}
            title={webinar.title}
            trigger={
              <Button
                type="button"
                size="icon"
                className="
                  size-16
                  rounded-full
                  bg-white/95
                  text-primary
                  shadow-lg
                  hover:bg-secondary
                  hover:text-secondary-foreground
                  sm:size-[72px]
                "
              >
                <Play className="ml-1 size-7 fill-current sm:size-8" />
              </Button>
            }
          />
        </div>

        {/* Date */}
        <div className="absolute top-5 left-5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3.5 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
            <Calendar className="size-3.5 text-secondary" />
            {formatDate(webinar.date)}
          </span>
        </div>
      </div>

      {/* Content */}
      <CardContent className="space-y-5 p-6 sm:p-7">
        <div>
          <h3 className="font-heading text-2xl leading-tight font-semibold sm:text-3xl">
            {webinar.title}
          </h3>

          <p className="mt-4 line-clamp-3 text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            {webinar.description}
          </p>
        </div>

        {/* CTA */}
        <VideoPlayer
          video={webinar.videoUrl}
          title={webinar.title}
          trigger={
            <Button
              type="button"
              variant="ghost"
              className="
                h-auto
                gap-2
                rounded-none
                p-0
                text-base
                font-semibold
                text-secondary
                hover:bg-transparent
                hover:text-secondary
                sm:text-lg
              "
            >
              Watch Now
              <ArrowRight className="size-5" />
            </Button>
          }
        />
      </CardContent>
    </Card>
  )
}

export default WebinarCard