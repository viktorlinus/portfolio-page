"use client"

import { motion } from "framer-motion"
import { projects } from "@/lib/projects-data"
import ProjectCardSimple from "@/components/project-card-simple"

interface ProjectGridProps {
  title?: string;
  subtitle?: string;
  viewProject?: string;
  technologiesText?: string;
}

const ProjectGrid = ({
  title = "Mina Projekt",
  subtitle = "Här är ett urval av teknologiska lösningar och verktyg jag har utvecklat.",
  viewProject = "Visa projekt",
  technologiesText = "Teknologier"
}: ProjectGridProps) => {
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
    <section id="projects" className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects
            .filter(project => !project.hidden)
            .map((project) => (
              <motion.div key={project.id} variants={item}>
                <ProjectCardSimple 
                  project={project} 
                  viewProjectText={viewProject} 
                  technologiesText={technologiesText}
                />
              </motion.div>
            ))}
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectGrid