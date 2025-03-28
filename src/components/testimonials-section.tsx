"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { testimonials } from "@/lib/testimonials-data"
import { CardContainer, CardBody, CardItem } from "@/components/ui/3d-card"
import { AnimatedText } from "@/components/ui/animated-text"

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
            className="flex transition-transform duration-700 ease-in-out"
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
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-primary"
                    : "bg-muted hover:bg-primary/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
