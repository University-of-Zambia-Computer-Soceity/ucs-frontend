"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Event } from "@/types/events"
import { EventCard } from "./event-card"

interface EventsGridProps {
  events: Event[]
  onRegister: (event: Event) => void
}

export function EventsGrid({ events, onRegister }: EventsGridProps) {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all")

  const filteredEvents = events.filter(
    (event) => filter === "all" || event.type === filter
  )

  return (
    <section className="py-10 md:py-14 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold">Events</h2>
            <p className="text-sm text-muted-foreground mt-0.5">
              Upcoming & past
            </p>
          </div>
          <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 sm:mx-0 sm:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <Button
              variant={filter === "all" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("all")}
              className="rounded-full px-4 min-h-[40px] sm:h-8 sm:min-h-0 text-xs shrink-0 [touch-action:manipulation] hover:bg-primary/10 hover:text-primary"
            >
              All
            </Button>
            <Button
              variant={filter === "upcoming" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("upcoming")}
              className="rounded-full px-4 min-h-[40px] sm:h-8 sm:min-h-0 text-xs shrink-0 [touch-action:manipulation] hover:bg-primary/10 hover:text-primary"
            >
              Upcoming
            </Button>
            <Button
              variant={filter === "past" ? "default" : "ghost"}
              size="sm"
              onClick={() => setFilter("past")}
              className="rounded-full px-4 min-h-[40px] sm:h-8 sm:min-h-0 text-xs shrink-0 [touch-action:manipulation] hover:bg-primary/10 hover:text-primary"
            >
              Past
            </Button>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onRegister={onRegister} />
          ))}
        </div>
      </div>
    </section>
  )
}
