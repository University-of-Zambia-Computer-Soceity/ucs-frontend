export interface Event {
  id: string
  title: string
  date: string
  time: string
  location: string
  image: string
  type: "upcoming" | "past"
  description: string
  longDescription: string
  speakers?: string[]
  attendees?: number
  capacity?: number
  highlights?: string[]
  prerequisites?: string[]
  tags?: string[]
}

export interface VideoHighlight {
  id: string
  title: string
  thumbnail: string
  duration: string
  views: string
}

export interface Photo {
  id: number
  src: string
  alt: string
}
