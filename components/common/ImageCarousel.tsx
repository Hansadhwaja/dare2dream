"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import type { CarouselApi } from "@/components/ui/carousel"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import { cn } from "@/lib/utils"
import { slides } from "@/constants"
import { Badge } from "../ui/badge"

export default function ImageCarousel() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return

    const updateCurrent = () => {
      setCurrent(api.selectedScrollSnap())
    }

    updateCurrent()
    api.on("select", updateCurrent)

    return () => {
      api.off("select", updateCurrent)
    }
  }, [api])

  return (
    <section className="relative w-full">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.src} className="pl-0">
              <div className="relative h-svh min-h-150 w-full overflow-hidden">
                {/* Image */}
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />

                {/* Main image overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

                {/* Hero content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-container w-full">
                    <div className="max-w-2xl">
                      <Badge
                        variant="default"
                        className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide"
                      >
                        Dare to Dream
                      </Badge>

                      <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                        {slide.title}
                      </h1>

                      <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Previous */}
        <CarouselPrevious className="left-4 border-white/20 bg-black/30 text-white backdrop-blur-md hover:bg-black/50 hover:text-white" />

        <CarouselNext className="right-4 border-white/20 bg-black/30 text-white backdrop-blur-md hover:bg-black/50 hover:text-white" />

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={current === index}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === index
                  ? "w-8 bg-white"
                  : "w-2 bg-white/50 hover:bg-white/80"
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}
