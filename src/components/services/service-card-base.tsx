"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LucideChevronDown, LucideChevronUp } from "lucide-react"

interface ServiceCardBaseProps {
  title: string;
  description: string;
  shortText: string;
  icon: React.ReactNode;
  servicesList: string[];
  fullDescription: string;
  projectExample?: {
    title: string;
    description: string;
  };
}

const ServiceCardBase = ({
  title,
  description,
  shortText,
  icon,
  servicesList,
  fullDescription,
  projectExample
}: ServiceCardBaseProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card 
      className="h-full border bg-card hover:shadow-md transition-all hover:scale-[1.01] cursor-pointer relative"
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Pulsing indicator for mobile */}
      {!isExpanded && (
        <div className="absolute top-4 right-4 md:hidden">
          <span className="flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
          </span>
        </div>
      )}
      
      <CardHeader className="pb-2">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      
      <CardContent>
        {/* Alltid synlig kort beskrivning */}
        <p className="text-muted-foreground">
          {shortText}
        </p>
        
        {/* Expanderbart innehåll */}
        <motion.div 
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isExpanded ? "auto" : 0,
            opacity: isExpanded ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="pt-4">
            <p className="text-muted-foreground mb-4">
              {fullDescription}
            </p>
            
            <div className="mt-4">
              <p className="text-sm font-medium mb-2">Jag kan hjälpa dig med:</p>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {servicesList.map((service, index) => (
                  <li key={index}>• {service}</li>
                ))}
              </ul>
            </div>
            
            {projectExample && (
              <div className="mt-4 p-3 bg-muted/50 rounded-md">
                <h4 className="text-sm font-medium mb-2">Projektexempel: {projectExample.title}</h4>
                <p className="text-xs text-muted-foreground">
                  {projectExample.description}
                </p>
              </div>
            )}
          </div>
        </motion.div>
        
        {/* Expand/Collapse knapp */}
        <div 
          className="mt-4 flex items-center justify-center cursor-pointer hover:text-primary transition-colors"
        >
          <span className="text-sm mr-1">{isExpanded ? "Visa mindre" : "Läs mer"}</span>
          {isExpanded ? 
            <LucideChevronUp className="h-4 w-4" /> : 
            <LucideChevronDown className="h-4 w-4" />
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCardBase;