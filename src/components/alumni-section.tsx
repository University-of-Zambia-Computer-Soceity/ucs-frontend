"use client"

import { Card } from "@/components/ui/card"
import { Mail, Linkedin, Github, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { useState } from "react"

interface Alumnus {
  name: string
  graduationYear: string
  currentRole: string
  image: string
  contribution: string
  email: string
  linkedin: string
  github: string
}

const alumni: Alumnus[] = [
  {
    name: "Daliso Miti",
    graduationYear: "2025",
    currentRole: "Software Engineer",
    image: "/execs/daliso miti.jpeg",
    contribution: "Founded the society's annual hackathon",
    email: "#",
    linkedin: "https://www.linkedin.com/in/daliso-miti-805b8323a/",
    github: "#",
  },
  {
    name: "Waza McDonald Banda",
    graduationYear: "2025",
    currentRole: "Software Developer at MyCab zambia",
    image: "/execs/waza.jpg",
    contribution: "Established tutoring program",
    email: "#",
    linkedin: "https://www.linkedin.com/in/waza-banda-a0aa451b4/",
    github: "#",
  },
  {
    name: "Wakung'uma Nyambe III",
    graduationYear: "2024",
    currentRole: "Tech Lead at Amazon",
    image: "/execs/wakunguma.jpg",
    contribution: "UCS President",
    email: "#",
    linkedin: "https://www.linkedin.com/in/wakung-uma-nyambe-iii-4a1502237/",
    github: "#",
  },
]

function AlumniCard({ alumnus, index }: { alumnus: Alumnus; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="h-[400px] cursor-pointer"
      style={{ perspective: "1200px" }}
      onClick={() => setFlipped(!flipped)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* FRONT */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-border shadow-md"
          style={{ backfaceVisibility: "hidden" }}
        >
          {/* Photo */}
          <div className="relative w-full h-full">
            <Image
              src={alumnus.image}
              alt={alumnus.name}
              fill
              className="object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Year badge */}
            <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Class of {alumnus.graduationYear}
            </div>

            {/* Bottom info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="text-xl font-bold leading-tight">{alumnus.name}</h3>
              <p className="text-white/70 text-sm mt-1">{alumnus.currentRole}</p>
              <div className="flex items-center gap-1.5 mt-3 text-white/50 text-xs">
                <span>Tap to learn more</span>
                <span className="animate-bounce">↑</span>
              </div>
            </div>
          </div>
        </div>

        {/* BACK */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border border-border bg-card shadow-md flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          {/* Accent stripe */}
          <div className="h-1.5 w-full bg-gradient-to-r from-primary/80 via-primary to-primary/40" />

          <div className="flex flex-col flex-1 p-7 justify-between">
            <div className="space-y-5">
              {/* Avatar initial + name */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-2xl font-bold text-primary">
                    {alumnus.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground leading-tight">
                    {alumnus.name}
                  </h3>
                  <span className="text-xs text-primary font-medium">
                    Class of {alumnus.graduationYear}
                  </span>
                </div>
              </div>

              {/* Role */}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                  Current Role
                </p>
                <p className="text-foreground font-medium text-sm">{alumnus.currentRole}</p>
              </div>

              {/* Contribution */}
              <div className="flex gap-3">
                <Award className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mb-1">
                    Key Contribution
                  </p>
                  <p className="text-muted-foreground text-sm">{alumnus.contribution}</p>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 pt-4 border-t border-border">
              <Link
                href={`mailto:${alumnus.email}`}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href={alumnus.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </Link>
              <Link
                href={alumnus.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-center w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-200"
              >
                <Github className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function AlumniSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-primary border border-primary/30 bg-primary/5 px-4 py-1.5 rounded-full">
            Our Legacy
          </span>
          <h2 className="text-3xl font-bold sm:text-4xl text-primary">
            Distinguished Alumni
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground font-display">
            Meet our former society members who have gone on to achieve remarkable
            success in their careers.
          </p>
          <p className="text-muted-foreground text-sm">Tap a card to discover their story</p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((alumnus, index) => (
            <AlumniCard key={alumnus.name} alumnus={alumnus} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
