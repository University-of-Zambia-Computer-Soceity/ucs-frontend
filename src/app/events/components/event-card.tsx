"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Video } from "lucide-react"
import { Event } from "@/types/events"

interface EventCardProps {
  event: Event
  onRegister: (event: Event) => void
}

export function EventCard({ event, onRegister }: EventCardProps) {
  return (
    <Card className="group overflow-hidden border border-border/50 rounded-2xl hover:shadow-lg hover:border-primary/20 transition-all duration-300">
      <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <Badge
          className={`absolute top-2 left-2 px-2 py-0.5 text-[10px] font-medium rounded-md ${
            event.type === "upcoming"
              ? "bg-emerald-500/90 text-white"
              : "bg-muted-foreground/80 text-white"
          }`}
        >
          {event.type === "upcoming" ? "Upcoming" : "Past"}
        </Badge>
        {event.type === "upcoming" && event.capacity && event.attendees && (
          <div className="absolute bottom-2 left-2 right-2">
            <div className="flex justify-between text-[10px] text-white/90 mb-1">
              <span>
                {event.attendees}/{event.capacity} registered
              </span>
              <span>{event.capacity - event.attendees} left</span>
            </div>
            <div className="h-1 bg-white/30 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{
                  width: `${(event.attendees / event.capacity) * 100}%`,
                }}
              />
            </div>
          </div>
        )}
      </div>
      <CardContent className="p-4 sm:p-5 space-y-3">
        <h3 className="font-semibold text-base sm:text-lg line-clamp-2 leading-tight">
          {event.title}
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
          {event.description}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3 shrink-0" />
            {event.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3 shrink-0" />
            {event.time}
          </span>
          <span className="flex items-center gap-1 min-w-0 truncate max-w-[140px]">
            <MapPin className="h-3 w-3 shrink-0" />
            <span className="truncate">{event.location}</span>
          </span>
        </div>
        {event.tags && event.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-1">
            {event.tags.slice(0, 3).map((tag, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="px-2 py-0 text-[10px] font-normal rounded border-primary/20 text-muted-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        <div className="flex gap-2 pt-2">
          {event.type === "upcoming" ? (
            <>
              <Button
                size="sm"
                className="flex-1 min-h-[44px] sm:h-8 sm:min-h-0 text-xs rounded-lg"
                onClick={() => onRegister(event)}
              >
                Sign Up
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="min-h-[44px] sm:h-8 sm:min-h-0 px-3 text-xs rounded-lg"
              >
                Share
              </Button>
            </>
          ) : (
            <>
              <Button
                size="sm"
                variant="outline"
                className="flex-1 min-h-[44px] sm:h-8 sm:min-h-0 text-xs rounded-lg gap-1"
              >
                <Video className="h-3 w-3" /> Watch
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="min-h-[44px] sm:h-8 sm:min-h-0 px-3 text-xs rounded-lg"
              >
                Photos
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
