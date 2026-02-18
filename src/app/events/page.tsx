"use client"

import { useState, useRef, useCallback, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Play, ExternalLink, Video, ChevronLeft, ChevronRight } from "lucide-react"

interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  image: string
  type: "upcoming" | "past"
  description: string
  longDescription: string
  speakers?: string[]
  attendees?: number
  capacity?: number
  highlights?: string[]
  prerequisites?: string[]
  tags?: string[]
}

interface VideoHighlight {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: string
}

export default function EventsPage() {
  const [filter, setFilter] = useState<"all" | "upcoming" | "past">("all")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  // Sample events data
  const events: Event[] = [
    {
      id: "1",
      title: "Hackathon 2024",
      date: "March 15, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Computer Science Building",
      image: "/projects/aistudy.jpeg",
      type: "upcoming",
      description: "24-hour coding challenge to build innovative solutions",
      longDescription: "Join us for an intensive 24-hour coding challenge where teams collaborate to build innovative tech solutions. This hackathon brings together students, professionals, and tech enthusiasts to solve real-world problems using cutting-edge technologies.",
      speakers: ["Dr. John Mwansa", "Sarah Chen (Google)", "Prof. Alice Banda"],
      attendees: 87,
      capacity: 120,
      highlights: [
        "Team-based coding challenge",
        "Mentorship from industry experts",
        "Prizes worth $5,000",
        "Networking opportunities",
        "Free meals and refreshments"
      ],
      prerequisites: ["Basic programming knowledge", "Laptop with dev environment", "Team of 2-4 members (or join onsite)"],
      tags: ["Coding", "Competition", "Networking", "Prizes"]
    },
    {
      id: "2",
      title: "Team Building Workshop",
      date: "February 28, 2024",
      time: "2:00 PM - 4:00 PM",
      location: "Main Hall",
      image: "/projects/gps.jpeg",
      type: "past",
      description: "Collaborative activities and networking session",
      longDescription: "An engaging workshop designed to strengthen team collaboration, communication skills, and leadership abilities through interactive activities and real-world scenarios.",
      speakers: ["Dr. Michael Zulu", "Jane Phiri (Team Coach)"],
      attendees: 65,
      capacity: 80,
      highlights: [
        "Interactive group activities",
        "Leadership exercises",
        "Communication workshops",
        "Networking session",
        "Certificate of participation"
      ],
      prerequisites: ["Open to all members", "No prior experience needed"],
      tags: ["Workshop", "Teamwork", "Leadership", "Networking"]
    },
    {
      id: "3",
      title: "AI & Machine Learning Summit",
      date: "April 22, 2024",
      time: "10:00 AM - 3:00 PM",
      location: "University Auditorium",
      image: "/projects/aistudy.jpeg",
      type: "upcoming",
      description: "Explore the latest trends in AI and machine learning",
      longDescription: "Dive deep into the world of artificial intelligence and machine learning with expert speakers from leading tech companies. Learn about the latest developments, practical applications, and future trends in AI technology.",
      speakers: ["Dr. Emmanuel Sakala", "David Martinez (Microsoft AI)", "Prof. Grace Tembo"],
      attendees: 142,
      capacity: 200,
      highlights: [
        "Keynote speeches from AI experts",
        "Hands-on ML workshops",
        "Panel discussions",
        "Demo of latest AI projects",
        "Networking lunch included"
      ],
      prerequisites: ["Interest in AI/ML", "Laptop recommended for workshops"],
      tags: ["AI", "Machine Learning", "Tech Talk", "Workshops"]
    },
  ]

  const videoHighlights: VideoHighlight[] = [
    {
      id: "1",
      title: "Google Dev Experts Talk with Sam Patton",
      thumbnail: "/projects/aistudy.jpeg",
      duration: "45:30",
      views: "1.2k",
    },
    {
      id: "2",
      title: "Recorded Intro Meetup Highlights",
      thumbnail: "/projects/gps.jpeg",
      duration: "30:15",
      views: "850",
    },
    {
      id: "3",
      title: "Tech Career Bootcamp Conference",
      thumbnail: "/projects/aistudy.jpeg",
      duration: "1:15:20",
      views: "2.1k",
    },
    {
      id: "4",
      title: "Web Development Bootcamp Showcase",
      thumbnail: "/projects/gps.jpeg",
      duration: "52:10",
      views: "1.8k",
    },
    {
      id: "5",
      title: "Annual General Meeting Highlights",
      thumbnail: "/projects/aistudy.jpeg",
      duration: "38:45",
      views: "920",
    },
    {
      id: "6",
      title: "Blockchain & Web3 Workshop",
      thumbnail: "/projects/gps.jpeg",
      duration: "1:05:30",
      views: "1.5k",
    },
  ]

  const videoScrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = useCallback(() => {
    const container = videoScrollRef.current
    if (!container) return
    setCanScrollLeft(container.scrollLeft > 10)
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    )
  }, [])

  const scrollVideos = useCallback((direction: "left" | "right") => {
    const container = videoScrollRef.current
    if (!container) return
    const scrollAmount = container.clientWidth * 0.75
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })
    setTimeout(checkScrollButtons, 350)
  }, [checkScrollButtons])

  useEffect(() => {
    const timer = setTimeout(checkScrollButtons, 100)
    window.addEventListener("resize", checkScrollButtons)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", checkScrollButtons)
    }
  }, [checkScrollButtons])

  const photoRows = [
    [
      { id: 1, src: "/projects/aistudy.jpeg", alt: "Hackathon 2024" },
      { id: 2, src: "/projects/gps.jpeg", alt: "GPS Workshop" },
      { id: 3, src: "/projects/aistudy.jpeg", alt: "AI Study Group" },
      { id: 4, src: "/projects/gps.jpeg", alt: "Tech Talk" },
      { id: 5, src: "/projects/aistudy.jpeg", alt: "Coding Session" },
      { id: 6, src: "/projects/gps.jpeg", alt: "Demo Day" },
    ],
    [
      { id: 7, src: "/projects/gps.jpeg", alt: "Team Building" },
      { id: 8, src: "/projects/aistudy.jpeg", alt: "Workshop" },
      { id: 9, src: "/projects/gps.jpeg", alt: "Networking Night" },
      { id: 10, src: "/projects/aistudy.jpeg", alt: "Guest Speaker" },
      { id: 11, src: "/projects/gps.jpeg", alt: "Awards Ceremony" },
      { id: 12, src: "/projects/aistudy.jpeg", alt: "Panel Discussion" },
    ],
    [
      { id: 13, src: "/projects/aistudy.jpeg", alt: "Career Fair" },
      { id: 14, src: "/projects/gps.jpeg", alt: "Bootcamp" },
      { id: 15, src: "/projects/aistudy.jpeg", alt: "Open Source Day" },
      { id: 16, src: "/projects/gps.jpeg", alt: "Mentorship Meet" },
      { id: 17, src: "/projects/aistudy.jpeg", alt: "Project Showcase" },
      { id: 18, src: "/projects/gps.jpeg", alt: "Social Event" },
    ],
  ]

  const filteredEvents = events.filter(
    (event) => filter === "all" || event.type === filter
  )

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero - Compact & Modern */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
        <div className="absolute inset-0 z-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 md:space-y-5">
            <Badge variant="outline" className="px-4 py-1 rounded-full border-primary/20 text-xs font-medium">
              Computer Science Society
            </Badge>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
              Events <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Inspiring talks, hands-on workshops, and community events at the University of Zambia.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
              <Button size="sm" className="gap-1.5 rounded-full h-9 px-5 text-sm">
                <ExternalLink className="h-3.5 w-3.5" />
                Photos
              </Button>
              <Button size="sm" variant="outline" className="gap-1.5 rounded-full h-9 px-5 text-sm">
                <Play className="h-3.5 w-3.5" />
                Highlights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Compact Marquee */}
      <section className="py-10 md:py-14 relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mb-6">
          <h2 className="text-xl md:text-2xl font-bold">Photo Gallery</h2>
          <p className="text-sm text-muted-foreground mt-0.5">Community moments</p>
        </div>
        <style jsx>{`
          @keyframes marquee-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
          @keyframes marquee-right { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
          .marquee-left { animation: marquee-left 35s linear infinite; }
          .marquee-right { animation: marquee-right 35s linear infinite; }
          .marquee-left:hover, .marquee-right:hover { animation-play-state: paused; }
        `}</style>
        <div className="relative z-10 space-y-3 md:space-y-4">
          {photoRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />
              <div className="overflow-hidden">
                <div className={rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"}>
                  <div className="flex gap-3 md:gap-4 w-max">
                    {[...row, ...row].map((photo, photoIndex) => (
                      <div
                        key={`${photo.id}-${photoIndex}`}
                        className="group relative w-40 sm:w-52 md:w-56 h-28 sm:h-36 md:h-40 flex-shrink-0 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
                      >
                        <Image src={photo.src} alt={photo.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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

      {/* Events - Compact Grid */}
      <section className="py-10 md:py-14 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-xl md:text-2xl font-bold">Events</h2>
              <p className="text-sm text-muted-foreground mt-0.5">Upcoming & past</p>
            </div>
            {/* Filter - horizontal scroll on mobile */}
            <div className="flex gap-1.5 overflow-x-auto pb-1 -mx-1 sm:mx-0 sm:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <Button
                variant={filter === "all" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("all")}
                className="rounded-full px-4 min-h-[40px] sm:h-8 sm:min-h-0 text-xs shrink-0 [touch-action:manipulation]"
              >
                All
              </Button>
              <Button
                variant={filter === "upcoming" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("upcoming")}
                className="rounded-full px-4 min-h-[40px] sm:h-8 sm:min-h-0 text-xs shrink-0 [touch-action:manipulation]"
              >
                Upcoming
              </Button>
              <Button
                variant={filter === "past" ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter("past")}
                className="rounded-full px-4 min-h-[40px] sm:h-8 sm:min-h-0 text-xs shrink-0 [touch-action:manipulation]"
              >
                Past
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
            {filteredEvents.map((event) => (
              <Card
                key={event.id}
                className="group overflow-hidden border border-border/50 rounded-2xl hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden">
                  <Image src={event.image} alt={event.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <Badge
                    className={`absolute top-2 left-2 px-2 py-0.5 text-[10px] font-medium rounded-md ${
                      event.type === "upcoming" ? "bg-emerald-500/90 text-white" : "bg-muted-foreground/80 text-white"
                    }`}
                  >
                    {event.type === "upcoming" ? "Upcoming" : "Past"}
                  </Badge>
                  {event.type === "upcoming" && event.capacity && event.attendees && (
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="flex justify-between text-[10px] text-white/90 mb-1">
                        <span>{event.attendees}/{event.capacity} registered</span>
                        <span>{event.capacity - event.attendees} left</span>
                      </div>
                      <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-white rounded-full transition-all"
                          style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="p-4 sm:p-5 space-y-3">
                  <h3 className="font-semibold text-base sm:text-lg line-clamp-2 leading-tight">{event.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">{event.description}</p>
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
                        <Badge key={idx} variant="secondary" className="px-2 py-0 text-[10px] font-normal rounded">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                  <div className="flex gap-2 pt-2">
                    {event.type === "upcoming" ? (
                      <>
                        <Button size="sm" className="flex-1 min-h-[44px] sm:h-8 sm:min-h-0 text-xs rounded-lg">Sign Up</Button>
                        <Button size="sm" variant="outline" className="min-h-[44px] sm:h-8 sm:min-h-0 px-3 text-xs rounded-lg">Share</Button>
                      </>
                    ) : (
                      <>
                        <Button size="sm" variant="outline" className="flex-1 min-h-[44px] sm:h-8 sm:min-h-0 text-xs rounded-lg gap-1">
                          <Video className="h-3 w-3" /> Watch
                        </Button>
                        <Button size="sm" variant="ghost" className="min-h-[44px] sm:h-8 sm:min-h-0 px-3 text-xs rounded-lg">Photos</Button>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights - Compact Carousel */}
      <section className="py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-bold">Video Highlights</h2>
            <p className="text-sm text-muted-foreground mt-0.5">Talks & workshops from our community</p>
          </div>
          <div className="relative">
            <button
              onClick={() => scrollVideos("left")}
              className={`absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-background shadow-md border flex items-center justify-center transition-all ${
                canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scrollVideos("right")}
              className={`absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 h-9 w-9 rounded-full bg-background shadow-md border flex items-center justify-center transition-all ${
                canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
            <div
              ref={videoScrollRef}
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
                    <Image src={video.thumbnail} alt={video.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
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
                  <p className="text-xs font-medium mt-2 line-clamp-2 px-0.5">{video.title}</p>
                  <p className="text-[10px] text-muted-foreground mt-0.5">{video.views} views</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA - Compact */}
      <section className="relative py-12 md:py-16 overflow-hidden bg-primary">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
        <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground">
            Don&apos;t miss our next event
          </h2>
          <p className="text-sm sm:text-base text-primary-foreground/90 mt-2">
            Get notified about seminars, workshops, and the annual Hackathon
          </p>
        </div>
      </section>
    </div>
  )
}
