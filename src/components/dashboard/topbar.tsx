"use client"

import { Bell, Menu, Search } from "lucide-react"
import Image from "next/image"

interface DashboardTopbarProps {
  onMenuClick: () => void
}

export function DashboardTopbar({ onMenuClick }: DashboardTopbarProps) {
  return (
    <header className="flex items-center justify-between h-[56px] md:h-[64px] px-4 md:px-6 bg-white border-b border-gray-100 flex-shrink-0 gap-3">
      {/* Left: Hamburger + Search */}
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <button
          onClick={onMenuClick}
          className="md:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
        >
          <Menu size={20} className="text-gray-600" />
        </button>

        <div className="relative flex-1 max-w-[400px] hidden sm:block">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for events or projects..."
            className="w-full h-[38px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-lg pl-10 pr-4 text-[13px] text-gray-700 outline-none focus:border-[#2C8992] transition-colors"
          />
        </div>

        {/* Mobile: compact search icon */}
        <button className="sm:hidden w-9 h-9 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors">
          <Search size={18} className="text-gray-500" />
        </button>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 md:gap-5 flex-shrink-0">
        <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
          <Bell size={20} strokeWidth={1.5} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#2C8992] rounded-full" />
        </button>

        <div className="flex items-center gap-2.5">
          <div className="text-right hidden sm:block">
            <p className="text-[13px] font-semibold text-gray-800 font-display leading-tight">
              Enoch Simfukwe
            </p>
            <p className="text-[11px] text-gray-400">4th Year Student</p>
          </div>
          <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-[#2C8992] overflow-hidden flex items-center justify-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Profile"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
