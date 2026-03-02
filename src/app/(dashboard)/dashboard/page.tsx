"use client"

import Image from "next/image"
import { MapPin } from "lucide-react"

const upcomingEvents = [
  {
    id: 1,
    title: "Introduction to Quantum Computing",
    type: "WORKSHOP",
    typeColor: "bg-orange-500",
    date: "Oct 24, 14:00 PM",
    location: "CS Lab 2 / Virtual",
    image: "/logo.png",
    actionLabel: "view details",
    actionStyle: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
  },
  {
    id: 2,
    title: "CSS Alumni Networking Coffee",
    type: "MEETUP",
    typeColor: "bg-gray-500",
    date: "Oct 28, 09:00 AM",
    location: "Main Library Café",
    image: "/logo.png",
    actionLabel: "view details",
    actionStyle: "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50",
  },
]

export default function DashboardPage() {
  return (
    <div className="max-w-[900px] space-y-5 md:space-y-6">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="flex-1 bg-gradient-to-r from-[#2C8992] to-[#1b6b73] rounded-2xl px-5 py-5 md:px-8 md:py-6 text-white">
          <h1 className="text-[1.3rem] md:text-[1.6rem] font-display font-bold leading-tight">
            Welcome back, <span className="text-cyan-300">Chanda</span>! 👋
          </h1>
          <div className="w-8 h-[3px] bg-cyan-300 mt-3 rounded-full" />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:flex gap-3">
          <div className="bg-white border border-[#2C8992] rounded-xl px-4 py-3 md:px-5 text-center min-w-0 sm:min-w-[100px]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#2C8992] font-display">
              Attendance
            </p>
            <p className="text-[1.5rem] md:text-[1.8rem] font-bold text-gray-800 leading-none mt-1 font-display">
              12
            </p>
          </div>
          <div className="bg-white border border-[#2C8992] rounded-xl px-4 py-3 md:px-5 text-center min-w-0 sm:min-w-[100px]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#2C8992] font-display">
              Projects
            </p>
            <p className="text-[1.5rem] md:text-[1.8rem] font-bold text-gray-800 leading-none mt-1 font-display">
              04
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Registered Events */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="w-1 h-5 bg-[#2C8992] rounded-full" />
            <h2 className="text-[14px] md:text-[15px] font-bold text-gray-800 font-display">
              Upcoming Registered Events
            </h2>
          </div>
        </div>

        <div className="space-y-3">
          {upcomingEvents.map((event) => (
            <div
              key={event.id}
              className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 bg-white rounded-xl p-3.5 sm:p-4 border border-gray-100 hover:shadow-sm transition-shadow"
            >
              {/* Event Image */}
              <div className="w-full sm:w-[100px] h-[140px] sm:h-[72px] rounded-lg overflow-hidden bg-gray-800 flex-shrink-0 relative">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 100px"
                />
              </div>

              {/* Event Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`${event.typeColor} text-white text-[10px] font-bold uppercase px-2 py-0.5 rounded`}>
                    {event.type}
                  </span>
                  <span className="text-[11px] text-gray-400">{event.date}</span>
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
                className={`w-full sm:w-auto px-5 py-2.5 sm:py-2 rounded-lg text-[12px] font-bold transition-colors flex-shrink-0 ${event.actionStyle}`}
              >
                {event.actionLabel}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
