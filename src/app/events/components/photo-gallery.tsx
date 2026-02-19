"use client"

import Image from "next/image"
import { photoRows } from "@/lib/data/events"

export function PhotoGallery() {
  return (
    <section className="py-10 md:py-14 relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-6">
        <h2 className="text-xl md:text-2xl font-bold">Photo Gallery</h2>
        <p className="text-sm text-muted-foreground mt-0.5">
          Community moments
        </p>
      </div>
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .marquee-right {
          animation: marquee-right 35s linear infinite;
        }
        .marquee-left:hover,
        .marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="relative z-10 space-y-3 md:space-y-4">
        {photoRows.map((row, rowIndex) => (
          <div key={rowIndex} className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
            <div className="overflow-hidden">
              <div
                className={
                  rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"
                }
              >
                <div className="flex gap-3 md:gap-4 w-max">
                  {[...row, ...row].map((photo, photoIndex) => (
                    <div
                      key={`${photo.id}-${photoIndex}`}
                      className="group relative w-40 sm:w-52 md:w-56 h-28 sm:h-36 md:h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
