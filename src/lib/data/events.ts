import { Event, VideoHighlight, Photo } from "@/types/events"

export const events: Event[] = [
  {
    id: "1",
    title: "Dev Fest 2024",
    date: "October 12, 2024",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    image: "/execs/devfest.jpg",
    type: "upcoming",
    description:
      "Developer tech expo to learn and grow in the industry of tech.",
    longDescription:
      "Dev Fest 2024 brings developers, designers, and tech enthusiasts together for a full day of talks, workshops, and demos. Discover the latest tools, frameworks, and best practices while connecting with a vibrant community focused on building the future of technology.",
    speakers: [
      "Sam Patel (Google Developer Expert)",
      "Dr. Linda Mwale",
      "Chipo Banda",
    ],
    attendees: 120,
    capacity: 200,
    highlights: [
      "Keynotes from industry experts",
      "Hands-on breakout sessions",
      "Live demos of cutting-edge tools",
      "Networking with local tech leaders",
    ],
    prerequisites: [
      "Basic programming experience",
      "Laptop with your preferred dev setup",
    ],
    tags: ["Conference", "Developers", "Tech Expo"],
  },
  {
    id: "2",
    title: "Dev X Hackathon",
    date: "November 2–3, 2024",
    time: "48-hour intensive",
    location: "Innovation Hub",
    image: "/execs/devx.jpg",
    type: "upcoming",
    description: "48-hour challenge to build cutting-edge AI applications.",
    longDescription:
      "Dev X is an intense 48-hour hackathon where teams build AI-powered solutions to real-world problems. From ideation to prototype, mentors will help you design, build, and ship projects that push the boundaries of what&apos;s possible with AI.",
    speakers: ["Ruth Nkhoma", "James Lee (ML Engineer)", "Prof. Daniel Tembo"],
    attendees: 80,
    capacity: 150,
    highlights: [
      "Team-based AI building sprint",
      "Access to curated AI APIs and datasets",
      "Mentorship from experienced ML engineers",
      "Final demo showcase and judging panel",
    ],
    prerequisites: [
      "Comfortable with at least one programming language",
      "Interest in AI / machine learning",
      "Willingness to collaborate in a team",
    ],
    tags: ["Hackathon", "AI", "Machine Learning"],
  },
  {
    id: "3",
    title: "Game Dev Expo",
    date: "September 5, 2024",
    time: "10:00 AM - 4:00 PM",
    location: "Student Center Hall",
    image: "/execs/gamedev.jpg",
    type: "past",
    description:
      "Game developers day where relaxation and innovation is enjoyed.",
    longDescription:
      "Game Dev Expo is a celebration of creativity, storytelling, and interactive experiences. Attendees explore student and indie-built games, learn about popular engines, and discover how art, sound, and code come together to create immersive worlds.",
    speakers: ["Kelvin Phiri", "Grace Ndlovu", "Indie Game Studio Panel"],
    attendees: 140,
    capacity: 140,
    highlights: [
      "Playable demos from local creators",
      "Talks on game design and storytelling",
      "Live art and music showcases",
      "Feedback from fellow devs and players",
    ],
    prerequisites: [
      "Open to all — players and creators",
      "Portfolio or demo recommended for exhibitors",
    ],
    tags: ["Game Dev", "Expo", "Creativity"],
  },
]

export const videoHighlights: VideoHighlight[] = [
  {
    id: "1",
    title: "Inside Dev Fest 2024",
    thumbnail: "/execs/devfest.jpg",
    duration: "36:20",
    views: "1.1k",
  },
  {
    id: "2",
    title: "Building AI Projects at Dev X",
    thumbnail: "/execs/devx.jpg",
    duration: "42:05",
    views: "980",
  },
  {
    id: "3",
    title: "Game Dev Expo Highlights",
    thumbnail: "/execs/gamedev.jpg",
    duration: "28:47",
    views: "1.6k",
  },
  {
    id: "4",
    title: "Behind the Scenes: Hackathon Teams",
    thumbnail: "/execs/devx.jpg",
    duration: "31:10",
    views: "740",
  },
]

export const photoRows: Photo[][] = [
  [
    { id: 1, src: "/execs/devfest.jpg", alt: "Dev Fest keynote" },
    { id: 2, src: "/execs/devx.jpg", alt: "Dev X hacking session" },
    { id: 3, src: "/execs/gamedev.jpg", alt: "Game Dev expo demo area" },
    { id: 4, src: "/execs/devfest.jpg", alt: "Developers networking at Dev Fest" },
    { id: 5, src: "/execs/devx.jpg", alt: "Late night sprint at Dev X" },
    { id: 6, src: "/execs/gamedev.jpg", alt: "Playtesting at Game Dev expo" },
  ],
  [
    { id: 7, src: "/execs/devx.jpg", alt: "Teams collaborating at Dev X" },
    { id: 8, src: "/execs/devfest.jpg", alt: "Workshop during Dev Fest" },
    { id: 9, src: "/execs/gamedev.jpg", alt: "Indie game showcase" },
    { id: 10, src: "/execs/devx.jpg", alt: "Mentor session at Dev X" },
    { id: 11, src: "/execs/devfest.jpg", alt: "Expo floor at Dev Fest" },
    { id: 12, src: "/execs/gamedev.jpg", alt: "Controller setup at Game Dev expo" },
  ],
  [
    { id: 13, src: "/execs/gamedev.jpg", alt: "Gameplay demo on the big screen" },
    { id: 14, src: "/execs/devfest.jpg", alt: "Panel talk at Dev Fest" },
    { id: 15, src: "/execs/devx.jpg", alt: "Team presenting at Dev X" },
    { id: 16, src: "/execs/gamedev.jpg", alt: "Students trying new games" },
    { id: 17, src: "/execs/devx.jpg", alt: "Whiteboarding AI ideas" },
    { id: 18, src: "/execs/devfest.jpg", alt: "Closing session of Dev Fest" },
  ],
]

