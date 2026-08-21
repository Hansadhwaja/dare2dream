import Image from "next/image"
import { ArrowRight, CalendarDays, Play } from "lucide-react"

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
    <div className="mx-auto w-full max-w-lg self-center">
      <div
        className="
          group
          overflow-hidden
          rounded-[1.5rem]
          border
          border-white/10
          bg-white/[0.08]
          shadow-xl
          backdrop-blur-xl
          transition-all
          duration-500
          ease-out
          hover:-translate-y-1
          hover:border-secondary/30
          hover:shadow-2xl
          hover:shadow-secondary/10
          sm:rounded-[1.75rem]
        "
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-primary sm:aspect-[16/10]">
          <Image
            src={update.thumbnail}
            alt={update.title}
            fill
            sizes="(max-width: 768px) 100vw, 512px"
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/80
              via-black/20
              to-black/5
              transition-all
              duration-500
              group-hover:from-black/85
            "
          />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <VideoPlayer
              video={update.videoUrl}
              title={update.title}
              trigger={
                <div className="group/play relative">
                  {/* Outer Ring */}
                  <div
                    className="
                      absolute
                      -inset-2
                      rounded-full
                      border
                      border-white/30
                      opacity-0
                      transition-all
                      duration-500
                      group-hover/play:-inset-3
                      group-hover/play:opacity-100
                    "
                  />

                  <Button
                    type="button"
                    size="icon"
                    className="
                      relative
                      size-14
                      rounded-full
                      bg-white/95
                      text-primary
                      shadow-[0_10px_35px_rgba(0,0,0,0.25)]
                      transition-all
                      duration-300
                      ease-out
                      hover:scale-110
                      hover:bg-secondary
                      hover:text-secondary-foreground
                      active:scale-95
                      sm:size-[72px]
                    "
                  >
                    <Play className="ml-1 size-6 fill-current transition-transform duration-300 group-hover/play:scale-105 sm:size-8" />
                  </Button>
                </div>
              }
            />
          </div>

          {/* Badge */}
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5">
            <Badge
              className="
                h-7
                rounded-full
                border
                border-white/20
                bg-secondary/95
                px-3.5
                text-xs
                font-semibold
                tracking-wide
                text-secondary-foreground
                shadow-md
                backdrop-blur-sm
                sm:h-8
                sm:px-4
                sm:text-sm
              "
            >
              Latest Update
            </Badge>
          </div>

          {/* Title */}
          <div className="absolute right-4 bottom-4 left-4 sm:right-5 sm:bottom-5 sm:left-5">
            <h3 className="line-clamp-2 font-heading text-xl leading-tight font-semibold text-white sm:text-2xl">
              {update.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 p-5 sm:space-y-5 sm:p-7">
          {/* Date */}
          <div className="flex items-center gap-2.5 text-sm font-medium text-white/75 sm:text-base">
            <CalendarDays className="size-4 shrink-0 text-secondary sm:size-5" />

            <span>{formatDate(update.date)}</span>
          </div>

          {/* Description */}
          <p className="line-clamp-3 text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
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
                className="
                  group/cta
                  h-auto
                  gap-2
                  rounded-none
                  p-0
                  text-sm
                  font-bold
                  text-secondary
                  hover:bg-transparent
                  hover:text-secondary/80
                  sm:text-base
                "
              >
                Watch Now
                <ArrowRight className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1 sm:size-5" />
              </Button>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default UpdatePreview