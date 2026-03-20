"use client";

import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const executives = [
  {
    name: "Peter K. Lubasi",
    position: "President",
    image: "/execs/peter-lubasi.jpeg",
    bio: "Peter K. Lubasi serves as the President. He is passionate about technology, collaboration, and leading innovative initiatives within the team.",
    email: "peterkay862@gmail.com",
    linkedin: "https://www.linkedin.com/in/peter-k-lubasi-801103335",
    github: "https://github.com/PeterKay86",
  },
  {
    name: "Kasonde Bbuku",
    position: "Vice President",
    image: "/execs/kasonde-bbuku.jpeg",
    bio: "Kasonde Bbuku serves as the Vice President, contributing to leadership, collaboration, and technical development within the team.",
    email: "kasondebbuku1@gmail.com",
    linkedin: "https://www.linkedin.com/in/kasonde-bbuku-598a10345",
    github: "https://github.com/kasondebbuku-spec",
  },
  {
    name: "Samuel Chibinji Mwanza",
    position: "Secretary",
    image: "/execs/samuel-chibinji-mwanza.jpeg",
    bio: "Samuel Chibinji Mwanza serves as the Secretary, responsible for coordinating communication, maintaining records, and supporting the organization's administrative activities.",
    email: "samuelchibinjimwanza@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/samuel-chibinji-mwanza-1437772b4",
    github: "https://github.com/chibinji",
  },
  {
    name: "Jimmy James",
    position: "Treasurer",
    image: "/execs/jimmy james sakala.jpeg",
    bio: "Jimmy James serves as the Treasurer, responsible for managing financial records, budgeting, and ensuring proper financial coordination within the team.",
    email: "jamessakala494@gmail.com",
    linkedin: "https://www.linkedin.com/in/jimmy-james-331b46385",
    github: "",
  },
  {
    name: "Humphrey Chama",
    position: "Project Coordinator",
    image: "/execs/humphrey-chama.jpeg",
    bio: "Humphrey Chama serves as the Project Coordinator, helping organize project activities, coordinate team efforts, and ensure smooth progress across initiatives.",
    email: "humphreychama84@gmail.com",
    linkedin: "https://www.linkedin.com/in/humphrey-chama-a5b049344",
    github: "https://github.com/Am3-ch",
  },
  {
    name: "Vanessa Banda",
    position: "Webmaster",
    image: "/execs/vanessa-banda.jpeg",
    bio: "Vanessa Banda serves as the Webmaster, responsible for managing the website, maintaining its functionality, and ensuring a smooth digital experience for users.",
    email: "bandavanessa166@gmail.com",
    linkedin: "https://www.linkedin.com/in/vanessa-banda-962b27252",
    github: "https://github.com/vanessa200321",
  },
  {
    name: "Deborah Kumwenda",
    position: "Publicity Secretary",
    image: "/execs/deborah-kumwenda.jpeg",
    bio: "Deborah Kumwenda serves as the Publicity Secretary, responsible for managing public communications, promoting activities, and ensuring the organization maintains a strong public presence.",
    email: "deborahkumwenda66@gmail.com",
    linkedin: "https://www.linkedin.com/in/deborah-kumwenda-326052369",
    github: "https://github.com/deborah-codes1",
  },
  {
    name: "Enoch Simfukwe",
    position: "Committee Member",
    image: "/execs/Enoch-Simfukwe.jpeg",
    bio: "Enoch Simfukwe is a Committee Member contributing to technical initiatives, development, and collaborative innovation within the team.",
    email: "simfukweenoch@gmail.com",
    linkedin: "https://www.linkedin.com/in/enoch-simfukwe-7b230a371",
    github: "https://github.com/en236gh",
  },
  {
    name: "Stella Sinda",
    position: "Committee Member",
    image: "/execs/stella-sinda.jpeg",
    bio: "Stella Sinda serves as a Committee Member, contributing to team initiatives, supporting projects, and collaborating on organizational goals.",
    email: "stellasinda01@gmail.com",
    linkedin: "https://www.linkedin.com/in/stella-sinda-180132269",
    github: "https://github.com/stellasinda",
  },
  {
    name: "Salem Mutambo",
    position: "Committee Member",
    image: "/execs/salem-mutambo.jpeg",
    bio: "Salem Mutambo serves as a Committee Member, contributing to team projects, supporting organizational activities, and collaborating on initiatives.",
    email: "mutambosalem@gmail.com",
    linkedin: "",
    github: "https://github.com/salemmutambo",
  },
];

