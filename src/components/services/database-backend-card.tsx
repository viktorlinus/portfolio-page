"use client"

import React from "react"
import { LucideDatabase } from "lucide-react"
import ServiceCardBase from "./service-card-base"

const DatabaseBackendCard = () => {
  return (
    <ServiceCardBase 
      title="Databaser & Backend"
      description="Kraftfull datahantering och skalbar backend"
      icon={<LucideDatabase className="w-6 h-6 text-primary" />}
      shortText="Jag bygger robusta backend-system med effektiv datahantering som grund. Moderna verktyg som Supabase, PostgreSQL och Firebase för säkra, skalbara lösningar."
      fullDescription="En stabil och väldesignad backend är grunden för alla framgångsrika applikationer. Jag utformar och implementerar databassystem och backend-lösningar med fokus på säkerhet, skalbarhet och prestanda. Med hjälp av moderna verktyg som Supabase, PostgreSQL, Firebase och Node.js skapar jag system som hanterar data effektivt och är förberedda för att växa med din verksamhet. Från relationsdatabaser till NoSQL-lösningar och från REST API:er till GraphQL-implementationer kan jag hjälpa dig välja och bygga den arkitektur som passar dina behov bäst."
      servicesList={[
        "Databasdesign och optimering för olika användningsområden",
        "API-utveckling med REST, GraphQL eller RPC",
        "Realtidsdatahantering och synkronisering",
        "Datamigrering och integration mellan olika system",
        "Säkerhetsimplementationer och åtkomstkontroll"
      ]}
      projectExample={{
        title: "Krypto Dashboard",
        description: "För projektet Krypto Dashboard byggde jag ett backend-system med Supabase för att hantera realtidsdata och caching av kryptovalutainformation. Systemet hanterar stora datamängder effektivt och möjliggör snabb åtkomst till historiska prisgrafer."
      }}
    />
  )
}

export default DatabaseBackendCard