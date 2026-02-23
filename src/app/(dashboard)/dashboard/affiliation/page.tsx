"use client"

import {
  CalendarCheck,
  Briefcase,
  GraduationCap,
  Users,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"

const benefits = [
  {
    icon: CalendarCheck,
    iconBg: "bg-[#e6f7f8]",
    iconColor: "text-[#2C8992]",
    title: "Attend Exclusive Events",
    description:
      "Early-bird access and free entry to our premium tech conferences, hackathons, and guest speaker series.",
  },
  {
    icon: Briefcase,
    iconBg: "bg-[#eef0ff]",
    iconColor: "text-indigo-500",
    title: "Priority for Internships",
    description:
      "Get your CV directly in front of partner recruiters from leading tech firms like Google, Microsoft, and AWS.",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-[#e6f7f8]",
    iconColor: "text-[#2C8992]",
    title: "Access to Cisco Courses",
    description:
      "Full access to the Cisco Networking Academy and proprietary course materials worth over $500.",
  },
  {
    icon: Users,
    iconBg: "bg-[#fef0f0]",
    iconColor: "text-rose-500",
    title: "Society Project Collaboration",
    description:
      "Join core engineering teams working on real-world projects used by thousands of students campus-wide.",
  },
]

export default function AffiliationPage() {
  return (
    <div className="max-w-[900px] space-y-6 md:space-y-8">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-br from-[#0d1b2a] to-[#1b3a4b] rounded-2xl px-5 py-6 md:px-8 md:py-8 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(circle_at_70%_40%,white_0%,transparent_70%)]" />

        <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-5 md:gap-6">
          <div className="max-w-[480px]">
            <h1 className="text-[1.3rem] md:text-[1.5rem] font-bold font-display leading-tight">
              Level Up Your Career
            </h1>
            <p className="text-[1.3rem] md:text-[1.5rem] font-bold font-display leading-tight text-cyan-300">
              Join the UCS Elite 👋
            </p>
            <p className="text-[12px] md:text-[13px] text-gray-300 mt-3 leading-relaxed max-w-[400px]">
              Gain access to specialized industry certifications, high-level
              networking, and exclusive student resources designed for future
              tech leaders.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mt-5 md:mt-6">
              <button className="flex items-center gap-2 bg-[#2C8992] hover:bg-[#257a83] text-white px-5 md:px-6 py-2.5 rounded-lg text-[13px] font-bold transition-colors font-display w-full sm:w-auto justify-center">
                Pay for Affiliation
                <ArrowRight size={16} />
              </button>
              <span className="text-[12px] text-gray-400">
                Join 500+ active members
              </span>
            </div>
          </div>

          {/* Price & Status Cards */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 md:px-5 text-center min-w-0 md:min-w-[100px]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 font-display">
                Price
              </p>
              <p className="text-[1.5rem] md:text-[1.8rem] font-bold text-white leading-none mt-1 font-display">
                K100
              </p>
              <p className="text-[10px] text-cyan-300/80 mt-0.5">
                Per Semester
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl px-4 py-3 md:px-5 text-center min-w-0 md:min-w-[100px]">
              <p className="text-[10px] font-bold uppercase tracking-wider text-cyan-300 font-display">
                Status
              </p>
              <p className="text-[1.5rem] md:text-[1.8rem] font-bold text-white leading-none mt-1 font-display">
                BASIC
              </p>
              <p className="text-[10px] text-cyan-300/80 mt-0.5">
                Current Tier
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Member Benefits */}
      <div>
        <div className="flex items-center gap-3 mb-4 md:mb-5">
          <div className="w-1 h-6 bg-[#2C8992] rounded-full" />
          <h2 className="text-[1rem] md:text-[1.1rem] font-bold text-gray-800 font-display">
            Member Benefits
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white rounded-xl border border-gray-100 p-4 md:p-5 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div
                  className={`w-10 h-10 md:w-11 md:h-11 rounded-xl ${benefit.iconBg} flex items-center justify-center flex-shrink-0`}
                >
                  <benefit.icon size={18} className={benefit.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[13px] md:text-[14px] font-bold text-gray-800 font-display leading-snug">
                    {benefit.title}
                  </h3>
                  <p className="text-[11px] md:text-[12px] text-gray-400 mt-1 md:mt-1.5 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upgrade CTA Card */}
      <div className="bg-white rounded-2xl border border-gray-100 py-8 px-5 md:py-10 md:px-8 text-center">
        <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-[#2C8992] bg-[#e6f7f8] px-3 py-1 rounded-full mb-4">
          Limited Time Offer
        </span>
        <h2 className="text-[1.1rem] md:text-[1.3rem] font-bold text-gray-800 font-display">
          Ready to upgrade your experience?
        </h2>
        <p className="text-[12px] md:text-[13px] text-gray-400 mt-2 max-w-[440px] mx-auto leading-relaxed">
          Join the community today and unlock all premium features for the rest
          of the academic year.
        </p>

        <button className="mt-5 md:mt-6 bg-[#2C8992] hover:bg-[#257a83] text-white px-8 md:px-10 py-3 rounded-full text-[13px] md:text-[14px] font-bold transition-colors font-display w-full sm:w-auto">
          Upgrade to Affiliate Member
        </button>

        <p className="text-[11px] text-gray-400 mt-4 flex items-center justify-center gap-1.5">
          <ShieldCheck size={13} className="text-gray-300" />
          Secure payment via Stripe or University Bursar Account
        </p>
      </div>
    </div>
  )
}
