"use client"

import { ReactNode } from "react"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface VideoPlayerProps {
  video: string
  title?: string
  trigger: ReactNode
}

const VideoPlayer = ({ video, title = "Video", trigger }: VideoPlayerProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>

      <DialogContent className="flex flex-col gap-0 overflow-hidden rounded-xl border-0 bg-black p-0">
        {/* Header */}
        <DialogHeader className="shrink-0 bg-primary px-4 py-3 sm:px-6 sm:py-4">
          <DialogTitle className="font-heading text-base font-semibold text-white sm:text-xl lg:text-2xl">
            {title}
          </DialogTitle>
        </DialogHeader>

        {/* Video */}
        <div className="flex min-h-0 flex-1 items-center justify-center bg-black">
          <video
            src={video}
            controls
            controlsList="nodownload"
            autoPlay
            playsInline
            preload="metadata"
            onContextMenu={(e) => e.preventDefault()}
            className="h-full w-full object-contain"
          >
            Your browser does not support the video player.
          </video>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default VideoPlayer
