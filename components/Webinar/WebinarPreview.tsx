import Image from "next/image"
import { Calendar, Play } from "lucide-react"

import { Video } from "@/types/video.types"
import VideoPlayer from "../common/Video/VideoPlayer"
import { Button } from "../ui/button"
import { formatDate } from "@/utils/date"

interface Props {
  webinar: Video
}

const WebinarPreview = ({ webinar }: Props) => {
  return (
    <div className="group mx-auto block w-full max-w-xl overflow-hidden rounded-[30px] border border-white/10 bg-white/10 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/10">
      {/* Video Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-primary">
        <Image
          src={webinar.thumbnail}
          alt={webinar.title}
          fill
          sizes="(max-width: 768px) 100vw, 576px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/5 transition-colors duration-500 group-hover:from-black/75" />

        {/* Play Button */}
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
                  className="
                    relative size-16 rounded-full
                    bg-white/95 text-primary
                    shadow-[0_10px_35px_rgba(0,0,0,0.3)]
                    transition-all duration-500
                    hover:bg-secondary hover:text-secondary-foreground
                    group-hover/play:scale-110
                    group-active/play:scale-95
                    sm:size-20
                  "
                >
                  <Play className="ml-1 size-7 fill-current transition-transform duration-300 sm:size-8" />
                </Button>
              </div>
            }
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-5 p-6 sm:p-8">
        {/* Date */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-4 py-1.5 text-sm font-semibold text-secondary sm:text-base">
            <Calendar className="size-4" />
            {formatDate(webinar.date)}
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
      </div>
    </div>
  )
}

export default WebinarPreview