"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Play, ChevronLeft, ChevronRight } from "lucide-react"
import { videoHighlights } from "@/lib/data/events"

export function VideoHighlights() {
  const [, setSelectedVideo] = useState<string | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = useCallback(() => {
    const container = scrollRef.current
    if (!container) return
    setCanScrollLeft(container.scrollLeft > 10)
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    )
  }, [])

  const scroll = useCallback(
    (direction: "left" | "right") => {
      const container = scrollRef.current
      if (!container) return
      const scrollAmount = container.clientWidth * 0.75
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(checkScrollButtons, 350)
    },
    [checkScrollButtons]
  )

  useEffect(() => {
    const timer = setTimeout(checkScrollButtons, 100)
    window.addEventListener("resize", checkScrollButtons)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkScrollButtons)
    }
  }, [checkScrollButtons])

  return (
    <section className="py-10 md:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-xl md:text-2xl font-bold">Video Highlights</h2>
          <p className="text-sm text-muted-foreground mt-0.5">
            Talks & workshops from our community
          </p>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className={`absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-background shadow-md border flex items-center justify-center transition-all ${
              canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className={`absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-background shadow-md border flex items-center justify-center transition-all ${
              canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2 px-2 sm:px-4 -mx-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {videoHighlights.map((video) => (
              <div
                key={video.id}
                className="group cursor-pointer flex-shrink-0 w-[72%] sm:w-[45%] md:w-[32%] lg:w-[24%] snap-start"
                onClick={() => setSelectedVideo(video.id)}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-white/95 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="h-5 w-5 text-primary ml-0.5" />
                    </div>
                  </div>
                  <Badge className="absolute bottom-2 right-2 bg-black/70 text-white border-0 text-[10px] px-2 py-0">
                    {video.duration}
                  </Badge>
                </div>
                <p className="text-xs font-medium mt-2 line-clamp-2 px-0.5">
                  {video.title}
                </p>
                <p className="text-[10px] text-muted-foreground mt-0.5">
                  {video.views} views
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
