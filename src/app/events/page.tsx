"use client"

import { useState, useRef, useCallback } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, Play, ExternalLink, Users, Award, Sparkles, Video, ChevronLeft, ChevronRight } from "lucide-react"

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
      {/* Hero Section with Pattern Background - Soft & Modern */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-primary/10">
        {/* Soft dotted pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-[0.04]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}></div>
        
        {/* Pattern background */}
        <div className="absolute inset-0 z-0 opacity-5">
          <Image
            src="/pattern.jpeg"
            alt="Pattern Background"
            fill
            className="object-cover"
            priority
          />
        </div>
        
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <Badge 
              variant="outline" 
              className="px-6 py-2 rounded-full border-primary/30 bg-primary/5 backdrop-blur-sm text-sm font-medium"
            >
              ✨ Computer Science Society
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
              Upcoming & <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">Past</span>
              <br />
              <span className="text-foreground">Events Gallery</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore our journey through technology. From inspiring talks to hands-on
              industry seminars, see how we are shaping the future of computing at the
              University of Zambia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button 
                size="lg" 
                className="gap-2 rounded-full px-8 h-14 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5" />
                View Photos
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 rounded-full px-8 h-14 text-base font-semibold border-2 hover:bg-primary/5 transition-all duration-300"
              >
                <Play className="h-5 w-5" />
                Watch Highlights
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section - Infinite Marquee Rows */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

        {/* Section header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold">Photo Gallery</h2>
              <p className="text-muted-foreground text-lg">
                Capturing the best moments from our community activities
              </p>
            </div>

            {/* Pill-shaped filter buttons */}
            <div className="flex gap-2 p-1.5 bg-muted/50 rounded-full backdrop-blur-sm border border-border/50">
              <Button
                variant={filter === "all" ? "default" : "ghost"}
                onClick={() => setFilter("all")}
                className={`rounded-full px-6 transition-all duration-300 ${
                  filter === "all" ? "shadow-md" : "hover:bg-background/50"
                }`}
              >
                All
              </Button>
              <Button
                variant={filter === "upcoming" ? "default" : "ghost"}
                onClick={() => setFilter("upcoming")}
                className={`rounded-full px-6 transition-all duration-300 ${
                  filter === "upcoming" ? "shadow-md" : "hover:bg-background/50"
                }`}
              >
                Workshops
              </Button>
              <Button
                variant={filter === "past" ? "default" : "ghost"}
                onClick={() => setFilter("past")}
                className={`rounded-full px-6 transition-all duration-300 ${
                  filter === "past" ? "shadow-md" : "hover:bg-background/50"
                }`}
              >
                Hackathons
              </Button>
            </div>
          </div>
        </div>

        {/* Marquee animation styles */}
        <style jsx>{`
          @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes marquee-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .marquee-left {
            animation: marquee-left 40s linear infinite;
          }
          .marquee-right {
            animation: marquee-right 40s linear infinite;
          }
          .marquee-left:hover,
          .marquee-right:hover {
            animation-play-state: paused;
          }
        `}</style>

        {/* Scrolling photo rows */}
        <div className="relative z-10 space-y-5">
          {photoRows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              {/* White fade edges */}
              <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none"></div>

              {/* Marquee track */}
              <div className="overflow-hidden">
                <div className={rowIndex % 2 === 0 ? "marquee-left" : "marquee-right"}>
                  <div className="flex gap-5 w-max">
                    {/* Duplicate the row for seamless loop */}
                    {[...row, ...row].map((photo, photoIndex) => (
                      <div
                        key={`${photo.id}-${photoIndex}`}
                        className="group relative w-64 md:w-80 h-44 md:h-52 flex-shrink-0 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 cursor-pointer"
                      >
                        <Image
                          src={photo.src}
                          alt={photo.alt}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Events Details Section - Modern Redesign */}
      <section className="py-16 md:py-24 relative">
        {/* Soft dotted background pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Explore Our <span className="text-primary">Events</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover detailed information about our upcoming and past events
            </p>
          </div>

          <div className="space-y-8">
            {filteredEvents.map((event, index) => (
              <Card
                key={event.id}
                className="overflow-hidden border-0 shadow-xl rounded-3xl bg-gradient-to-br from-background to-muted/20 hover:shadow-2xl transition-all duration-500"
              >
                <div className="grid lg:grid-cols-5 gap-0">
                  {/* Image Section with Overlay */}
                  <div className="lg:col-span-2 relative h-64 lg:h-auto">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/80 via-primary/40 to-transparent"></div>
                    
                    {/* Event Type Badge */}
                    <div className="absolute top-6 left-6">
                      <Badge 
                        className={`px-4 py-1.5 rounded-full text-sm font-medium shadow-lg ${
                          event.type === "upcoming" 
                            ? "bg-green-500 text-white border-0" 
                            : "bg-gray-500 text-white border-0"
                        }`}
                      >
                        {event.type === "upcoming" ? "Upcoming Event" : "✓ Past Event"}
                      </Badge>
                    </div>

                    {/* Capacity indicator for upcoming events */}
                    {event.type === "upcoming" && event.capacity && event.attendees && (
                      <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-semibold text-gray-700">Registration Progress</span>
                          <span className="text-sm font-bold text-primary">{event.attendees}/{event.capacity}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-primary to-primary/70 h-2.5 rounded-full transition-all duration-500"
                            style={{ width: `${(event.attendees / event.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          {event.capacity - event.attendees} spots remaining
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <CardContent className="lg:col-span-3 p-8 md:p-10 space-y-6">
                    {/* Title & Description */}
                    <div className="space-y-3">
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight">{event.title}</h3>
                      <p className="text-base text-muted-foreground leading-relaxed">
                        {event.longDescription}
                      </p>
                    </div>

                    {/* Event Details Grid */}
                    <div className="grid sm:grid-cols-3 gap-4 py-4">
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                        <div className="p-2 bg-primary/10 rounded-xl">
                          <Calendar className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">Date</p>
                          <p className="text-sm font-semibold">{event.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                        <div className="p-2 bg-primary/10 rounded-xl">
                          <Clock className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">Time</p>
                          <p className="text-sm font-semibold">{event.time}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-4 rounded-2xl bg-primary/5 border border-primary/10">
                        <div className="p-2 bg-primary/10 rounded-xl">
                          <MapPin className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground font-medium">Venue</p>
                          <p className="text-sm font-semibold">{event.location}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    {event.tags && (
                      <div className="flex flex-wrap gap-2">
                        {event.tags.map((tag, idx) => (
                          <Badge 
                            key={idx} 
                            variant="secondary" 
                            className="px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Speakers Section */}
                    {event.speakers && event.speakers.length > 0 && (
                      <div className="p-5 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold text-sm">Featured Speakers</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {event.speakers.map((speaker, idx) => (
                            <div key={idx} className="px-4 py-2 bg-white rounded-xl shadow-sm border border-gray-100">
                              <p className="text-sm font-medium">{speaker}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Event Highlights */}
                    {event.highlights && event.highlights.length > 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Sparkles className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Event Highlights</h4>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {event.highlights.map((highlight, idx) => (
                            <div key={idx} className="flex items-start gap-2 p-3 rounded-xl bg-muted/50">
                              <div className="mt-0.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground">{highlight}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Prerequisites */}
                    {event.prerequisites && event.prerequisites.length > 0 && (
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Award className="h-5 w-5 text-primary" />
                          <h4 className="font-semibold">Prerequisites</h4>
                        </div>
                        <div className="space-y-2">
                          {event.prerequisites.map((prereq, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted-foreground flex-shrink-0"></div>
                              <p className="text-sm text-muted-foreground">{prereq}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      {event.type === "upcoming" ? (
                        <>
                          <Button 
                            size="lg" 
                            className="flex-1 rounded-full text-base font-semibold h-12 bg-gradient-to-r from-primary to-primary/80 hover:shadow-xl transition-all duration-300"
                          >
                            Sign Up for Event
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline" 
                            className="flex-1 sm:flex-initial rounded-full text-base font-semibold h-12 border-2"
                          >
                            Share Event
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button 
                            size="lg" 
                            variant="outline"
                            className="flex-1 rounded-full text-base font-semibold h-12 border-2"
                          >
                            <Video className="h-5 w-5 mr-2" />
                            Watch Highlights
                          </Button>
                          <Button 
                            size="lg" 
                            variant="outline"
                            className="flex-1 sm:flex-initial rounded-full text-base font-semibold h-12 border-2"
                          >
                            View Photos
                          </Button>
                        </>
                      )}
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Highlights Section - Horizontal Carousel */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/20 relative">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12 space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold">Video Highlights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Watch our members present innovative solutions and hear from guest speakers
              from industry tech giants
            </p>
          </div>

          {/* Carousel wrapper */}
          <div className="relative group/carousel">
            {/* Left arrow */}
            <button
              onClick={() => scrollVideos("left")}
              className={`absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 hover:scale-110 hover:shadow-2xl transition-all duration-300 ${
                canScrollLeft
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700" />
            </button>

            {/* Right arrow */}
            <button
              onClick={() => scrollVideos("right")}
              className={`absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 h-12 w-12 rounded-full bg-white shadow-xl flex items-center justify-center border border-gray-100 hover:scale-110 hover:shadow-2xl transition-all duration-300 ${
                canScrollRight
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5 text-gray-700" />
            </button>

            {/* Scrollable container */}
            <div
              ref={videoScrollRef}
              onScroll={checkScrollButtons}
              className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 -mx-1 px-1"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>
              {videoHighlights.map((video) => (
                <div
                  key={video.id}
                  className="group cursor-pointer flex-shrink-0 w-[85%] sm:w-[46%] lg:w-[31%] snap-start"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div className="relative aspect-video rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="h-16 w-16 rounded-full bg-white/90 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                        <Play className="h-7 w-7 text-primary ml-1" />
                      </div>
                    </div>

                    {/* Duration */}
                    <div className="absolute bottom-4 right-4">
                      <Badge className="bg-black/75 text-white border-0 rounded-lg px-3 py-1 text-sm font-medium backdrop-blur-sm">
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 pt-6">
              {Array.from({ length: Math.ceil(videoHighlights.length / 3) }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    const container = videoScrollRef.current
                    if (!container) return
                    container.scrollTo({
                      left: i * container.clientWidth,
                      behavior: "smooth",
                    })
                    setTimeout(checkScrollButtons, 350)
                  }}
                  className="h-2.5 w-2.5 rounded-full bg-primary/25 hover:bg-primary/60 transition-colors duration-300"
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section - Soft Gradient Design */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80 z-0"></div>
        
        {/* Pattern overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <Image
            src="/pattern.jpeg"
            alt="Pattern Background"
            fill
            className="object-cover"
          />
        </div>
        
        {/* Dotted pattern */}
        <div className="absolute inset-0 z-0 opacity-[0.08]" style={{
          backgroundImage: 'radial-gradient(circle, white 1.5px, transparent 1.5px)',
          backgroundSize: '32px 32px'
        }}></div>
        
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground leading-tight">
              Don't Miss Our Next Big Event!
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/95 max-w-2xl mx-auto leading-relaxed">
              Join our mailing list to be the first to hear about upcoming seminars,
              workshops, and the annual grand Hackathon
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
