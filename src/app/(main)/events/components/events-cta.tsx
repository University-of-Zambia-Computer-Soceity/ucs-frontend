export function EventsCTA() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-primary">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-2xl px-4 sm:px-6 text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-foreground">
          Don&apos;t miss our next event
        </h2>
        <p className="text-sm sm:text-base text-primary-foreground/90 mt-2">
          Get notified about seminars, workshops, and the annual Hackathon
        </p>
      </div>
    </section>
  )
}
