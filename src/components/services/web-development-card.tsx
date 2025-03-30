"use client"

import React, { useEffect, useState } from "react"
import { LucideCode } from "lucide-react"
import ServiceCardBase from "./service-card-base"
import { usePathname } from "next/navigation"

const WebDevelopmentCard = () => {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'sv';
  
  const content = {
    sv: {
      title: "Modern Webbutveckling",
      description: "Snabba, responsiva webbapplikationer",
      shortText: "Jag bygger webbapplikationer med fokus på prestanda, användarupplevelse och konvertering. Med moderna tekniker skapar jag lösningar som möter dina behov.",
      fullDescription: "Med djup kunskap i den senaste webbutvecklingstekniken kan jag bygga allt från avancerade webbapplikationer till e-handelslösningar och informationssidor. Jag använder Next.js, React, Tailwind CSS och andra moderna tekniker för att skapa snabba, säkra och användarvänliga webbplatser. Mitt fokus ligger alltid på prestanda, tillgänglighet och mobilanpassning för att maximera konverteringar och användarengagemang.",
      servicesList: [
        "Skräddarsydda webbapplikationer",
        "E-handelslösningar med betalningsintegrationer",
        "Konverteringsoptimerade landningssidor",
        "Responsiv design för alla enheter",
        "Implementering av designsystem och komponenter"
      ],
      projectExample: {
        title: "Lilleman & Jag",
        description: "För Lille Man & Jag utvecklade jag en modern, konverteringsoptimerad webbplats med Next.js och Tailwind CSS. Webbplatsen är byggd med fokus på användarupplevelse och konvertering, med tydliga CTA-punkter och registreringsflöden."
      },
      expandText: "Läs mer",
      collapseText: "Visa mindre",
      servicesListTitle: "Jag kan hjälpa dig med:",
      projectExampleTitle: "Projektexempel:"
    },
    en: {
      title: "Modern Web Development",
      description: "Fast, responsive web applications",
      shortText: "I build web applications with a focus on performance, user experience, and conversion. Using modern technologies, I create solutions that meet your needs.",
      fullDescription: "With deep knowledge in the latest web development technology, I can build everything from advanced web applications to e-commerce solutions and information pages. I use Next.js, React, Tailwind CSS, and other modern technologies to create fast, secure, and user-friendly websites. My focus is always on performance, accessibility, and mobile adaptation to maximize conversions and user engagement.",
      servicesList: [
        "Custom web applications",
        "E-commerce solutions with payment integrations",
        "Conversion-optimized landing pages",
        "Responsive design for all devices",
        "Implementation of design systems and components"
      ],
      projectExample: {
        title: "Lilleman & Jag",
        description: "For Lilleman & Jag, I developed a modern, conversion-optimized website with Next.js and Tailwind CSS. The website is built with a focus on user experience and conversion, with clear CTA points and registration flows."
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
      icon={<LucideCode className="w-6 h-6 text-primary" />}
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

export default WebDevelopmentCard