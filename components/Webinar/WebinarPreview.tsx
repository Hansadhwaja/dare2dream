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
    <div className="group mx-auto w-full max-w-xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.08] shadow-xl backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-secondary/30 hover:shadow-2xl hover:shadow-secondary/10 sm:rounded-[1.75rem]">
      {/* Thumbnail */}
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-black/5 transition-all duration-500 group-hover:from-black/80" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <VideoPlayer
            video={webinar.videoUrl}
            title={webinar.title}
            trigger={
              <div className="group/play relative">
                {/* Outer ring */}
                <div className="absolute -inset-2 rounded-full border border-white/30 opacity-0 transition-all duration-500 group-hover/play:-inset-3 group-hover/play:opacity-100 sm:-inset-2.5" />

                <Button
                  type="button"
                  size="icon"
                  className="relative size-14 rounded-full bg-white/95 text-primary shadow-[0_10px_35px_rgba(0,0,0,0.3)] transition-all duration-300 ease-out hover:scale-110 hover:bg-secondary hover:text-secondary-foreground active:scale-95 sm:size-[72px]"
                >
                  <Play className="ml-1 size-6 fill-current transition-transform duration-300 group-hover/play:scale-105 sm:size-8" />
                </Button>
              </div>
            }
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-5 sm:space-y-5 sm:p-7">
        {/* Date */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary/15 px-3.5 py-1.5 text-sm font-semibold text-secondary sm:px-4 sm:text-base">
            <Calendar className="size-4 shrink-0" />
            {formatDate(webinar.date)}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-2xl leading-tight font-semibold text-white sm:text-3xl">
          {webinar.title}
        </h3>

        {/* Description */}
        <p className="line-clamp-3 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
          {webinar.description}
        </p>
      </div>
    </div>
  )
}

export default WebinarPreview
