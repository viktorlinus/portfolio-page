"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { testimonials } from "@/lib/testimonials-data"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { AnimatedText } from "@/components/ui/animated-text"

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  // Funktion för att hantera manuell navigation
  const handleManualNavigation = (index: number) => {
    setActiveIndex(index)
    setAutoplay(false) // Stäng av automatisk scrollning när användaren navigerar manuellt
  }

  useEffect(() => {
    // Endast skapa interval om autoplay är aktiverat
    if (autoplay) {
      const interval = setInterval(() => {
        setActiveIndex((current) => (current + 1) % testimonials.length)
      }, 8000)
      return () => clearInterval(interval)
    }
  }, [autoplay])

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <AnimatedText
            text="Vad kunder säger"
            className="text-3xl md:text-4xl font-bold mb-4"
          />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Läs vad mina kunder och samarbetspartners har att säga om mina projekt.
          </p>
        </div>

        <div className="relative overflow-hidden max-w-3xl mx-auto">
          <div 
            className="flex transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="w-full flex-shrink-0 px-4"
              >
                <CardContainer disableEffect={true}>
                  <CardBody className="bg-card border rounded-xl p-8 shadow-md">
                    <div className="mb-4">
                      <CardItem translateZ={20}>
                        <div>
                          <h3 className="font-bold text-xl">{testimonial.name}</h3>
                          <p className="text-muted-foreground">
                            {testimonial.role}, {testimonial.company}
                          </p>
                        </div>
                      </CardItem>
                    </div>
                    
                    <CardItem translateZ={40}>
                      <blockquote className="text-lg italic py-6">
                        "{testimonial.content}"
                      </blockquote>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </div>
            ))}
          </div>
          
          {/* Navigation dots and controls */}
          <div className="flex justify-center items-center mt-8 space-x-3">
            {/* Previous button */}
            <button
              onClick={() => handleManualNavigation(
                activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
              )}
              className="p-2 rounded-full bg-muted hover:bg-primary/20 text-foreground transition-colors"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            
            {/* Dots navigation */}
            <div className="flex space-x-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleManualNavigation(index)}
                  className={`w-4 h-4 rounded-full transition-colors border ${
                    activeIndex === index
                      ? "bg-foreground border-foreground"
                      : "bg-transparent hover:bg-foreground/20 border-foreground/40"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            {/* Next button */}
            <button
              onClick={() => handleManualNavigation(
                (activeIndex + 1) % testimonials.length
              )}
              className="p-2 rounded-full bg-muted hover:bg-primary/20 text-foreground transition-colors"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
