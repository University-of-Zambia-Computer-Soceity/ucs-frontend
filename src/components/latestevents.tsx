"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";

/* ─── Event data (all 4 events) ─── */
const allEvents = [
  {
    id: "4",
    title: "ZNBC Educational Trip",
    subtitle: "Behind the Scenes",
    description:
      "UCS members visited ZNBC Studios for an educational trip, learning about servers, networking infrastructure, and the inner workings of broadcast operations.",
    image: "/events/ZNBC (1).jpeg",
    tag: "Educational",
    gallery: [
      "/events/znbc-1.jpeg",
      "/events/znbc-2.jpeg",
      "/events/znbc-3.jpeg",
      "/events/znbc-4.jpeg",
      "/events/znbc-5.jpeg",
      "/events/znbc-6.jpeg",
      "/events/znbc-7.jpeg",
      "/events/znbc-8.jpeg",
      "/events/znbc-9.jpeg",
    ],
  },
  {
    id: "1",
    title: "Dev Fest 2024",
    subtitle: "Developer Conference",
    description:
      "Developer tech expo to learn and grow in the industry of tech. A full day of talks, workshops, and demos.",
    image: "/events/devfest.jpg",
    tag: "Conference",
    gallery: [],
  },
  {
    id: "2",
    title: "Dev X Hackathon",
    subtitle: "48-Hour AI Challenge",
    description:
      "48-hour challenge to build cutting-edge AI applications with mentorship from experienced engineers.",
    image: "/events/devx.jpg",
    tag: "Hackathon",
    gallery: [],
  },
  {
    id: "3",
    title: "Game Dev Expo",
    subtitle: "Interactive Entertainment",
    description:
      "Game developers day where relaxation and innovation is enjoyed. Explore student and indie-built games.",
    image: "/events/gamedev.jpg",
    tag: "Expo",
    gallery: [],
  },
];

/* ─── Animated heading ─── */
function AnimatedHeading() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <div ref={ref} className="text-center space-y-3 sm:space-y-4 md:space-y-5 mb-8 sm:mb-12 md:mb-16">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className="text-sm uppercase tracking-[0.3em] text-primary font-sans font-medium"
      >
        What&apos;s been happening
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-display text-primary leading-tight"
      >
        Recent Events
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto font-sans px-2 sm:px-0"
      >
        Stay updated with our recent and upcoming activities
      </motion.p>
    </div>
  );
}

