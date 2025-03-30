"use client"

import React from "react"
import { LucideDatabase } from "lucide-react"
import ServiceCardBase from "./service-card-base"
import { usePathname } from "next/navigation"

const DatabaseBackendCard = () => {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'sv';
  
  const content = {
    sv: {
      title: "Databaser & Backend",
      description: "Kraftfull datahantering och skalbar backend",
      shortText: "Jag bygger robusta backend-system med effektiv datahantering som grund. Moderna verktyg som Supabase, PostgreSQL och Firebase för säkra, skalbara lösningar.",
      fullDescription: "En stabil och väldesignad backend är grunden för alla framgångsrika applikationer. Jag utformar och implementerar databassystem och backend-lösningar med fokus på säkerhet, skalbarhet och prestanda. Med hjälp av moderna verktyg som Supabase, PostgreSQL, Firebase och Node.js skapar jag system som hanterar data effektivt och är förberedda för att växa med din verksamhet. Från relationsdatabaser till NoSQL-lösningar och från REST API:er till GraphQL-implementationer kan jag hjälpa dig välja och bygga den arkitektur som passar dina behov bäst.",
      servicesList: [
        "Databasdesign och optimering för olika användningsområden",
        "API-utveckling med REST, GraphQL eller RPC",
        "Realtidsdatahantering och synkronisering",
        "Datamigrering och integration mellan olika system",
        "Säkerhetsimplementationer och åtkomstkontroll"
      ],
      projectExample: {
        title: "Krypto Dashboard",
        description: "För projektet Krypto Dashboard byggde jag ett backend-system med Supabase för att hantera realtidsdata och caching av kryptovalutainformation. Systemet hanterar stora datamängder effektivt och möjliggör snabb åtkomst till historiska prisgrafer."
      },
      expandText: "Läs mer",
      collapseText: "Visa mindre",
      servicesListTitle: "Jag kan hjälpa dig med:",
      projectExampleTitle: "Projektexempel:"
    },
    en: {
      title: "Databases & Backend",
      description: "Powerful data management and scalable backend",
      shortText: "I build robust backend systems with efficient data management as a foundation. Modern tools like Supabase, PostgreSQL, and Firebase for secure, scalable solutions.",
      fullDescription: "A stable and well-designed backend is the foundation for all successful applications. I design and implement database systems and backend solutions with a focus on security, scalability, and performance. Using modern tools like Supabase, PostgreSQL, Firebase, and Node.js, I create systems that handle data efficiently and are prepared to grow with your business. From relational databases to NoSQL solutions and from REST APIs to GraphQL implementations, I can help you choose and build the architecture that best suits your needs.",
      servicesList: [
        "Database design and optimization for various use cases",
        "API development with REST, GraphQL, or RPC",
        "Real-time data handling and synchronization",
        "Data migration and integration between different systems",
        "Security implementations and access control"
      ],
      projectExample: {
        title: "Crypto Dashboard",
        description: "For the Crypto Dashboard project, I built a backend system with Supabase to handle real-time data and caching of cryptocurrency information. The system efficiently handles large amounts of data and enables quick access to historical price charts."
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
      icon={<LucideDatabase className="w-6 h-6 text-primary" />}
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

export default DatabaseBackendCard