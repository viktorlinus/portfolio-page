"use client"

import React from "react"
import { motion } from "framer-motion"
import { LightbulbIcon, RocketIcon, HeartIcon } from "lucide-react"
import IdeaCard from "./idea-card"
import { Button } from "@/components/ui/button"

interface IdeaStep {
  title: string;
  description: string;
}

interface IdeaToRealityProps {
  title?: string;
  subtitle?: string;
  steps?: IdeaStep[];
  ctaText?: string;
}

const IdeaToReality = ({
  title = "Från Tanke Till Verklighet",
  subtitle = "Har du en idé som du vill se växa? Jag hjälper dig göra den till verklighet.",
  steps = [
    {
      title: "Du har idén",
      description: "Det börjar med din vision. Oavsett om det är en webbplats, en app eller en förbättring av ditt företags processer."
    },
    {
      title: "Jag bygger lösningen",
      description: "Med min expertis omvandlar jag din idé till en konkret lösning som är skräddarsydd för dina behov och mål."
    },
    {
      title: "Din vision förverkligas",
      description: "Se din idé växa och ge faktiska resultat. Jag är med dig hela vägen, från koncept till slutprodukt."
    }
  ],
  ctaText = "Berätta om din idé"
}: IdeaToRealityProps) => {
  const icons = [LightbulbIcon, RocketIcon, HeartIcon];

  return (
    <section id="idea-to-reality" className="py-16 bg-gradient-to-b from-background to-background/90">
      <div className="container px-4 md:px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-muted-foreground">
            {subtitle}
          </p>
        </motion.div>
        
        <div className="hidden md:flex justify-between items-center gap-2 max-w-5xl mx-auto">
          {/* Desktop Layout */}
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            
            return (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                  className="w-full max-w-sm flex-1"
                >
                  <IdeaCard
                    title={step.title}
                    description={step.description}
                    Icon={icons[index % icons.length]}
                  />
                </motion.div>
                
                {!isLast && (
                  <motion.div 
                    className="hidden md:flex items-center justify-center animate-pulse"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) + 0.2 }}
                  >
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M39.0607 13.0607C39.6464 12.4749 39.6464 11.5251 39.0607 10.9393L29.5147 1.3934C28.9289 0.807611 27.9792 0.807611 27.3934 1.3934C26.8076 1.97919 26.8076 2.92893 27.3934 3.51472L35.8787 12L27.3934 20.4853C26.8076 21.0711 26.8076 22.0208 27.3934 22.6066C27.9792 23.1924 28.9289 23.1924 29.5147 22.6066L39.0607 13.0607ZM0 13.5H38V10.5H0V13.5Z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-4 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;
            const Icon = icons[index % icons.length];
            
            return (
              <React.Fragment key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <IdeaCard
                    title={step.title}
                    description={step.description}
                    Icon={Icon}
                  />
                </motion.div>
                
                {!isLast && (
                  <motion.div 
                    className="flex justify-center py-2 animate-pulse"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * (index + 1) + 0.2 }}
                  >
                    <svg width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                      <path d="M13.0607 29.0607C12.4749 29.6464 11.5251 29.6464 10.9393 29.0607L1.3934 19.5147C0.807611 18.9289 0.807611 17.9792 1.3934 17.3934C1.97919 16.8076 2.92893 16.8076 3.51472 17.3934L12 25.8787L20.4853 17.3934C21.0711 16.8076 22.0208 16.8076 22.6066 17.3934C23.1924 17.9792 23.1924 18.9289 22.6066 19.5147L13.0607 29.0607ZM13.5 0V28H10.5V0H13.5Z" fill="currentColor"/>
                    </svg>
                  </motion.div>
                )}
              </React.Fragment>
            );
          })}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button
            size="xxl"
            asChild
            className="shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 mt-4 border-primary"
          >
            <a href="#contact">{ctaText}</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default IdeaToReality