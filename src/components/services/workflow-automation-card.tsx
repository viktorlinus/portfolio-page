"use client"

import React from "react"
import { LucideRocket } from "lucide-react"
import ServiceCardBase from "./service-card-base"
import { usePathname } from "next/navigation"

const WorkflowAutomationCard = () => {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'sv';
  
  const content = {
    sv: {
      title: "Automatiska Flöden",
      description: "Effektivisering genom smart automation",
      shortText: "Med verktyg som n8n och kraftfulla API-integrationer bygger jag automatiserade flöden som frigör tid och minskar fel i dina affärsprocesser.",
      fullDescription: "Automatisering av arbetsflöden är ett kraftfullt sätt att effektivisera verksamheten och minimera manuella fel. Jag specialiserar mig på att bygga smarta automatiseringar med n8n och andra integrationsverktyg som kopplar ihop dina system så att de arbetar sömlöst tillsammans. Från att automatisera dataöverföring mellan system till att skapa avancerade trigger-baserade processer kan jag hjälpa dig att identifiera och implementera de automatiseringsmöjligheter som ger störst nytta för din verksamhet.",
      servicesList: [
        "Skräddarsydda n8n-flöden för ditt företag",
        "API-integrationer mellan olika system och plattformar",
        "Automatisering av marknadsföring och försäljningsprocesser",
        "Webhooks och händelsestyrda processer",
        "Dataflöden mellan CRM, e-post och affärssystem"
      ],
      projectExample: {
        title: "Lilleman & Jag",
        description: "För Lille Man & Jag implementerade jag automatiserade flöden i n8n för att hantera inlämnarregistreringar och nyhetsbrevsprenumerationer. Systemet hanterar automatiskt all datainsamling, bekräftelser och uppföljningskommunikation."
      },
      expandText: "Läs mer",
      collapseText: "Visa mindre",
      servicesListTitle: "Jag kan hjälpa dig med:",
      projectExampleTitle: "Projektexempel:"
    },
    en: {
      title: "Workflow Automation",
      description: "Efficiency through smart automation",
      shortText: "With tools like n8n and powerful API integrations, I build automated workflows that save time and reduce errors in your business processes.",
      fullDescription: "Workflow automation is a powerful way to streamline operations and minimize manual errors. I specialize in building smart automations with n8n and other integration tools that connect your systems so they work seamlessly together. From automating data transfers between systems to creating advanced trigger-based processes, I can help you identify and implement the automation opportunities that provide the greatest benefit for your business.",
      servicesList: [
        "Custom n8n workflows for your business",
        "API integrations between different systems and platforms",
        "Automation of marketing and sales processes",
        "Webhooks and event-driven processes",
        "Data flows between CRM, email, and business systems"
      ],
      projectExample: {
        title: "Lilleman & Jag",
        description: "For Lilleman & Jag, I implemented automated workflows in n8n to handle consignor registrations and newsletter subscriptions. The system automatically manages all data collection, confirmations, and follow-up communication."
      },
      expandText: "Read more",
      collapseText: "Show less",
      servicesListTitle: "I can help you with:",
      projectExampleTitle: "Project example:"
    }
  };

  return (
    <ServiceCardBase 
      title={content[lang === "en" ? "en" : "sv"].title}
      description={content[lang === "en" ? "en" : "sv"].description}
      icon={<LucideRocket className="w-6 h-6 text-primary" />}
      shortText={content[lang === "en" ? "en" : "sv"].shortText}
      fullDescription={content[lang === "en" ? "en" : "sv"].fullDescription}
      servicesList={content[lang === "en" ? "en" : "sv"].servicesList}
      projectExample={content[lang === "en" ? "en" : "sv"].projectExample}
      expandText={content[lang === "en" ? "en" : "sv"].expandText}
      collapseText={content[lang === "en" ? "en" : "sv"].collapseText}
      servicesListTitle={content[lang === "en" ? "en" : "sv"].servicesListTitle}
      projectExampleTitle={content[lang === "en" ? "en" : "sv"].projectExampleTitle}
    />
  )
}

export default WorkflowAutomationCard