"use client"

import React from "react"
import { LucideBrain } from "lucide-react"
import ServiceCardBase from "./service-card-base"
import { usePathname } from "next/navigation"

const AIAutomationCard = () => {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'sv';
  
  const content = {
    sv: {
      title: "AI & Automatisering",
      description: "Intelligenta lösningar som sparar tid",
      shortText: "Jag integrerar AI och automatisering i praktiska lösningar som effektiviserar dina processer. Från chattbottar och virtuella assistenter till automatiserad databehandling.",
      fullDescription: "Genom att integrera AI och automatisering i din verksamhet kan du frigöra tid och resurser för att fokusera på kärnverksamheten. Jag arbetar med olika AI-verktyg och API:er som GPT, Claude, och egenutvecklade lösningar för att skapa intelligenta system som automatiserar repetitiva uppgifter, hanterar kundkommunikation, analyserar data, och mer.",
      servicesList: [
        "Integrationer med AI-tjänster (GPT, Claude, etc.)",
        "Anpassade chattbottar och virtuella assistenter",
        "Automatiserad bearbetning av data och dokument",
        "Intelligenta rekommendationssystem",
        "Prediktiv analys för affärsbeslut"
      ],
      projectExample: {
        title: "Personlig AI-assistent",
        description: "Utvecklade en Telegram-baserad AI-assistent som hjälper användare med kalenderhantering, påminnelser, och informationssökning. Assistenten använder avancerad NLP för att förstå användarens intentioner och leverera relevanta svar och funktioner."
      },
      expandText: "Läs mer",
      collapseText: "Visa mindre",
      servicesListTitle: "Jag kan hjälpa dig med:",
      projectExampleTitle: "Projektexempel:"
    },
    en: {
      title: "AI & Automation",
      description: "Intelligent solutions that save time",
      shortText: "I integrate AI and automation into practical solutions that streamline your processes. From chatbots and virtual assistants to automated data processing.",
      fullDescription: "By integrating AI and automation into your business, you can free up time and resources to focus on core activities. I work with various AI tools and APIs such as GPT, Claude, and custom-developed solutions to create intelligent systems that automate repetitive tasks, manage customer communication, analyze data, and more.",
      servicesList: [
        "Integrations with AI services (GPT, Claude, etc.)",
        "Custom chatbots and virtual assistants",
        "Automated processing of data and documents",
        "Intelligent recommendation systems",
        "Predictive analysis for business decisions"
      ],
      projectExample: {
        title: "Personal AI Assistant",
        description: "Developed a Telegram-based AI assistant that helps users with calendar management, reminders, and information retrieval. The assistant uses advanced NLP to understand user intentions and deliver relevant responses and functions."
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
      icon={<LucideBrain className="w-6 h-6 text-primary" />}
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

export default AIAutomationCard