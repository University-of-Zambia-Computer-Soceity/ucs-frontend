"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Eye, EyeOff, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  return (
    <>
      <style>{`
        .signup-input:focus {
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

        {/* Right Section - Signup Form (60%) — scrollable */}
        <div className="flex-1 h-screen overflow-y-auto relative bg-white">
          <div className="min-h-full flex flex-col items-center justify-center py-16 px-10 md:px-0">
            <div className="w-full max-w-[480px] flex flex-col items-center form-animate">
              {/* Logo */}
              <div className="mb-5">
                <img
                  src="/logo.png"
                  alt="UCS Logo"
                  width={80}
                  height={90}
                  className="object-contain"
                />
              </div>

              {/* Form Fields */}
              <div className="w-full space-y-6">

                {/* Full Name + Phone — side by side */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label
                      htmlFor="fullName"
                      className="block text-[13px] text-gray-500 font-medium mb-1.5 pl-0.5 font-display"
                    >
                      Full name
                    </label>
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="signup-input w-full h-[48px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-xl px-4 text-sm text-gray-800 outline-none transition-all"
                    />
                  </div>
                  <div className="flex-1">
                    <label
                      htmlFor="phone"
                      className="block text-[13px] text-gray-500 font-medium mb-1.5 pl-0.5 font-display"
                    >
                      phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="signup-input w-full h-[48px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-xl px-4 text-sm text-gray-800 outline-none transition-all"
                    />
                  </div>
                </div>

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
                      className="signup-input w-full h-[48px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-xl px-4 pr-12 text-sm text-gray-800 outline-none transition-all"
                    />
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
                      <Mail size={17} strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                {/* Enter Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-[13px] text-gray-500 font-medium mb-1.5 pl-0.5 font-display"
                  >
                    Enter Password
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="signup-input w-full h-[48px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-xl px-4 pr-12 text-sm text-gray-800 outline-none transition-all"
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

                {/* Confirm Password Field */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-[13px] text-gray-500 font-medium mb-1.5 pl-0.5 font-display"
                  >
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      type={showConfirm ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="signup-input w-full h-[48px] bg-[#f5f5f5] border border-[#e8e8e8] rounded-xl px-4 pr-12 text-sm text-gray-800 outline-none transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirm(!showConfirm)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                      aria-label={showConfirm ? "Hide password" : "Show password"}
                    >
                      {showConfirm ? (
                        <Eye size={17} strokeWidth={1.5} />
                      ) : (
                        <EyeOff size={17} strokeWidth={1.5} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Sign Up Button */}
                <div className="pt-4">
                  <button
                    className="w-full sm:w-[220px] h-[52px] bg-[#2C8992] hover:bg-[#257a83] text-white font-bold text-[15px] rounded-lg block mx-auto font-display tracking-wider transition-colors"
                  >
                    Sign up
                  </button>
                </div>

                {/* Sign In Link */}
                <div className="text-center pt-1">
                  <span className="text-gray-400 text-[13px] font-display">
                    Already have an account?{" "}
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
