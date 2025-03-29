"use client"

import React from "react"
import { motion } from "framer-motion"
import { LightbulbIcon, RocketIcon, HeartIcon } from "lucide-react"
import IdeaCard from "./idea-card"
import { Button } from "@/components/ui/button"

const IdeaToReality = () => {
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
            Från Tanke Till Verklighet
          </h2>
          <p className="text-xl text-muted-foreground">
            Har du en idé som du vill se växa? Jag hjälper dig göra den till verklighet.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <IdeaCard
              title="Du har idén"
              description="Det börjar med din vision. Oavsett om det är en webbplats, en app eller en förbättring av ditt företags processer."
              Icon={LightbulbIcon}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <IdeaCard
              title="Jag bygger lösningen"
              description="Med min expertis omvandlar jag din idé till en konkret lösning som är skräddarsydd för dina behov och mål."
              Icon={RocketIcon}
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <IdeaCard
              title="Din vision förverkligas"
              description="Se din idé växa och ge faktiska resultat. Jag är med dig hela vägen, från koncept till slutprodukt."
              Icon={HeartIcon}
            />
          </motion.div>
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
            <a href="#contact">Berätta om din idé</a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default IdeaToReality
