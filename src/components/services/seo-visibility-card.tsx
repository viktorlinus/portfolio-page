"use client"

import React from "react"
import { LucideGlobe } from "lucide-react"
import ServiceCardBase from "./service-card-base"
import { usePathname } from "next/navigation"

const SEOVisibilityCard = () => {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'sv';
  
  const content = {
    sv: {
      title: "SEO & Digital Synlighet",
      description: "Optimerad närvaro för ökad trafik",
      shortText: "Jag bygger webbplatser med inbyggd SEO-optimering för att säkerställa att din digitala närvaro syns. Teknisk SEO och prestanda i fokus.",
      fullDescription: "I dagens digitala landskap räcker det inte att bara ha en snygg webbplats - den måste också vara synlig. Jag integrerar SEO-principer i hela utvecklingsprocessen, från teknisk optimering till innehållsstruktur. Med hjälp av schema markup, semantisk HTML, prestandaoptimering och mobilanpassning bygger jag webbplatser som både sökmotorer och användare älskar. Jag fokuserar särskilt på Core Web Vitals och användarupplevelsen, då dessa faktorer blir allt viktigare för rankings och konverteringar. Genom att förstå hur sökalgoritmer fungerar kan jag implementera lösningar som förbättrar din webbplats synlighet organiskt.",
      servicesList: [
        "Teknisk SEO-implementering och optimering",
        "Schema markup och strukturerad data för bättre snippets",
        "Prestandaoptimering för bättre rankningar",
        "SEO-vänlig informationsarkitektur",
        "Konverteringsoptimerad design och användarvägledning"
      ],
      projectExample: {
        title: "Lilleman & Jag",
        description: "För Lille Man & Jag implementerade jag omfattande SEO-optimeringar inklusive schema markup, semantisk HTML-struktur och metadata. Webbplatsen är byggd med fokus på snabb laddningstid och mobilvänlighet, viktiga faktorer för både användarupplevelse och sökranking."
      },
      expandText: "Läs mer",
      collapseText: "Visa mindre",
      servicesListTitle: "Jag kan hjälpa dig med:",
      projectExampleTitle: "Projektexempel:"
    },
    en: {
      title: "SEO & Digital Visibility",
      description: "Optimized presence for increased traffic",
      shortText: "I build websites with built-in SEO optimization to ensure your digital presence is visible. Technical SEO and performance in focus.",
      fullDescription: "In today's digital landscape, it's not enough to just have a nice-looking website - it also needs to be visible. I integrate SEO principles throughout the development process, from technical optimization to content structure. Using schema markup, semantic HTML, performance optimization, and mobile adaptation, I build websites that both search engines and users love. I focus particularly on Core Web Vitals and user experience, as these factors are becoming increasingly important for rankings and conversions. By understanding how search algorithms work, I can implement solutions that improve your website's visibility organically.",
      servicesList: [
        "Technical SEO implementation and optimization",
        "Schema markup and structured data for better snippets",
        "Performance optimization for better rankings",
        "SEO-friendly information architecture",
        "Conversion-optimized design and user guidance"
      ],
      projectExample: {
        title: "Lilleman & Jag",
        description: "For Lilleman & Jag, I implemented comprehensive SEO optimizations including schema markup, semantic HTML structure, and metadata. The website is built with a focus on fast loading times and mobile-friendliness, important factors for both user experience and search ranking."
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
      icon={<LucideGlobe className="w-6 h-6 text-primary" />}
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

export default SEOVisibilityCard