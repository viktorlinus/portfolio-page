"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { type Project, getProjectData } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"
import ProjectModal from "@/components/project-modal"
import { 
  LucideCode, 
  LucideBrain, 
  LucideLineChart, 
  LucideShoppingBag, 
  LucidePhone, 
  LucideMessageSquare,
  LucideChefHat,
  LucideBaby,
  Scissors as LucideScissors
} from "lucide-react"
import { usePathname } from "next/navigation"

interface ProjectCardProps {
  project: Project
  viewProjectText?: string
  technologiesText?: string
}

const ProjectCardSimple = ({ 
  project, 
  viewProjectText = "Mer Information",
  technologiesText = "Teknologier"
}: ProjectCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'sv';
  
  // Get localized project data
  const localizedProject = getProjectData(project, lang);

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  
  // Funktion för att returnera rätt ikon baserat på projektets ikontyp
  const getProjectIcon = (iconType: string) => {
    switch (iconType) {
      case "baby":
        return <LucideBaby className="w-12 h-12 text-primary" />;
      case "chef":
        return <LucideChefHat className="w-12 h-12 text-primary" />;
      case "brain":
        return <LucideBrain className="w-12 h-12 text-primary" />;
      case "chart":
        return <LucideLineChart className="w-12 h-12 text-primary" />;
      case "phone":
        return <LucidePhone className="w-12 h-12 text-primary" />;
      case "message":
        return <LucideMessageSquare className="w-12 h-12 text-primary" />;
      default:
        return <LucideCode className="w-12 h-12 text-primary" />;
    }
  }

  return (
    <>
      <div 
        onClick={handleOpenModal} 
        className="cursor-pointer bg-card border rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all hover:scale-[1.02]"
      >
        {/* Icon Container */}
        <div className="h-36 w-full bg-primary/5 flex items-center justify-center">
          {getProjectIcon(localizedProject.iconType)}
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-bold mb-2">{localizedProject.title}</h3>
          <p className="text-muted-foreground mb-4">{localizedProject.description}</p>
          
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">{technologiesText}</h4>
            <div className="flex flex-wrap gap-2">
              {localizedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="text-xs px-2 py-1 bg-secondary/10 text-secondary-foreground rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <Button 
            onClick={(e) => {
              e.stopPropagation();
              setIsModalOpen(true);
            }}
            className="w-full"
          >
            {viewProjectText}
          </Button>
        </div>
      </div>

      <ProjectModal
        project={localizedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  )
}

export default ProjectCardSimple