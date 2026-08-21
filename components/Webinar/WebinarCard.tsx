import { ArrowRight, Calendar, Play } from "lucide-react"
import Image from "next/image"

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
    <Card className="group overflow-hidden rounded-[1.75rem] border-border bg-card py-0 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-primary">
        <Image
          src={webinar.thumbnail}
          alt={webinar.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/15 transition-colors duration-300 group-hover:bg-black/25" />

        {/* Play */}
        <div className="absolute inset-0 flex items-center justify-center">
          <VideoPlayer
            video={webinar.videoUrl}
            title={webinar.title}
            trigger={
              <div className="group/play relative">
                {/* Outer ring */}
                <div className="absolute -inset-2 rounded-full border border-white/30 opacity-0 transition-all duration-500 group-hover/play:-inset-3 group-hover/play:opacity-100" />

                <Button
                  type="button"
                  size="icon"
                  className="relative size-16 rounded-full bg-white/95 text-primary shadow-[0_10px_35px_rgba(0,0,0,0.22)] transition-all duration-500 group-hover/play:scale-110 group-active/play:scale-95 hover:bg-secondary hover:text-secondary-foreground sm:size-[72px]"
                >
                  <Play className="ml-1 size-7 fill-current transition-transform duration-300 sm:size-8" />
                </Button>
              </div>
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
              className="h-auto gap-2 rounded-none p-0 text-base font-semibold text-secondary hover:bg-transparent hover:text-secondary sm:text-lg"
            >
              Watch Now
              <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          }
        />
      </CardContent>
    </Card>
  )
}

export default WebinarCard
