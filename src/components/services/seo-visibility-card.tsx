"use client"

import React from "react"
import { LucideGlobe } from "lucide-react"
import ServiceCardBase from "./service-card-base"

const SEOVisibilityCard = () => {
  return (
    <ServiceCardBase 
      title="SEO & Digital Synlighet"
      description="Optimerad närvaro för ökad trafik"
      icon={<LucideGlobe className="w-6 h-6 text-primary" />}
      shortText="Jag bygger webbplatser med inbyggd SEO-optimering för att säkerställa att din digitala närvaro syns. Teknisk SEO och prestanda i fokus."
      fullDescription="I dagens digitala landskap räcker det inte att bara ha en snygg webbplats - den måste också vara synlig. Jag integrerar SEO-principer i hela utvecklingsprocessen, från teknisk optimering till innehållsstruktur. Med hjälp av schema markup, semantisk HTML, prestandaoptimering och mobilanpassning bygger jag webbplatser som både sökmotorer och användare älskar. Jag fokuserar särskilt på Core Web Vitals och användarupplevelsen, då dessa faktorer blir allt viktigare för rankings och konverteringar. Genom att förstå hur sökalgoritmer fungerar kan jag implementera lösningar som förbättrar din webbplats synlighet organiskt."
      servicesList={[
        "Teknisk SEO-implementering och optimering",
        "Schema markup och strukturerad data för bättre snippets",
        "Prestandaoptimering för bättre rankningar",
        "SEO-vänlig informationsarkitektur",
        "Konverteringsoptimerad design och användarvägledning"
      ]}
      projectExample={{
        title: "Lille Man & Jag",
        description: "För Lille Man & Jag implementerade jag omfattande SEO-optimeringar inklusive schema markup, semantisk HTML-struktur och metadata. Webbplatsen är byggd med fokus på snabb laddningstid och mobilvänlighet, viktiga faktorer för både användarupplevelse och sökranking."
      }}
    />
  )
}

export default SEOVisibilityCard