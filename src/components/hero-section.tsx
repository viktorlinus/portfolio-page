"use client"

import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { MovingGradient } from "@/components/ui/moving-gradient"
import { Spotlight } from "@/components/ui/spotlight"
import { GlitchText } from "@/components/ui/glitch-text"

const HeroSection = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("about-services")
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <Spotlight
      className="min-h-screen flex items-center justify-center bg-blue-50/30 dark:bg-blue-950/10"
      size={1500}
      strength={0.5}
    >
      <MovingGradient containerClassName="w-full min-h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto text-center px-4 py-24 md:px-6">
          <div className="mb-8">
            <GlitchText 
              text="Mina Projekt" 
              className="text-5xl md:text-7xl font-bold tracking-tight"
            />
          </div>
          
          <div className="max-w-3xl mx-auto mb-10">
            <AnimatedText
              text="Utforska mina senaste teknologiska lösningar och verktyg."
              className="text-xl md:text-2xl text-muted-foreground"
            />
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToServices}
            className="text-base md:text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Låt oss börja!</span>
            <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
          </Button>
        </div>
      </MovingGradient>
    </Spotlight>
  )
}

export default HeroSection
