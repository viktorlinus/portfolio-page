"use client"

import { usePathname } from "next/navigation"
import { type Project } from "@/lib/projects-data"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
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

interface ProjectModalProps {
  project: Project
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'sv';
  
  // Translated text based on language
  const translations = {
    sv: {
      aboutProject: "Om projektet",
      features: "Funktioner",
      technologies: "Teknologier",
      visitProject: "Besök Projektet",
      close: "Stäng",
      contactMe: "Kontakta mig"
    },
    en: {
      aboutProject: "About the project",
      features: "Features",
      technologies: "Technologies",
      visitProject: "Visit Project",
      close: "Close",
      contactMe: "Contact me"
    }
  };
  
  const t = translations[lang === 'en' ? 'en' : 'sv'];
  
  // Funktion för att returnera rätt ikon baserat på projektets ikontyp
  const getProjectIcon = (iconType: string) => {
    switch (iconType) {
      case "baby":
        return <LucideBaby className="w-16 h-16 text-primary" />;
      case "chef":
        return <LucideChefHat className="w-16 h-16 text-primary" />;
      case "brain":
        return <LucideBrain className="w-16 h-16 text-primary" />;
      case "chart":
        return <LucideLineChart className="w-16 h-16 text-primary" />;
      case "phone":
        return <LucidePhone className="w-16 h-16 text-primary" />;
      case "message":
        return <LucideMessageSquare className="w-16 h-16 text-primary" />;
      default:
        return <LucideCode className="w-16 h-16 text-primary" />;
    }
  }
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
          <DialogDescription className="text-base mt-2">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4">
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">{t.aboutProject}</h3>
            <p className="text-muted-foreground">
              {project.fullDescription}
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">{t.features}</h3>
            <ul className="list-disc pl-5 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">{t.technologies}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-secondary/15 text-secondary-foreground rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.projectUrl && (
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => window.open(project.projectUrl, "_blank")}
              >
                {t.visitProject}
              </Button>
            )}
          </div>
        </div>
        
        <DialogFooter>
          <Button
            variant="outline"
            onClick={onClose}
            className="mr-2"
          >
            {t.close}
          </Button>
          <Button onClick={() => {
            onClose();
            window.open("#contact", "_self");
          }}>
            {t.contactMe}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectModal