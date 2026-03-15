"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence, MotionStyle } from "framer-motion";


export default function ExecutivePage() {
  const executives = [
 {
  name: "Peter K. Lubasi",
  position: "President",
  image: "/execs/peter-lubasi.jpeg", // change this to the actual image path when you add the photo
  bio: "Peter K. Lubasi serves as the President. He is passionate about technology, collaboration, and leading innovative initiatives within the team.",
  email: "peterkay862@gmail.com",
  linkedin: "https://www.linkedin.com/in/peter-k-lubasi-801103335",
  github: "https://github.com/PeterKay86"
},
   {
  name: "Kasonde Bbuku",
  position: "Vice President",
  image: "/execs/kasonde-bbuku.jpeg", // replace with the actual image path when you add the photo
  bio: "Kasonde Bbuku serves as the Vice President, contributing to leadership, collaboration, and technical development within the team.",
  email: "kasondebbuku1@gmail.com",
  linkedin: "https://www.linkedin.com/in/kasonde-bbuku-598a10345",
  github: "https://github.com/kasondebbuku-spec"
},
    {
  name: "Samuel Chibinji Mwanza",
  position: "Secretary",
  image: "/execs/samuel-chibinji-mwanza.jpeg", // replace when you add the actual photo
  bio: "Samuel Chibinji Mwanza serves as the Secretary, responsible for coordinating communication, maintaining records, and supporting the organization’s administrative activities.",
  email: "samuelchibinjimwanza@gmail.com",
  linkedin: "https://www.linkedin.com/in/samuel-chibinji-mwanza-1437772b4",
  github: "https://github.com/chibinji"
},
   {
  name: "Jimmy James",
  position: "Treasurer",
  image: "/execs/jimmy james sakala.jpeg", // replace when you add the real photo
  bio: "Jimmy James serves as the Treasurer, responsible for managing financial records, budgeting, and ensuring proper financial coordination within the team.",
  email: "jamessakala494@gmail.com",
  linkedin: "https://www.linkedin.com/in/jimmy-james-331b46385",
  github: ""
},
    {
  name: "Humphrey Chama",
  position: "Project Coordinator",
  image: "/execs/humphrey-chama.jpeg", // replace when you add the real photo
  bio: "Humphrey Chama serves as the Project Coordinator, helping organize project activities, coordinate team efforts, and ensure smooth progress across initiatives.",
  email: "humphreychama84@gmail.com",
  linkedin: "https://www.linkedin.com/in/humphrey-chama-a5b049344",
  github: "https://github.com/Am3-ch"
},
    {
  name: "Vanessa Banda",
  position: "Webmaster",
  image: "/execs/vanessa-banda.jpeg", // replace when you add the actual photo
  bio: "Vanessa Banda serves as the Webmaster, responsible for managing the website, maintaining its functionality, and ensuring a smooth digital experience for users.",
  email: "bandavanessa166@gmail.com",
  linkedin: "https://www.linkedin.com/in/vanessa-banda-962b27252",
  github: "https://github.com/vanessa200321"
},
	{
  name: "Deborah Kumwenda",
  position: "Publicity Secretary",
  image: "/execs/deborah-kumwenda.jpeg", // replace when you add the actual photo
  bio: "Deborah Kumwenda serves as the Publicity Secretary, responsible for managing public communications, promoting activities, and ensuring the organization maintains a strong public presence.",
  email: "deborahkumwenda66@gmail.com",
  linkedin: "https://www.linkedin.com/in/deborah-kumwenda-326052369",
  github: "https://github.com/deborah-codes1"
},

{
  name: "Enoch Simfukwe",
  position: "Committee Member",
  image: "/execs/enoch-simfukwe.jpeg", // replace with your real photo
  bio: "Enoch Simfukwe is a Committee Member contributing to technical initiatives, development, and collaborative innovation within the team.",
  email: "simfukweenoch@gmail.com",
  linkedin: "https://www.linkedin.com/in/enoch-simfukwe-7b230a371",
  github: "https://github.com/en236gh"
},

{
  name: "Stella Sinda",
  position: "Committee Member",
  image: "/execs/stella-sinda.jpeg", // replace with the real photo
  bio: "Stella Sinda serves as a Committee Member, contributing to team initiatives, supporting projects, and collaborating on organizational goals.",
  email: "stellasinda01@gmail.com",
  linkedin: "https://www.linkedin.com/in/stella-sinda-180132269",
  github: "https://github.com/stellasinda"
},
{
  name: "Salem Mutambo",
  position: "Committee Member",
  image: "/execs/salem-mutambo.jpg", // replace with actual photo
  bio: "Salem Mutambo serves as a Committee Member, contributing to team projects, supporting organizational activities, and collaborating on initiatives.",
  email: "mutambosalem@gmail.com",
  linkedin: "", // LinkedIn currently unavailable
  github: "https://github.com/salemmutambo"
}
,

  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % executives.length);
    }, 6000);   //change how long an image stays on the screen 10,000 = 10sec e.t.c
    return () => clearInterval(interval);
  }, [executives.length]);

