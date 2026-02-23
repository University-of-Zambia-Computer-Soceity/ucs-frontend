"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Moon } from "lucide-react"

function TypingHeading({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("")
  const [done, setDone] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const startTyping = () => {
      let i = 0
      setDisplayed("")
      setDone(false)
      const interval = setInterval(() => {
        i++
        setDisplayed(text.slice(0, i))
        if (i >= text.length) {
          clearInterval(interval)
          setDone(true)
          timeout = setTimeout(startTyping, 5000)
        }
      }, 70)
      return interval
    }

    const interval = startTyping()
    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [text])

  return (
    <h1
      className="font-display text-[1.8rem] sm:text-[2.5rem] font-bold text-black italic leading-none mb-4 tracking-tight text-center"
      style={{ color: "#000" }}
    >
      {displayed}
      <span
        className={`inline-block w-[3px] h-[1.6rem] sm:h-[2.2rem] bg-[#2C8992] ml-0.5 align-middle rounded-full ${done ? "animate-blink" : ""}`}
      />
    </h1>
  )
}

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  return (
    <>
      <style>{`
        .forgot-input:focus {
          border-color: #2C8992 !important;
          box-shadow: 0 0 0 3px rgba(44, 137, 146, 0.12);
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

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 0.8s step-end infinite;
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

        {/* Right Section - Form (60%) — scrollable */}
        <div className="flex-1 h-screen overflow-y-auto relative bg-white">
          <div className="min-h-full flex flex-col items-center justify-center py-16 px-5 sm:px-10 md:px-0">
            <div className="w-full max-w-[440px] flex flex-col items-center form-animate">

              {/* Logo */}
              <div className="mb-6">
                <Image
                  src="/logo.png"
                  alt="UCS Logo"
                  width={80}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* Heading */}
              <TypingHeading text="Forget Password?" />

              {/* Description */}
              <p className="text-gray-500 text-[13px] mb-8 text-center font-display leading-relaxed max-w-[340px]">
                No worries! Enter your email address and we&apos;ll send you a
                verification code to reset your password.
              </p>

              {/* Form Fields */}
              <div className="w-full space-y-0">

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[13px] text-gray-500 font-medium mb-1.5 pl-0.5 font-display"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="forgot-input w-full h-[48px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-xl px-4 pr-12 text-sm text-gray-800 outline-none transition-all"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={17} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* OR Divider */}
                <div className="flex items-center gap-4 py-6">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-gray-400 text-sm font-display font-medium">OR</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                {/* Phone Field */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[13px] text-gray-500 font-medium mb-1.5 pl-0.5 font-display"
                  >
                    Phone
                  </label>
                  <div className="relative">
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="forgot-input w-full h-[48px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-xl px-4 pr-12 text-sm text-gray-800 outline-none transition-all"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Phone size={17} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Send Verification Code Button */}
                <div className="pt-8">
                  <button
                    className="w-full h-[54px] bg-[#2C8992] hover:bg-[#257a83] text-white font-bold text-[16px] rounded-xl block mx-auto font-display tracking-wide transition-colors"
                  >
                    Send Verification Code
                  </button>
                </div>

                {/* Sign In Link */}
                <div className="text-center pt-5">
                  <span className="text-gray-400 text-[13px] font-display">
                    Remembered?{" "}
                  </span>
                  <Link
                    href="/login"
                    className="text-[#2C8992] font-bold text-[13px] hover:underline font-display"
                  >
                    Sign in
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
