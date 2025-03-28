"use client"

import React from "react"
import { LucideBrain } from "lucide-react"
import ServiceCardBase from "./service-card-base"

const AIAutomationCard = () => {
  return (
    <ServiceCardBase 
      title="AI & Automatisering"
      description="Intelligenta lösningar som sparar tid"
      icon={<LucideBrain className="w-6 h-6 text-primary" />}
      shortText="Jag integrerar AI och automatisering i praktiska lösningar som effektiviserar dina processer. Från chattbottar och virtuella assistenter till automatiserad databehandling."
      fullDescription="Med modern AI-teknik och automatiseringsverktyg skapar jag lösningar som är skräddarsydda för ditt företags specifika behov. Jag fokuserar på praktiska implementeringar som ger direkt affärsnytta och effektiviserar arbetsflöden. Genom att integrera språkmodeller, semantisk sökning och andra AI-verktyg kan jag hjälpa ditt företag att spara tid, förbättra kundservice och automatisera repetitiva uppgifter."
      servicesList={[
        "AI-assistenter för kundservice och internal support",
        "Automatisering av återkommande uppgifter",
        "Integration mellan olika AI-tjänster och dina system",
        "Specialanpassade AI-lösningar för ditt företag",
        "Semantisk sökning och content retrieval"
      ]}
      projectExample={{
        title: "Personlig AI-assistent",
        description: "Jag utvecklade en personlig AI-assistent integrerad med Telegram som kan lagra och återkalla minnen, genomföra semantiska sökningar i tidigare konversationer och utföra databasförfrågningar för att hitta relevant information i realtid."
      }}
    />
  )
}

export default AIAutomationCard