import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { Event } from "@/types/events"
import { events } from "../../../../lib/data/events"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, ArrowLeft } from "lucide-react"

interface EventDetailsPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function EventDetailsPage({
  params,
}: EventDetailsPageProps) {
  const { id } = await params
  const event = events.find((e: Event) => e.id === id)

  if (!event) {
    return notFound()
  }

  const registrationOpen = event.type === "upcoming"

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative w-full">
        <div className="relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] overflow-hidden">
          <Image
            src={event.image}
            alt={event.title}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/10" />
          <div className="absolute inset-x-0 bottom-0">
            <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10">
              <Link
                href="/events"
                className="inline-flex items-center text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors mb-3 sm:mb-4"
              >
                <ArrowLeft className="mr-1.5 h-3 w-3" />
                Back to events
              </Link>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <Badge
                  className={
                    event.type === "upcoming"
                      ? "bg-emerald-500/90 text-white"
                      : "bg-muted-foreground/90 text-white"
                  }
                >
                  {event.type === "upcoming" ? "Upcoming Event" : "Past Event"}
                </Badge>
                {event.tags &&
                  event.tags.slice(0, 3).map((tag: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="border-primary/20 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-2">
                {event.title}
              </h1>
              <p className="max-w-2xl text-sm sm:text-base text-muted-foreground">
                {event.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex-1 py-8 sm:py-10 md:py-12 bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">
          <div className="space-y-6 sm:space-y-8">
            <div className="rounded-2xl border bg-background/80 backdrop-blur-sm p-5 sm:p-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-semibold mb-3">
                About this event
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                {event.longDescription}
              </p>
            </div>

            {(event.highlights && event.highlights.length > 0) ||
            (event.prerequisites && event.prerequisites.length > 0) ? (
              <div className="grid gap-4 md:grid-cols-2">
                {event.highlights && event.highlights.length > 0 && (
                  <div className="rounded-2xl border bg-background p-5 sm:p-6">
                    <h3 className="text-sm font-semibold mb-3">
                      What you&apos;ll experience
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                      {event.highlights.map((item: string, idx: number) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {event.prerequisites && event.prerequisites.length > 0 && (
                  <div className="rounded-2xl border bg-background p-5 sm:p-6">
                    <h3 className="text-sm font-semibold mb-3">
                      How to get ready
                    </h3>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                      {event.prerequisites.map((item: string, idx: number) => (
                        <li key={idx} className="flex gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : null}

            {event.speakers && event.speakers.length > 0 && (
              <div className="rounded-2xl border bg-background p-5 sm:p-6">
                <h3 className="text-sm font-semibold mb-3">Speakers</h3>
                <div className="flex flex-wrap gap-2">
                  {event.speakers.map((speaker: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="rounded-full border-primary/20 text-xs"
                    >
                      {speaker}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <aside className="space-y-4 sm:space-y-5">
            <div className="rounded-2xl border bg-background p-5 sm:p-6 shadow-sm space-y-4">
              <h2 className="text-sm font-semibold tracking-tight">
                Event details
              </h2>
              <div className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
                <div className="flex gap-3">
                  <Calendar className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-xs sm:text-sm">
                      Date &amp; time
                    </p>
                    <p>
                      {event.date} · {event.time}
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground text-xs sm:text-sm">
                      Location
                    </p>
                    <p>{event.location}</p>
                  </div>
                </div>
                {event.capacity && event.attendees && (
                  <div className="flex gap-3">
                    <Users className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <div className="w-full">
                      <p className="font-medium text-foreground text-xs sm:text-sm">
                        Attendance
                      </p>
                      <p className="text-xs sm:text-sm mb-1">
                        {event.attendees} registered · {event.capacity} capacity
                      </p>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary rounded-full"
                          style={{
                            width: `${Math.min(
                              100,
                              (event.attendees / event.capacity) * 100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="pt-2">
                {registrationOpen ? (
                  <Button className="w-full h-10 rounded-xl text-sm">
                    Register for this event
                  </Button>
                ) : (
                  <div className="rounded-xl border border-dashed border-muted px-3 py-3 text-xs sm:text-sm text-muted-foreground">
                    This event has ended. Explore other{" "}
                    <Link
                      href="/events"
                      className="font-medium text-primary hover:underline"
                    >
                      upcoming events
                    </Link>
                    .
                  </div>
                )}
              </div>
            </div>

            {event.tags && event.tags.length > 0 && (
              <div className="rounded-2xl border bg-background p-4 sm:p-5">
                <h3 className="text-xs font-semibold mb-3 uppercase tracking-wide text-muted-foreground">
                  Topics
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {event.tags.map((tag: string, idx: number) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="rounded-full text-[11px] border-muted-foreground/30"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>
    </div>
  )
}

