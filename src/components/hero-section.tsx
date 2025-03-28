"use client"

import { Button } from "@/components/ui/button"
import { AnimatedText } from "@/components/ui/animated-text"
import { MovingGradient } from "@/components/ui/moving-gradient"
import { GlitchText } from "@/components/ui/glitch-text"
import { FlowingBackground } from "@/components/ui/flowing-background"

const HeroSection = () => {
  const scrollToIdea = () => {
    // Hitta IdeaToReality-sektionen
    const ideaSection = document.getElementById("idea-to-reality")
    if (ideaSection) {
      ideaSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-blue-50/30 dark:bg-blue-950/10"
    >
      {/* FlowingBackground tillfälligt inaktiverad
      <FlowingBackground 
        containerClassName="w-full min-h-screen flex items-center justify-center"
        intensity={1.1}
        speed={18}
        colorClassName="from-blue-400/40 via-cyan-400/30 to-blue-500/40 dark:from-blue-300/30 dark:via-cyan-300/20 dark:to-blue-400/30"
      >
      */}
      <MovingGradient containerClassName="w-full min-h-screen flex items-center justify-center">
        <div className="w-full max-w-5xl mx-auto text-center px-4 py-24 md:px-6">
          <div className="mb-8">
            <GlitchText 
              text="Jag Bygger Dina Idéer" 
              className="text-5xl md:text-7xl font-bold tracking-tight"
            />
          </div>
          
          <div className="max-w-3xl mx-auto mb-10">
            <AnimatedText
              text="Skalbara, intelligenta tekniska lösningar för ditt företag."
              className="text-xl md:text-2xl text-muted-foreground"
            />
          </div>
          
          <Button 
            size="lg" 
            onClick={scrollToIdea}
            className="text-base md:text-lg relative overflow-hidden group"
          >
            <span className="relative z-10">Utforska möjligheterna</span>
            <span className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></span>
          </Button>
        </div>
      </MovingGradient>
      {/* Closing tag for FlowingBackground disabled
      </FlowingBackground>
      */}
    </div>
  )
}

export default HeroSection
