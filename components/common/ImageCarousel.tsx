"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
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

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { slides } from "@/constants"

const ImageCarousel = () => {
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
    <section id="hero-carousel" className="group relative w-full">
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
              <div className="relative h-svh min-h-[620px] w-full overflow-hidden">
                {/* Image */}
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  sizes="100vw"
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/20" />

                <div className="absolute inset-0 bg-linear-to-r from-primary/85 via-primary/40 to-transparent" />

                <div className="absolute inset-0 bg-linear-to-t from-primary/60 via-transparent to-primary/10" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center">
                  <div className="max-container w-full">
                    <div className="max-w-3xl">
                      <p className="mb-5 font-sans text-[10px] font-semibold tracking-[0.18em] text-secondary uppercase sm:text-xs">
                        Dare to Dream
                      </p>

                      <h1 className="font-heading text-5xl leading-[0.9] font-semibold tracking-[-0.02em] text-balance text-primary-foreground sm:text-6xl md:text-7xl lg:text-[84px]">
                        {slide.title}
                      </h1>

                      <p className="mt-6 max-w-2xl font-sans text-sm leading-7 font-light text-primary-foreground/75 sm:text-base lg:text-lg">
                        {slide.description}
                      </p>

                      <div className="mt-8 flex flex-wrap gap-3">
                        <Button
                          asChild
                          size="lg"
                          className="group rounded-full bg-secondary px-6 font-sans text-secondary-foreground shadow-lg hover:bg-secondary/90"
                        >
                          <Link href="/contact">
                            Get Started
                            <ArrowRight className="ml-2 size-4 transition-transform duration-200 group-hover:translate-x-1" />
                          </Link>
                        </Button>

                        <Button
                          asChild
                          size="lg"
                          variant="outline"
                          className="rounded-full border-primary-foreground/30 bg-primary-foreground/10 px-6 font-sans text-primary-foreground backdrop-blur-md hover:bg-primary-foreground/20 hover:text-primary-foreground"
                        >
                          <Link href="/about">Learn More</Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide counter */}
                <div className="absolute right-6 bottom-8 hidden items-center gap-3 font-sans text-primary-foreground sm:flex">
                  <span className="text-sm font-medium">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="h-px w-8 bg-primary-foreground/40" />

                  <span className="text-sm text-primary-foreground/50">
                    {String(slides.length).padStart(2, "0")}
                  </span>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation */}
        <CarouselPrevious className="left-5 size-11 -translate-x-2 border-primary-foreground/20 bg-primary/20 text-primary-foreground opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hover:bg-primary-foreground/20 hover:text-primary-foreground" />

        <CarouselNext className="right-5 size-11 translate-x-2 border-primary-foreground/20 bg-primary/20 text-primary-foreground opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 hover:bg-primary-foreground/20 hover:text-primary-foreground" />

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-2">
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
                  ? "w-8 bg-primary-foreground"
                  : "w-1.5 bg-primary-foreground/50 hover:bg-primary-foreground/80"
              )}
            />
          ))}
        </div>
      </Carousel>
    </section>
  )
}

export default ImageCarousel