const getCardStyles = (offset: number): MotionStyle => ({
  position: 'absolute' as const,
  width: isMobile ? '85%' : '24rem',
  left: isMobile ? '8%' : '35%',  // This line changes the left position based on device type
  transform: `translateX(-50%)`,
  zIndex: offset === 0 ? 1 : 0,
});

  const getMotionProps = (offset: number) => ({
    initial: {
      x: offset === 1 ? 300 : offset === -1 ? -300 : 0,
      scale: 0.95,
      opacity: 0,
    },
    animate: {
      x: isMobile ? offset * 150 : offset * 400,
      scale: offset === 0 ? 1 : 0.85,
      opacity: offset === 0 ? 1 : isMobile ? 0 : 0.5,
    },
    exit: {
      x: direction === 1 ? -300 : 300,
      scale: 0.9,
      opacity: 0,
    },
    transition: {
      x: { type: 'spring', stiffness: 300, damping: 30 },
      opacity: { duration: 0.8 }, //trnsition speed between images
    },
  });


  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-12 md:pb-24 bg-pattern bg-cover bg-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h1 className="text-4xl font-bold sm:text-6xl text-primary font-display">
            Meet Our Executive Team
          </h1>
          <p className="mx-auto max-w-3xl text-lg sm:text-xl text-foreground font-sans">
            Get to know the dedicated individuals leading the UNZA Computer
            Science Society.
          </p>
        </div>
      </section>

{/* Executive Carousel */}
<section className="py-6 md:py-24 relative">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex justify-center items-center min-h-[500px] relative overflow-hidden">
          <AnimatePresence initial={false}>
            {[-1, 0, 1].map((offset) => {
              const effectiveIndex = (index + offset + executives.length) % executives.length;
              const executive = executives[effectiveIndex];

              return (
                <motion.div
                  key={effectiveIndex}
                  style={getCardStyles(offset)}
                  {...getMotionProps(offset)}
                  className="carousel-card"
                >
                  <Card className="overflow-hidden shadow-lg">
                    <CardHeader className="p-0">
                      <div className="relative aspect-[4/3] w-full">
                        <Image
                          src={executive.image}
                          alt={executive.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6">
                      <div className="space-y-4 text-center">
                        <h2 className="text-2xl font-bold font-display">{executive.name}</h2>
                        <p className="text-primary font-sans">{executive.position}</p>
                        <p className="text-foreground text-sm md:text-base font-sans">
                          {executive.bio}
                        </p>
                        <div className="flex justify-center space-x-4">
                          <Link
                            href={`mailto:${executive.email}`}
                            className="text-muted-foreground hover:text-primary"
                            aria-label={`Email ${executive.name}`}
                          >
                            <Mail className="h-5 w-5" />
                          </Link>
                          <Link
                            href={executive.linkedin}
                            className="text-muted-foreground hover:text-primary"
                            aria-label={`LinkedIn profile of ${executive.name}`}
                          >
                            <Linkedin className="h-5 w-5" />
                          </Link>
                          <Link
                            href={executive.github}
                            className="text-muted-foreground hover:text-primary"
                            aria-label={`GitHub profile of ${executive.name}`}
                          >
                            <Github className="h-5 w-5" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>


      

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