"use client"

import React from "react"
import { LucideCode } from "lucide-react"
import ServiceCardBase from "./service-card-base"

const WebDevelopmentCard = () => {
  return (
    <ServiceCardBase 
      title="Modern Webbutveckling"
      description="Snabba, responsiva webbapplikationer"
      icon={<LucideCode className="w-6 h-6 text-primary" />}
      shortText="Jag bygger webbapplikationer med fokus på prestanda, användarupplevelse och konvertering. Med moderna tekniker skapar jag lösningar som möter dina behov."
      fullDescription="Med djup kunskap i den senaste webbutvecklingstekniken kan jag bygga allt från avancerade webbapplikationer till e-handelslösningar och informationssidor. Jag använder Next.js, React, Tailwind CSS och andra moderna tekniker för att skapa snabba, säkra och användarvänliga webbplatser. Mitt fokus ligger alltid på prestanda, tillgänglighet och mobilanpassning för att maximera konverteringar och användarengagemang."
      servicesList={[
        "Skräddarsydda webbapplikationer",
        "E-handelslösningar med betalningsintegrationer",
        "Konverteringsoptimerade landningssidor",
        "Responsiv design för alla enheter",
        "Implementering av designsystem och komponenter"
      ]}
      projectExample={{
        title: "Lille Man & Jag",
        description: "För Lille Man & Jag utvecklade jag en modern, konverteringsoptimerad webbplats med Next.js och Tailwind CSS. Webbplatsen är byggd med fokus på användarupplevelse och konvertering, med tydliga CTA-punkter och registreringsflöden."
      }}
    />
  )
}

export default WebDevelopmentCard