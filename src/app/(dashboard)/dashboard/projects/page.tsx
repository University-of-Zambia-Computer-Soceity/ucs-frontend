"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, ChevronDown, SlidersHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"

type Filter = "all" | "completed" | "in_progress"

const projects = [
  {
    id: 1,
    title: "AI Campus Assistant",
    description:
      "A conversational AI powered by GPT-4 to help students navigate campus...",
    status: "COMPLETED" as const,
    image: "/logo.png",
    tags: ["Python", "OpenAI API", "React"],
    team: [
      { id: 1, color: "bg-[#2C8992]" },
      { id: 2, color: "bg-gray-600" },
    ],
    teamExtra: 0,
  },
  {
    id: 2,
    title: "Sustainable E-com Platform",
    description:
      "A marketplace specifically designed for students to trade second-hand...",
    status: "IN PROGRESS" as const,
    image: "/logo.png",
    tags: ["Node.js", "MongoDB", "Next.js"],
    team: [{ id: 1, color: "bg-amber-600" }],
    teamExtra: 0,
  },
  {
    id: 3,
    title: "Smart Energy Monitor",
    description:
      "IoT-based system to monitor and analyze energy consumption in...",
    status: "COMPLETED" as const,
    image: "/logo.png",
    tags: ["C++", "Raspberry Pi", "SQL"],
    team: [],
    teamExtra: 3,
  },
  {
    id: 4,
    title: "Algorithm Visualizer",
    description:
      "Interactive web tool to visualize complex data structures and sorting...",
    status: "IN PROGRESS" as const,
    image: "/logo.png",
    tags: ["TypeScript", "D3.js", "React"],
    team: [{ id: 1, color: "bg-[#2C8992]" }],
    teamExtra: 0,
  },
]

const statusConfig = {
  COMPLETED: {
    bg: "bg-[#2C8992]",
    text: "text-white",
  },
  "IN PROGRESS": {
    bg: "bg-amber-500",
    text: "text-white",
  },
}

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>("all")
  const [sortOpen, setSortOpen] = useState(false)

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "all") return true
    if (activeFilter === "completed") return p.status === "COMPLETED"
    return p.status === "IN PROGRESS"
  })

  return (
    <div className="max-w-[960px] space-y-5 md:space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        <div className="flex items-start gap-3">
          <div className="w-1 h-8 bg-[#2C8992] rounded-full mt-0.5 flex-shrink-0" />
          <div>
            <h1 className="text-[1.2rem] md:text-[1.4rem] font-bold text-gray-800 font-display leading-tight">
              My Project Portfolio
            </h1>
            <p className="text-[12px] md:text-[13px] text-gray-400 mt-0.5">
              Showcase your technical projects and achievements
            </p>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 bg-[#2C8992] hover:bg-[#257a83] text-white px-5 py-2.5 rounded-lg text-[13px] font-bold transition-colors font-display self-start">
          <Plus size={16} strokeWidth={2.5} />
          Create New Project
        </button>
      </div>

      {/* Filters & Sort */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
        {/* Filter Tabs - horizontally scrollable on mobile */}
        <div className="flex bg-white border border-gray-200 rounded-lg overflow-x-auto no-scrollbar">
          {(
            [
              { key: "all", label: "All Projects" },
              { key: "completed", label: "Completed" },
              { key: "in_progress", label: "In Progress" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveFilter(tab.key)}
              className={cn(
                "px-4 md:px-5 py-2 text-[12px] font-bold transition-colors font-display whitespace-nowrap",
                activeFilter === tab.key
                  ? "bg-[#2C8992] text-white"
                  : "text-gray-500 hover:bg-gray-50"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            onClick={() => setSortOpen(!sortOpen)}
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-[12px] text-gray-600 hover:bg-gray-50 transition-colors w-full sm:min-w-[220px]"
          >
            <SlidersHorizontal size={14} className="text-gray-400" />
            <span className="flex-1 text-left">Sort by: Newest First</span>
            <ChevronDown size={14} className="text-gray-400" />
          </button>
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}

        {/* Add New Project Card */}
        <button className="flex flex-col items-center justify-center gap-3 border-2 border-dashed border-gray-200 rounded-xl min-h-[200px] sm:min-h-[320px] hover:border-[#2C8992] hover:bg-[#f0fafb] transition-colors group">
          <div className="w-12 h-12 rounded-full border-2 border-gray-300 group-hover:border-[#2C8992] flex items-center justify-center transition-colors">
            <Plus
              size={24}
              className="text-gray-300 group-hover:text-[#2C8992] transition-colors"
            />
          </div>
          <span className="text-[13px] font-semibold text-gray-400 group-hover:text-[#2C8992] font-display transition-colors">
            Add New Project
          </span>
        </button>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  const config = statusConfig[project.status]

  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="relative h-[160px] bg-gray-800">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <span
          className={cn(
            "absolute top-3 right-3 text-[10px] font-bold uppercase px-2.5 py-1 rounded",
            config.bg,
            config.text
          )}
        >
          {project.status}
        </span>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="text-[14px] font-bold text-gray-800 font-display leading-snug">
          {project.title}
        </h3>
        <p className="text-[12px] text-gray-400 mt-1.5 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium text-gray-500 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
          {/* Team Avatars */}
          <div className="flex items-center -space-x-2">
            {project.team.map((member) => (
              <div
                key={member.id}
                className={cn(
                  "w-7 h-7 rounded-full border-2 border-white",
                  member.color
                )}
              />
            ))}
            {project.teamExtra > 0 && (
              <div className="w-7 h-7 rounded-full border-2 border-white bg-[#2C8992] flex items-center justify-center">
                <span className="text-[9px] font-bold text-white">
                  +{project.teamExtra}
                </span>
              </div>
            )}
          </div>

          <button className="text-[12px] font-bold text-[#2C8992] hover:underline font-display flex items-center gap-1">
            View Details
            <span className="text-[14px]">&rsaquo;</span>
          </button>
        </div>
      </div>
    </div>
  )
}