/* ─── Modern Carousel with Auto-play & Pause ─── */
function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeThreshold = 50;
    const diff = touchStartX.current - touchEndX.current;
    
    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    }
  };

  const currentEvent = allEvents[currentIndex];

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % allEvents.length);
  }, []);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + allEvents.length) % allEvents.length);
  }, []);

  const goToIndex = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  // Auto-play with pause on hover
  useEffect(() => {
    if (isPaused || !isInView) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      return;
    }

    timeoutRef.current = setTimeout(goToNext, 6000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isPaused, isInView, goToNext]);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div ref={containerRef} className="relative mb-8 sm:mb-12 md:mb-16">
      {/* Main carousel container */}
      <div
        className="relative overflow-hidden rounded-2xl md:rounded-3xl bg-card shadow-2xl group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.4 },
            }}
            className="relative"
          >
            {/* Image */}
            <div className="relative aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden">
              <Image
                src={currentEvent.image}
                alt={currentEvent.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 1280px"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

              {/* Tag */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground backdrop-blur-sm">
                  {currentEvent.tag}
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 lg:p-12">
                <div className="max-w-3xl">
                  <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/70 font-sans mb-1.5 sm:mb-2">
                    {currentEvent.subtitle}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold font-display text-white mb-2 sm:mb-3 md:mb-4">
                    {currentEvent.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-sans max-w-xl leading-relaxed mb-3 sm:mb-4 md:mb-6 hidden sm:block">
                    {currentEvent.description}
                  </p>
                  <Link
                    href={`/events/${currentEvent.id}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-secondary transition-colors font-sans group"
                  >
                    View event details
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-2 sm:left-3 md:left-5 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/30 transition-all md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Previous event"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-3 md:right-5 top-1/2 -translate-y-1/2 p-2 md:p-3 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/30 transition-all md:opacity-0 md:group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Next event"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </button>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
          <motion.div
            key={`${currentIndex}-${isPaused}`}
            className="h-full bg-secondary"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{
              duration: isPaused ? 0 : 6,
              ease: "linear",
            }}
          />
        </div>
      </div>

      {/* Dots + Pause/Play control */}
      <div className="flex items-center justify-center gap-2 sm:gap-4 mt-4 sm:mt-6">
        {/* Pause/Play button */}
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-all"
          aria-label={isPaused ? "Play carousel" : "Pause carousel"}
        >
          {isPaused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
        </button>

        {/* Dots */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {allEvents.map((_, i) => (
            <button
              key={i}
              onClick={() => goToIndex(i)}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                i === currentIndex ? "w-6 sm:w-8 bg-secondary" : "w-2 bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to event ${i + 1}`}
            >
              {i === currentIndex && (
                <motion.div
                  layoutId="activeDot"
                  className="absolute inset-0 rounded-full bg-secondary"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Counter */}
        <span className="hidden sm:block text-xs text-muted-foreground font-sans ml-2">
          {currentIndex + 1} / {allEvents.length}
        </span>
      </div>
    </div>
  );
}

/* ─── ZNBC Photo Gallery (only shows when ZNBC is active) ─── */
function ZNBCGallery({ currentIndex }: { currentIndex: number }) {
  const gallery = allEvents[currentIndex]?.gallery || [];
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 10);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  if (gallery.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{
        opacity: currentIndex === 0 ? 1 : 0,
        height: currentIndex === 0 ? "auto" : 0,
        marginBottom: currentIndex === 0 ? "2rem" : 0,
      }}
      transition={{ duration: 0.4 }}
      className="overflow-hidden"
    >
      <div ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView && currentIndex === 0 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          {/* Gallery header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
            <div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-display text-primary">
                ZNBC Behind the Scenes
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground font-sans mt-0.5 sm:mt-1">
                Moments from our educational trip
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll gallery left"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                className="p-2 rounded-full border border-primary/20 text-primary hover:bg-primary/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Scroll gallery right"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Scrollable gallery */}
          <div
            ref={scrollRef}
            className="flex gap-2 sm:gap-3 md:gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-3 sm:pb-4"
          >
            {gallery.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  isInView && currentIndex === 0
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 0.5, delay: 0.05 * i }}
                className="flex-shrink-0 snap-center"
              >
                <div className="relative w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 aspect-[4/3] rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer">
                  <Image
                    src={src}
                    alt={`ZNBC visit photo ${i + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="320px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-xs text-white/90 font-sans bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full">
                      Photo {i + 1} of {gallery.length}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

/* ─── Event Card (smaller cards in the grid) ─── */
function EventCard({
  event,
  index,
}: {
  event: (typeof allEvents)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.12,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Link href={`/events/${event.id}`} className="group block h-full">
        <div className="relative h-full overflow-hidden rounded-2xl bg-card border border-primary/10 shadow-sm hover:shadow-xl transition-shadow duration-500">
          {/* Image */}
          <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
            <Image
              src={event.image}
              alt={event.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Tag */}
            <div className="absolute top-3 left-3">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-white/90 text-foreground backdrop-blur-sm">
                {event.tag}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 md:p-6 space-y-2 sm:space-y-3">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-sans">
              {event.subtitle}
            </p>
            <h3 className="text-base sm:text-lg md:text-xl font-bold font-display text-primary group-hover:text-secondary transition-colors duration-300">
              {event.title}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground font-sans leading-relaxed line-clamp-2">
              {event.description}
            </p>
            <div className="pt-1 sm:pt-2">
              <span className="inline-flex items-center gap-1 text-xs sm:text-sm font-medium text-primary group-hover:text-secondary transition-colors font-sans">
                Learn more
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

/* ─── Main Section ─── */
const LatestEventsSection = () => {
  const [currentIndex] = useState(0);

  return (
    <section className="py-12 md:py-24 lg:py-32 bg-muted/50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 lg:px-8">
        <AnimatedHeading />

        {/* Carousel with all events */}
        <EventsCarousel />

        {/* ZNBC Gallery (conditional on carousel index) */}
        <ZNBCGallery currentIndex={currentIndex} />

        {/* Other events grid (all events as cards) */}
        <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allEvents.map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-secondary transition-colors font-sans group"
          >
            View all events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default LatestEventsSection;
