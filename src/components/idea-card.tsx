"use client"

import React from "react"
import { LucideIcon } from "lucide-react"

interface IdeaCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  iconColor?: string;
}

const IdeaCard = ({
  title,
  description,
  Icon,
  iconColor = "text-primary"
}: IdeaCardProps) => {
  return (
    <div className="group border rounded-lg bg-card/50 p-6 shadow-sm transition-all duration-300 hover:shadow-lg hover:scale-105">
      <div className="flex flex-col items-center text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
          <Icon className={`h-8 w-8 ${iconColor}`} />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">
          {description}
        </p>
      </div>
    </div>
  )
}

export default IdeaCard
