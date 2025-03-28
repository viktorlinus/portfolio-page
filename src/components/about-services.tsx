"use client"

import React from "react"
import { motion } from "framer-motion"
import WebDevelopmentCard from "@/components/services/web-development-card"
import AIAutomationCard from "@/components/services/ai-automation-card"
import WorkflowAutomationCard from "@/components/services/workflow-automation-card"
import DatabaseBackendCard from "@/components/services/database-backend-card"
import DataAnalyticsCard from "@/components/services/data-analytics-card"
import SEOVisibilityCard from "@/components/services/seo-visibility-card"

const AboutServices = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  }

  return (
    <section id="about-services" className="py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Jag Bygger Dina Idéer
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Med en bakgrund i modern webbutveckling, AI-integration och automatisering hjälper jag dig 
            att transformera dina idéer till skalbara, intelligenta lösningar. Mitt fokus ligger på att 
            kombinera teknisk innovation med praktisk användbarhet.
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div variants={item}>
            <WebDevelopmentCard />
          </motion.div>
          
          <motion.div variants={item}>
            <AIAutomationCard />
          </motion.div>
          
          <motion.div variants={item}>
            <WorkflowAutomationCard />
          </motion.div>
          
          <motion.div variants={item}>
            <DatabaseBackendCard />
          </motion.div>
          
          <motion.div variants={item}>
            <DataAnalyticsCard />
          </motion.div>
          
          <motion.div variants={item}>
            <SEOVisibilityCard />
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-medium mb-6">
            Har du en idé eller ett problem som behöver en teknisk lösning?
          </p>
          <a 
            href="#contact" 
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Kontakta mig
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutServices