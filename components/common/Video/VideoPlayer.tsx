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

      <DialogContent className="!fixed !inset-0 !top-0 !left-0 flex !h-screen !w-screen !max-w-none !translate-x-0 !translate-y-0 flex-col gap-0 overflow-hidden !rounded-none !border-0 bg-black !p-0">
        {/* Header */}
        <DialogHeader className="shrink-0 bg-primary px-5 py-4 sm:px-8">
          <DialogTitle className="font-heading text-lg font-semibold text-white sm:text-2xl">
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
