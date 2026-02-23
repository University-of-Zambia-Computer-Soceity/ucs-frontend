"use client"

import { useState } from "react"
import { Event } from "@/types/events"
import { events } from "@/lib/data/events"
import { EventsHero } from "./components/events-hero"
import { PhotoGallery } from "./components/photo-gallery"
import { EventsGrid } from "./components/events-grid"
import { VideoHighlights } from "./components/video-highlights"
import { EventsCTA } from "./components/events-cta"
import { EventRegistrationModal } from "./components/event-registration-modal"

export default function EventsPage() {
  const [registrationEvent, setRegistrationEvent] = useState<Event | null>(null)

  return (
    <div className="flex flex-col min-h-screen">
      <EventsHero />
      <PhotoGallery />
      <EventsGrid events={events} onRegister={setRegistrationEvent} />
      <VideoHighlights />
      <EventRegistrationModal
        event={registrationEvent}
        open={!!registrationEvent}
        onOpenChange={(open) => !open && setRegistrationEvent(null)}
      />
      <EventsCTA />
    </div>
  )
}
