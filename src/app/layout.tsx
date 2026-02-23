import '@/app/globals.css'

import { Poppins, Josefin_Sans, Fira_Code } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-josefin",
})

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-fira-code",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>UNZA Computer Science Society</title>
        <link rel="icon" href="/logo.ico" />
        <meta name="description" content="Welcome to the University of Zambia Computer Science Society - Empowering future tech leaders" />
      </head>
      <body className={cn("min-h-screen font-sans antialiased", poppins.variable, josefinSans.variable, firaCode.variable)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}