/* ─── Single Executive Documentary Section ─── */
function ExecutiveSection({
  executive,
  index,
  total,
  onInView,
}: {
  executive: (typeof executives)[number];
  index: number;
  total: number;
  onInView: (i: number) => void;
}) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.5 });

  useEffect(() => {
    if (isInView) onInView(index);
  }, [isInView, index, onInView]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={executive.image}
          alt=""
          fill
          className="object-cover"
          priority={index < 2}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/80 to-background/95" />
      </div>

      {/* Position transition banner */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.8 }}
        className="absolute top-24 left-0 right-0 z-10"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-block h-px flex-1 bg-primary/40" />
            <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-primary font-sans font-medium">
              {executive.position} &mdash; {index + 1} of {total}
            </span>
            <span className="inline-block h-px flex-1 bg-primary/40" />
          </div>
        </div>
      </motion.div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
          >
            <Card className="overflow-hidden shadow-2xl border-primary/20">
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={executive.image}
                  alt={executive.name}
                  fill
                  className="object-cover"
                  priority={index < 2}
                />
              </div>
            </Card>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.4 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-primary">
                {executive.name}
              </h2>
              <p className="text-lg sm:text-xl text-secondary font-sans font-medium">
                {executive.position}
              </p>
            </div>

            <div className="h-1 w-16 bg-primary rounded-full" />

            <p className="text-base sm:text-lg text-foreground leading-relaxed font-sans">
              {executive.bio}
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 pt-2">
              {executive.email && (
                <Link
                  href={`mailto:${executive.email}`}
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`Email ${executive.name}`}
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm font-sans hidden sm:inline">
                    Email
                  </span>
                </Link>
              )}
              {executive.linkedin && (
                <Link
                  href={executive.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`LinkedIn profile of ${executive.name}`}
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="text-sm font-sans hidden sm:inline">
                    LinkedIn
                  </span>
                </Link>
              )}
              {executive.github && (
                <Link
                  href={executive.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`GitHub profile of ${executive.name}`}
                >
                  <Github className="h-5 w-5" />
                  <span className="text-sm font-sans hidden sm:inline">
                    GitHub
                  </span>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint (only on first section) */}
      {index === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
        >
          <span className="text-xs text-muted-foreground font-sans uppercase tracking-widest">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="h-5 w-5 text-primary" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

/* ─── Sticky Position Indicator (side rail) ─── */
function PositionIndicator({
  activeIndex,
  total,
}: {
  activeIndex: number;
  total: number;
}) {
  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-2">
      {Array.from({ length: total }).map((_, i) => (
        <motion.div
          key={i}
          className="relative flex items-center"
          initial={false}
          animate={{
            scale: i === activeIndex ? 1 : 0.8,
          }}
          transition={{ duration: 0.3 }}
        >
          <div
            className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
              i === activeIndex
                ? "bg-primary shadow-lg shadow-primary/40"
                : "bg-muted-foreground/30"
            }`}
          />
          <AnimatePresence>
            {i === activeIndex && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.25 }}
                className="absolute right-6 whitespace-nowrap text-xs font-sans text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded"
              >
                {executives[i].position}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Mobile Position Bar ─── */
function MobilePositionBar({
  activeIndex,
  total,
}: {
  activeIndex: number;
  total: number;
}) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-background/90 backdrop-blur-md border-t border-primary/20 px-4 py-3">
        {/* Progress bar */}
        <div className="w-full h-1 bg-muted-foreground/20 rounded-full mb-2">
          <motion.div
            className="h-full bg-primary rounded-full"
            initial={false}
            animate={{
              width: `${((activeIndex + 1) / total) * 100}%`,
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-sans">
            {activeIndex + 1} / {total}
          </span>
          <span className="text-xs font-medium text-primary font-sans">
            {executives[activeIndex].position} &mdash;{" "}
            {executives[activeIndex].name}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─── Page ─── */
export default function ExecutivePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleInView = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl font-bold sm:text-6xl text-primary font-display">
            Meet Our Executive Team
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground font-sans">
            Get to know the dedicated individuals leading the UNZA Computer
            Science Society. Scroll through to meet each member.
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="pt-4"
          >
            <ChevronDown className="h-8 w-8 text-primary mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Documentary Sections */}
      {executives.map((exec, i) => (
        <ExecutiveSection
          key={exec.name}
          executive={exec}
          index={i}
          total={executives.length}
          onInView={handleInView}
        />
      ))}

      {/* Side rail indicator (desktop) */}
      <PositionIndicator
        activeIndex={activeIndex}
        total={executives.length}
      />

      {/* Mobile bottom bar */}
      <MobilePositionBar
        activeIndex={activeIndex}
        total={executives.length}
      />

      {/* Contact CTA */}
      <section className="py-12 md:py-24 bg-muted bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold sm:text-4xl text-primary font-display">
            Get in Touch with Our Team
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-foreground font-sans">
            Have questions or want to learn more about the society? Feel free to
            reach out to any of our executive members.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="mailto:info@unzacssociety.org"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
