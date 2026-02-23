"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Clock, CalendarCheck, BarChart3, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

const stats = [
  {
    label: "Total Registered",
    value: "16",
    bg: "bg-gradient-to-br from-[#e6f7f8] to-[#d0f0f2]",
    text: "text-[#2C8992]",
    valueText: "text-gray-800",
    icon: CalendarCheck,
    iconColor: "text-[#2C8992]/40",
  },
  {
    label: "Upcoming Today",
    value: "02",
    bg: "bg-gradient-to-br from-[#2C8992] to-[#1b6b73]",
    text: "text-white/80",
    valueText: "text-white",
    icon: Calendar,
    iconColor: "text-white/20",
  },
  {
    label: "Attendance Rate",
    value: "92%",
    bg: "bg-white border border-gray-100",
    text: "text-gray-400",
    valueText: "text-gray-800",
    icon: BarChart3,
    iconColor: "text-gray-200",
  },
]

const currentWeekEvents = [
  {
    id: 1,
    title: "Introduction to Quantum Computing",
    type: "WORKSHOP",
    typeColor: "bg-orange-500",
    date: "Oct 24, 14:00 PM",
    location: "CS Lab 2 / Virtual",
    image: "/logo.png",
    actionLabel: "Join Session",
    actionStyle: "bg-[#2C8992] text-white hover:bg-[#257a83]",
  },
  {
    id: 2,
    title: "CSS Alumni Networking Coffee",
    type: "MEETUP",
    typeColor: "bg-emerald-500",
    date: "Oct 28, 09:00 AM",
    location: "Main Library Café",
    image: "/logo.png",
    actionLabel: "View Details",
    actionStyle: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
  },
]

const nextMonthEvents = [
  {
    id: 3,
    title: "Ethical Hacking 101: Live Demo",
    type: "SECURITY TALK",
    typeColor: "bg-rose-500",
    date: "Nov 04, 11:30 AM",
    location: "Auditorium A",
    image: "/logo.png",
    actionLabel: "Manage RSVP",
    actionStyle: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
  },
]

type Tab = "upcoming" | "past"

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("upcoming")

  return (
    <div className="max-w-[900px] space-y-5 md:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        <div className="flex items-start gap-3">
          <div className="w-1 h-8 bg-[#2C8992] rounded-full mt-0.5 flex-shrink-0" />
          <div>
            <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold text-gray-800 font-display leading-tight">
              My Events
            </h1>
            <p className="text-[12px] md:text-[13px] text-gray-400 mt-0.5">
              Track your registered workshops and networking sessions.
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex bg-white border border-gray-200 rounded-lg overflow-hidden self-start">
          <button
            onClick={() => setActiveTab("upcoming")}
            className={cn(
              "px-4 md:px-5 py-2 text-[12px] font-bold transition-colors font-display",
              activeTab === "upcoming"
                ? "bg-gray-800 text-white"
                : "text-gray-500 hover:bg-gray-50"
            )}
          >
            Upcoming
          </button>
          <button
            onClick={() => setActiveTab("past")}
            className={cn(
              "px-4 md:px-5 py-2 text-[12px] font-bold transition-colors font-display",
              activeTab === "past"
                ? "bg-gray-800 text-white"
                : "text-gray-500 hover:bg-gray-50"
            )}
          >
            Past Events
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "relative rounded-xl px-4 py-3.5 md:px-5 md:py-4 overflow-hidden",
              i === 2 && "col-span-2 sm:col-span-1",
              stat.bg
            )}
          >
            <p
              className={cn(
                "text-[9px] md:text-[10px] font-bold uppercase tracking-wider font-display",
                stat.text
              )}
            >
              {stat.label}
            </p>
            <p
              className={cn(
                "text-[1.6rem] md:text-[2rem] font-bold leading-none mt-1 font-display",
                stat.valueText
              )}
            >
              {stat.value}
            </p>
            <stat.icon
              size={36}
              strokeWidth={1.2}
              className={cn("absolute right-3 md:right-4 bottom-2.5 md:bottom-3", stat.iconColor)}
            />
          </div>
        ))}
      </div>

      {/* Current Week Section */}
      {activeTab === "upcoming" && (
        <>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#2C8992] mb-3 font-display">
              Current Week
            </p>
            <div className="space-y-3">
              {currentWeekEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          {/* Next Month Section */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#2C8992] mb-3 font-display">
              Next Month
            </p>
            <div className="space-y-3">
              {nextMonthEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </>
      )}

      {activeTab === "past" && (
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <Clock size={40} className="text-gray-300 mb-3" />
          <p className="text-[14px] font-semibold text-gray-500 font-display">
            No past events yet
          </p>
          <p className="text-[12px] text-gray-400 mt-1">
            Your attended events will appear here.
          </p>
        </div>
      )}
    </div>
  )
}

function EventCard({
  event,
}: {
  event: {
    id: number
    title: string
    type: string
    typeColor: string
    date: string
    location: string
    image: string
    actionLabel: string
    actionStyle: string
  }
}) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-white rounded-xl p-3.5 sm:p-4 border border-gray-100 hover:shadow-sm transition-shadow">
      {/* Event Image */}
      <div className="w-full sm:w-[120px] h-[140px] sm:h-[85px] rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 relative">
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 120px"
        />
      </div>

      {/* Event Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span
            className={cn(
              "text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded",
              event.typeColor
            )}
          >
            {event.type}
          </span>
          <span className="flex items-center gap-1 text-[11px] text-gray-400">
            <Clock size={11} />
            {event.date}
          </span>
        </div>
        <h3 className="text-[13px] sm:text-[14px] font-bold text-gray-800 font-display leading-snug">
          {event.title}
        </h3>
        <div className="flex items-center gap-1 mt-1 text-gray-400">
          <MapPin size={12} />
          <span className="text-[11px]">{event.location}</span>
        </div>
      </div>

      {/* Action Button */}
      <button
        className={cn(
          "w-full sm:w-auto px-5 py-2.5 sm:py-2.5 rounded-lg text-[12px] font-bold transition-colors flex-shrink-0",
          event.actionStyle
        )}
      >
        {event.actionLabel}
      </button>
    </div>
  )
}
