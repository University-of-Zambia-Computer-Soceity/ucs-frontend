"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Eye, EyeOff, Moon, Home } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface Phrase {
  text: string
  className: string
  gradient?: string
}

const PHRASES: Phrase[] = [
  { text: "Welcome", className: "text-[3.2rem] text-black" },
  { text: "to", className: "text-[2.4rem] text-gray-400" },
  {
    text: "University of Zambia",
    className: "text-[2rem]",
    gradient: "linear-gradient(135deg, #006B3F 0%, #C8A851 100%)",
  },
  {
    text: "Computer Society",
    className: "text-[2.2rem]",
    gradient: "linear-gradient(135deg, #2C8992 0%, #FF9000 100%)",
  },
]

const HOLD_MS = 2200
const TRANSITION = { duration: 0.5, ease: [0.22, 1, 0.36, 1] as number[] }

function RotatingText() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % PHRASES.length)
    }, HOLD_MS)
    return () => clearInterval(timer)
  }, [])

  const phrase = PHRASES[index]

  return (
    <div className="relative w-full h-[4.5rem] overflow-hidden mb-2">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -40, opacity: 0, filter: "blur(8px)" }}
          transition={TRANSITION}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            className={`josefin-welcome text-center leading-none tracking-tight whitespace-nowrap ${phrase.className}`}
            style={
              phrase.gradient
                ? {
                    background: phrase.gradient,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }
                : undefined
            }
          >
            {phrase.text}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <>
      <style>{`
        .josefin-welcome {
          font-family: var(--font-josefin), 'Josefin Sans', sans-serif;
          font-weight: 700;
          font-style: italic;
          letter-spacing: -0.02em;
        }

        .login-input:focus {
          border-color: #2C8992 !important;
          box-shadow: 0 0 0 3px rgba(44, 137, 146, 0.12);
        }

        .login-btn {
          transition: background-color 0.2s ease;
        }

        .pattern-wrapper {
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }

        .form-animate {
          animation: slideUp 0.5s ease forwards;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="flex h-screen w-full bg-white overflow-hidden">

        {/* Left Section - Animated Pattern (40%) */}
        <div className="hidden md:block w-[40%] flex-shrink-0 relative pattern-wrapper rounded-r-[2.5rem] overflow-hidden">
          <div className="absolute inset-0 flex animate-scroll-right">
            <div className="flex-none w-full h-full bg-pattern" />
            <div className="flex-none w-full h-full bg-pattern" />
            <div className="flex-none w-full h-full bg-pattern" />
          </div>
        </div>

        {/* Right Section - Login Form (60%) — scrollable */}
        <div className="flex-1 h-screen overflow-y-auto relative bg-white">
          {/* Home Button — pinned top-right */}
          <div className="absolute top-5 right-6 z-10">
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-[#2C8992] text-[#2C8992] hover:bg-[#2C8992]/10 transition-all duration-300"
            >
              <Link href="/" className="flex items-center gap-1.5">
                <Home className="w-4 h-4" />
                Home
              </Link>
            </Button>
          </div>

          <div className="min-h-full flex flex-col items-center justify-center py-10 px-10 md:px-0">
            <div className="w-full max-w-[400px] flex flex-col items-center form-animate">

              {/* Logo */}
              <div className="mb-5">
                <Image
                  src="/logo.png"
                  alt="UCS Logo"
                  width={80}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Animated Heading */}
              <RotatingText />

              {/* Subtle tagline */}
              <p className="text-gray-400 text-[13px] mb-10 text-center font-display">
                Sign in to continue
              </p>

              {/* Form Fields */}
              <div className="w-full space-y-5">

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[12px] text-gray-500 font-semibold uppercase tracking-wider mb-1.5 pl-0.5 font-display"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="login-input w-full h-[50px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-xl px-4 pr-12 text-sm text-gray-800 outline-none transition-all"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={17} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label
                      htmlFor="password"
                      className="block text-[12px] text-gray-500 font-semibold uppercase tracking-wider pl-0.5 font-display"
                    >
                      Password
                    </label>
                    <Link
                      href="/forgot-password"
                      className="text-[12px] text-[#2C8992] hover:underline font-medium font-display"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="login-input w-full h-[50px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-xl px-4 pr-12 text-sm text-gray-800 outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        <Eye size={17} strokeWidth={1.5} />
                      ) : (
                        <EyeOff size={17} strokeWidth={1.5} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Login Button */}
                <div className="pt-4">
                  <button
                    className="login-btn w-[220px] h-[52px] bg-[#2C8992] hover:bg-[#257a83] text-white font-bold text-[15px] rounded-lg block mx-auto font-display tracking-wider"
                  >
                    Login
                  </button>
                </div>

                {/* Sign Up Link */}
                <div className="text-center pt-1">
                  <span
                    className="text-gray-400 text-[13px] font-display"
                  >
                    Don&apos;t have an account?{" "}
                  </span>
                  <Link
                    href="/signup"
                    className="text-[#2C8992] font-bold text-[13px] hover:underline font-display"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Dark Mode Toggle - Bottom Right */}
          <button
            className="fixed bottom-5 right-5 w-10 h-10 bg-[#2C8992] hover:bg-[#257a83] rounded-full flex items-center justify-center shadow-lg transition-all z-10"
            aria-label="Toggle dark mode"
          >
            <Moon size={16} className="text-white" strokeWidth={2} />
          </button>
        </div>
      </div>
    </>
  )
}