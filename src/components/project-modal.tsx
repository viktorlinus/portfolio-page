"use client"

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
          {/* Icon Container */}
          
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Om projektet</h3>
            <p className="text-muted-foreground">
              {project.fullDescription}
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Funktioner</h3>
            <ul className="list-disc pl-5 space-y-1">
              {project.features.map((feature, index) => (
                <li key={index} className="text-muted-foreground">{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Teknologier</h3>
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
                Besök Projektet
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
            Stäng
          </Button>
          <Button onClick={() => {
            onClose();
            window.open("#contact", "_self");
          }}>
            Kontakta mig
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default ProjectModal
