"use client"

import {
  AlertCircle,
  Megaphone,
  Wrench,
  MoreHorizontal,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

type AnnouncementType = "IMPORTANT" | "NEWS" | "MAINTENANCE"

const typeConfig: Record<
  AnnouncementType,
  { badge: string; iconBg: string; iconColor: string; icon: LucideIcon }
> = {
  IMPORTANT: {
    badge: "bg-rose-500 text-white",
    iconBg: "bg-rose-50",
    iconColor: "text-rose-500",
    icon: AlertCircle,
  },
  NEWS: {
    badge: "bg-blue-500 text-white",
    iconBg: "bg-blue-50",
    iconColor: "text-blue-500",
    icon: Megaphone,
  },
  MAINTENANCE: {
    badge: "bg-amber-500 text-white",
    iconBg: "bg-amber-50",
    iconColor: "text-amber-500",
    icon: Wrench,
  },
}

const announcements = [
  {
    id: 1,
    type: "IMPORTANT" as AnnouncementType,
    date: "Oct 26, 2023 • 09:45 AM",
    title: "Server Maintenance: UCS Portal Downtime",
    description:
      "Please be advised that the UCS Portal will be undergoing scheduled maintenance this Sunday from 02:00 AM to 06:00 AM UTC. During this period, all services including project submissions and event registrations will be temporarily unavailable.",
    author: "System Admin",
    authorColor: "bg-emerald-500",
    actionLabel: "Read Full Details",
  },
  {
    id: 2,
    type: "NEWS" as AnnouncementType,
    date: "Oct 24, 2023 • 02:15 PM",
    title: "New Partnership: Industry Mentorship Program",
    description:
      "We are thrilled to announce our new partnership with leading tech firms to bring a structured mentorship program to our community. Applications for the first cohort open next week! This is a unique opportunity to learn from industry veterans.",
    author: "Sarah Jenkins",
    authorColor: "bg-amber-400",
    actionLabel: "View Partner List",
  },
  {
    id: 3,
    type: "MAINTENANCE" as AnnouncementType,
    date: "Oct 22, 2023 • 11:30 AM",
    title: "Library Lab Workstations Upgrade",
    description:
      "The main Library Computer Lab will be closed for workstation hardware upgrades starting this Wednesday. We're installing new GPUs and increasing RAM on all stations. The lab is expected to reopen on Friday morning.",
    author: "Michael Ross",
    authorColor: "bg-rose-400",
    actionLabel: "Alternative Locations",
  },
]

export default function AnnouncementsPage() {
  return (
    <div className="max-w-[900px] space-y-5 md:space-y-6">
      {/* Welcome Banner */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        <div className="flex-1 bg-gradient-to-r from-[#2C8992] to-[#1b6b73] rounded-2xl px-5 py-5 md:px-8 md:py-6 text-white">
          <h1 className="text-[1.3rem] md:text-[1.6rem] font-display font-bold leading-tight">
            Welcome back, <span className="text-cyan-300">Chanda</span>! 👋
          </h1>
          <p className="text-[12px] md:text-[13px] text-white/70 mt-2 leading-relaxed max-w-[380px]">
            Stay updated with the latest community news, maintenance schedules,
            and important announcements.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:flex gap-3">
          <div className="bg-white border border-[#2C8992] rounded-xl px-4 py-3 md:px-5 text-center min-w-0 sm:min-w-[100px]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#2C8992] font-display">
              Announcements
            </p>
            <p className="text-[1.5rem] md:text-[1.8rem] font-bold text-gray-800 leading-none mt-1 font-display">
              24
            </p>
          </div>
          <div className="bg-white border border-[#2C8992] rounded-xl px-4 py-3 md:px-5 text-center min-w-0 sm:min-w-[100px]">
            <p className="text-[10px] font-bold uppercase tracking-wider text-[#2C8992] font-display">
              Unread
            </p>
            <p className="text-[1.5rem] md:text-[1.8rem] font-bold text-gray-800 leading-none mt-1 font-display">
              03
            </p>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-[#2C8992] rounded-full" />
          <h2 className="text-[14px] md:text-[15px] font-bold text-gray-800 font-display">
            Community Announcements
          </h2>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 md:px-4 py-2 text-[12px] text-gray-600 hover:bg-gray-50 transition-colors">
            All Types
            <ChevronDown size={14} className="text-gray-400" />
          </button>
          <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 md:px-4 py-2 text-[12px] text-gray-600 hover:bg-gray-50 transition-colors">
            <SlidersHorizontal size={14} className="text-gray-400" />
            <span className="hidden sm:inline">Newest First</span>
            <span className="sm:hidden">Sort</span>
          </button>
        </div>
      </div>

      {/* Announcement Cards */}
      <div className="space-y-3 md:space-y-4">
        {announcements.map((item) => {
          const config = typeConfig[item.type]
          const Icon = config.icon

          return (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-gray-100 p-4 md:p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-3 md:gap-4">
                {/* Icon - hidden on very small screens, shown inline with badge */}
                <div
                  className={`w-10 h-10 md:w-11 md:h-11 rounded-xl ${config.iconBg} flex items-center justify-center flex-shrink-0 mt-0.5 hidden sm:flex`}
                >
                  <Icon size={18} className={config.iconColor} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  {/* Meta Row */}
                  <div className="flex items-center justify-between mb-1.5 gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                      {/* Mobile-only inline icon */}
                      <div
                        className={`w-6 h-6 rounded-md ${config.iconBg} flex items-center justify-center flex-shrink-0 sm:hidden`}
                      >
                        <Icon size={13} className={config.iconColor} />
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${config.badge}`}
                      >
                        {item.type}
                      </span>
                      <span className="text-[10px] md:text-[11px] text-gray-400">
                        {item.date}
                      </span>
                    </div>
                    <button className="text-gray-300 hover:text-gray-500 transition-colors flex-shrink-0">
                      <MoreHorizontal size={18} />
                    </button>
                  </div>

                  {/* Title */}
                  <h3 className="text-[13px] md:text-[14px] font-bold text-gray-800 font-display leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[11px] md:text-[12px] text-gray-400 mt-1.5 leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <div
                        className={`w-5 h-5 md:w-6 md:h-6 rounded-full ${item.authorColor}`}
                      />
                      <span className="text-[11px] md:text-[12px] font-medium text-gray-600">
                        {item.author}
                      </span>
                    </div>
                    <button className="text-[11px] md:text-[12px] font-bold text-[#2C8992] hover:underline font-display flex items-center gap-1 flex-shrink-0">
                      <span className="hidden sm:inline">{item.actionLabel}</span>
                      <span className="sm:hidden">Details</span>
                      <span className="text-[14px]">&rsaquo;</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
