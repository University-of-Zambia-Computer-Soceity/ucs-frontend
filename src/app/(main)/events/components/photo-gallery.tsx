"use client"

import { useState } from "react"
import Image from "next/image"

import { photoRows } from "@/lib/data/events"
import { Photo } from "@/types/events"
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogTitle,
} from "@/components/ui/dialog"
import { X } from "lucide-react"

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

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
                    <button
                      type="button"
                      key={`${photo.id}-${photoIndex}`}
                      className="group relative w-40 sm:w-52 md:w-56 h-28 sm:h-36 md:h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog
        open={!!selectedPhoto}
        onOpenChange={(open) => {
          if (!open) setSelectedPhoto(null)
        }}
      >
        <DialogContent className="max-w-3xl border-none bg-background/95 p-3 sm:p-4 md:p-6 shadow-2xl">
          <DialogTitle className="sr-only">
            Photo preview from events gallery
          </DialogTitle>
          <DialogClose className="absolute right-3 top-3 rounded-full border bg-background/80 p-1 text-muted-foreground hover:text-foreground hover:bg-background transition-colors">
            <X className="h-4 w-4" />
          </DialogClose>
          <div className="relative w-full aspect-[16/10] sm:aspect-video rounded-xl overflow-hidden bg-black/80">
            {selectedPhoto && (
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                sizes="(min-width: 1024px) 800px, 100vw"
              />
            )}
          </div>
          {selectedPhoto && (
            <p className="mt-3 text-xs sm:text-sm text-muted-foreground text-center line-clamp-2">
              {selectedPhoto.alt}
            </p>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
