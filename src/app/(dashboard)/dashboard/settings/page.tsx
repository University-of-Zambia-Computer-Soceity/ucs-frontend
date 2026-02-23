"use client"

import { useState } from "react"
import Image from "next/image"
import { Pencil, Plus, X } from "lucide-react"
import { cn } from "@/lib/utils"

const initialSkills = [
  "Python",
  "JavaScript",
  "React.js",
  "PostgreSQL",
  "Tailwind CSS",
  "Cloud Computing",
  "Docker",
  "Git",
]

export default function SettingsPage() {
  const [skills, setSkills] = useState(initialSkills)
  const [newSkill, setNewSkill] = useState("")
  const [isAddingSkill, setIsAddingSkill] = useState(false)

  const addSkill = () => {
    const trimmed = newSkill.trim()
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed])
    }
    setNewSkill("")
    setIsAddingSkill(false)
  }

  const removeSkill = (skill: string) => {
    setSkills(skills.filter((s) => s !== skill))
  }

  return (
    <div className="max-w-[900px] space-y-5 md:space-y-6">
      {/* Profile Banner */}
      <div className="relative bg-gradient-to-br from-[#2C8992] to-[#1b6b73] rounded-2xl px-5 pt-6 pb-6 md:px-8 md:pt-8 md:pb-8 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_60%)]" />

        <div className="relative flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-[90px] h-[90px] md:w-[110px] md:h-[110px] rounded-2xl bg-[#d4956b] overflow-hidden relative">
              <Image
                src="/logo.png"
                alt="Profile"
                fill
                className="object-cover"
                sizes="110px"
              />
            </div>
            <button className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#2C8992] border-2 border-white rounded-full flex items-center justify-center hover:bg-[#257a83] transition-colors">
              <Pencil size={13} className="text-white" />
            </button>
          </div>

          {/* Name & Status */}
          <div className="text-center sm:text-left">
            <h1 className="text-[1.3rem] md:text-[1.6rem] font-bold text-white font-display leading-tight">
              Enoch Simfukwe
            </h1>

            <div className="mt-3 bg-white/10 backdrop-blur-sm border border-white/10 rounded-lg px-4 py-2 inline-block">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/60 font-display">
                Affiliation
              </p>
              <p className="text-[14px] font-bold text-amber-500 font-display leading-tight">
                PAID
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4 md:gap-5">
        {/* Personal Information */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-6">
          <div className="flex items-center justify-between mb-4 md:mb-5">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-[#2C8992] rounded-full" />
              <h2 className="text-[14px] md:text-[15px] font-bold text-gray-800 font-display">
                Personal Information
              </h2>
            </div>
            <button className="text-[12px] md:text-[13px] text-[#2C8992] font-semibold hover:underline font-display">
              Edit Info
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 md:gap-x-8 gap-y-4 md:gap-y-5">
            <InfoField label="Full Name" value="Enoch Simfukwe" />
            <InfoField label="Student ID" value="20204859" />
            <InfoField label="Email Address" value="enoch.sim@university.edu" />
            <InfoField label="Phone Number" value="+260 978 456 123" />
          </div>
        </div>

        {/* Skills & Technologies */}
        <div className="bg-white rounded-xl border border-gray-100 p-4 md:p-5">
          <div className="flex items-center justify-between mb-3 md:mb-4">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-[#2C8992] rounded-full" />
              <h2 className="text-[14px] font-bold text-gray-800 font-display lg:hidden">
                Skills
              </h2>
            </div>
            <button
              onClick={() => setIsAddingSkill(true)}
              className="w-7 h-7 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <Plus size={14} className="text-gray-400" />
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="group relative text-[12px] font-medium text-gray-600 bg-gray-50 border border-gray-100 px-3 py-1.5 rounded-lg hover:border-[#2C8992] hover:text-[#2C8992] transition-colors cursor-default"
              >
                {skill}
                <button
                  onClick={() => removeSkill(skill)}
                  className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-gray-300 hover:bg-rose-400 rounded-full items-center justify-center hidden group-hover:flex transition-colors"
                >
                  <X size={10} className="text-white" />
                </button>
              </span>
            ))}

            {isAddingSkill && (
              <input
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") addSkill()
                  if (e.key === "Escape") {
                    setNewSkill("")
                    setIsAddingSkill(false)
                  }
                }}
                onBlur={addSkill}
                placeholder="New skill..."
                autoFocus
                className="text-[12px] font-medium text-gray-600 bg-white border border-[#2C8992] px-3 py-1.5 rounded-lg outline-none w-[100px]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 font-display mb-1">
        {label}
      </p>
      <p className="text-[13px] md:text-[14px] font-semibold text-gray-800 font-display break-all sm:break-normal">
        {value}
      </p>
    </div>
  )
}
