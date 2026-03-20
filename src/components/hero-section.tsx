"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronDown, Zap, Users, Code2 } from "lucide-react"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"

// Floating animated blob
function Blob({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      className={`absolute rounded-full blur-3xl opacity-20 pointer-events-none ${className}`}
      animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, -20, 0],
        y: [0, -20, 30, 0],
      }}
      transition={{
        duration: 12,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  )
}

// Animated counter stat
function StatPill({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 bg-background/60 backdrop-blur-md border border-border/60 rounded-full px-4 py-2 shadow-sm"
    >
      <div className="w-6 h-6 rounded-full bg-[#2C8992]/15 flex items-center justify-center">
        <Icon className="w-3.5 h-3.5 text-[#2C8992]" />
      </div>
      <span className="text-xs font-semibold text-foreground">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </motion.div>
  )
}

// Typing animation for subtitle
function TypedText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("")
  const [idx, setIdx] = useState(0)

  useEffect(() => {
    if (idx < text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => prev + text[idx])
        setIdx((i) => i + 1)
      }, 35)
      return () => clearTimeout(timeout)
    }
  }, [idx, text])

  return (
    <span>
      {displayed}
      {idx < text.length && (
        <span className="inline-block w-0.5 h-5 bg-[#2C8992] ml-0.5 animate-pulse align-middle" />
      )}
    </span>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const logoX = useSpring(useTransform(mouseX, [0, 1], [-8, 8]), { stiffness: 80, damping: 20 })
  const logoY = useSpring(useTransform(mouseY, [0, 1], [-8, 8]), { stiffness: 80, damping: 20 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width)
    mouseY.set((e.clientY - rect.top) / rect.height)
  }

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen overflow-hidden flex flex-col"
    >
      {/* ── Pattern Background with Movement ── */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1, x: 0, y: 0 }}
        animate={{ 
          scale: [1, 1.05, 1],
          x: [0, 10, -5, 0],
          y: [0, -5, 5, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/pattern.jpeg"
          alt="Background Pattern"
          fill
          className="object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-background/75" />
      </motion.div>

      {/* ── Mesh gradient blobs ── */}
      <Blob className="w-[600px] h-[600px] bg-[#2C8992] top-[-100px] left-[-200px]" delay={0} />
      <Blob className="w-[500px] h-[500px] bg-[#FF9000] bottom-[-80px] right-[-150px]" delay={3} />
      <Blob className="w-[300px] h-[300px] bg-[#2C8992] bottom-[20%] left-[30%]" delay={6} />

      {/* ── Dot grid pattern overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, hsl(var(--foreground)/0.07) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* ── Noise overlay for depth ── */}
      <div className="absolute inset-0 bg-background/60 pointer-events-none" />

      {/* ── Glowing horizontal line ── */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2C8992]/60 to-transparent" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-28 pb-16 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 w-full"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[#2C8992]/10 border border-[#2C8992]/30 text-[#2C8992] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2C8992] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2C8992]" />
              </span>
              University of Zambia · Est. 1966
            </div>
          </motion.div>

          {/* Logo + wordmark */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              style={{ x: logoX, y: logoY }}
              className="relative w-24 h-24 lg:w-28 lg:h-28"
            >
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2C8992]/40 to-[#FF9000]/30 blur-xl scale-110" />
              <div className="relative w-full h-full rounded-2xl bg-background/80 backdrop-blur border border-border/60 flex items-center justify-center shadow-xl overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="UNZA CS Logo"
                  width={80}
                  height={80}
                  className="w-16 h-16 lg:w-20 lg:h-20 object-contain"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Welcome label */}
          <motion.div variants={itemVariants}>
            <p className="font-display text-base font-semibold text-[#2C8992] tracking-wide uppercase">
              Welcome to
            </p>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="-mt-2">
            <h1 className="font-display text-4xl font-bold sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight">
              <span className="bg-gradient-to-r from-[#2C8992] via-[#2C8992]/80 to-[#FF9000] bg-clip-text text-transparent">
                UNZA Computer
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#FF9000] via-[#2C8992]/80 to-[#2C8992] bg-clip-text text-transparent">
                Society
              </span>
            </h1>
          </motion.div>

          {/* Typed subtitle */}
          <motion.div variants={itemVariants}>
            <p className="font-sans mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed min-h-[3rem]">
              <TypedText text="Empowering students to innovate, collaborate, and excel in the world of technology. Join us in shaping the future of computing." />
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center gap-3 pt-2"
          >
            <Button
              asChild
              size="lg"
              className="relative group bg-[#2C8992] hover:bg-[#2C8992]/90 text-white font-semibold px-8 shadow-lg shadow-[#2C8992]/20 hover:shadow-xl hover:shadow-[#2C8992]/30 transition-all duration-300 overflow-hidden"
            >
              <Link href="/join" className="flex items-center gap-2">
                {/* shimmer */}
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                Join Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="font-mono border-[#2C8992]/50 text-[#2C8992] hover:bg-[#2C8992]/10 hover:border-[#2C8992] shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-background/50"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </motion.div>

          {/* Stat pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 pt-2"
          >
            <StatPill icon={Users} label="members" value="500+" />
            <StatPill icon={Code2} label="projects" value="80+" />
            <StatPill icon={Zap} label="events/year" value="30+" />
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="relative z-10 flex justify-center pb-8"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1 text-muted-foreground/60 cursor-pointer"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-semibold">Scroll</span>
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </motion.div>

      {/* ── Bottom gradient fade ── */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </div>
  )
}
