import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Play } from "lucide-react"

export function EventsHero() {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden bg-gradient-to-b from-primary/5 to-background">
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 md:space-y-5">
          <Badge
            variant="outline"
            className="px-4 py-1 rounded-full border-primary/20 text-xs font-medium"
          >
            Computer Science Society
          </Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Events <span className="text-primary">Gallery</span>
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Inspiring talks, hands-on workshops, and community events at the
            University of Zambia.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 pt-2">
            <Button
              size="sm"
              className="gap-1.5 rounded-full h-9 px-5 text-sm"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Photos
            </Button>
            <Button
              size="sm"
              variant="outline"
              className="gap-1.5 rounded-full h-9 px-5 text-sm"
            >
              <Play className="h-3.5 w-3.5" />
              Highlights
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
