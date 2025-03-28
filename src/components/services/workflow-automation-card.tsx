"use client"

import React from "react"
import { LucideRocket } from "lucide-react"
import ServiceCardBase from "./service-card-base"

const WorkflowAutomationCard = () => {
  return (
    <ServiceCardBase 
      title="Automatiska Flöden"
      description="Effektivisering genom smart automation"
      icon={<LucideRocket className="w-6 h-6 text-primary" />}
      shortText="Med verktyg som n8n och kraftfulla API-integrationer bygger jag automatiserade flöden som frigör tid och minskar fel i dina affärsprocesser."
      fullDescription="Automatisering av arbetsflöden är ett kraftfullt sätt att effektivisera verksamheten och minimera manuella fel. Jag specialiserar mig på att bygga smarta automatiseringar med n8n och andra integrationsverktyg som kopplar ihop dina system så att de arbetar sömlöst tillsammans. Från att automatisera dataöverföring mellan system till att skapa avancerade trigger-baserade processer kan jag hjälpa dig att identifiera och implementera de automatiseringsmöjligheter som ger störst nytta för din verksamhet."
      servicesList={[
        "Skräddarsydda n8n-flöden för ditt företag",
        "API-integrationer mellan olika system och plattformar",
        "Automatisering av marknadsföring och försäljningsprocesser",
        "Webhooks och händelsestyrda processer",
        "Dataflöden mellan CRM, e-post och affärssystem"
      ]}
      projectExample={{
        title: "Lille Man & Jag",
        description: "För Lille Man & Jag implementerade jag automatiserade flöden i n8n för att hantera inlämnarregistreringar och nyhetsbrevsprenumerationer. Systemet hanterar automatiskt all datainsamling, bekräftelser och uppföljningskommunikation."
      }}
    />
  )
}

export default WorkflowAutomationCard