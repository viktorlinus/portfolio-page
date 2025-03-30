"use client"

import React from "react"
import { LucideLineChart } from "lucide-react"
import ServiceCardBase from "./service-card-base"
import { usePathname } from "next/navigation"

const DataAnalyticsCard = () => {
  const pathname = usePathname();
  const lang = pathname?.split('/')[1] || 'sv';
  
  const content = {
    sv: {
      title: "Data & Analys",
      description: "Insikter och visualiseringar för bättre beslut",
      shortText: "Jag hjälper dig att omvandla data till insikter genom skräddarsydda dashboards och analysverktyg. Tydliga visualiseringar som förenklar beslutsfattande.",
      fullDescription: "Data är en av de mest värdefulla tillgångarna för moderna företag, men bara om den kan analyseras och presenteras på ett begripligt sätt. Jag skapar skräddarsydda dataanalyslösningar och visualiseringar som hjälper dig att få insikter från dina data. Med fokus på användarcentrerad design bygger jag interaktiva dashboards som presenterar komplex information på ett lättförståeligt sätt, vilket möjliggör bättre och snabbare beslutsfattande. Jag kan arbeta med olika datakällor, från strukturerade databaser till extern API-data, och presentera informationen i realtid.",
      servicesList: [
        "Skräddarsydda dashboards för affärsanalys och KPI-uppföljning",
        "Datavisualisering med interaktiva grafer och diagram",
        "Realtidsövervakning av viktiga mätvärden",
        "Integration med befintliga datasystem och API:er",
        "Prediktiva analyser och trendidentifiering"
      ],
      projectExample: {
        title: "Krypto Dashboard",
        description: "Krypto Dashboard är ett verktyg jag utvecklade för att övervaka och analysera de 100 största kryptovalutorna. Dashboarden visar realtidsdata, prisförändringar, marknadsvolymer och historiska prisgrafer i ett interaktivt och användarvänligt gränssnitt."
      },
      expandText: "Läs mer",
      collapseText: "Visa mindre",
      servicesListTitle: "Jag kan hjälpa dig med:",
      projectExampleTitle: "Projektexempel:"
    },
    en: {
      title: "Data & Analysis",
      description: "Insights and visualizations for better decisions",
      shortText: "I help you transform data into insights through customized dashboards and analysis tools. Clear visualizations that simplify decision-making.",
      fullDescription: "Data is one of the most valuable assets for modern companies, but only if it can be analyzed and presented in an understandable way. I create customized data analysis solutions and visualizations that help you gain insights from your data. With a focus on user-centered design, I build interactive dashboards that present complex information in an easily understandable way, enabling better and faster decision-making. I can work with various data sources, from structured databases to external API data, and present the information in real-time.",
      servicesList: [
        "Custom dashboards for business analysis and KPI tracking",
        "Data visualization with interactive graphs and charts",
        "Real-time monitoring of key metrics",
        "Integration with existing data systems and APIs",
        "Predictive analytics and trend identification"
      ],
      projectExample: {
        title: "Crypto Dashboard",
        description: "The Crypto Dashboard is a tool I developed to monitor and analyze the top 100 cryptocurrencies. The dashboard displays real-time data, price changes, market volumes, and historical price charts in an interactive and user-friendly interface."
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
      icon={<LucideLineChart className="w-6 h-6 text-primary" />}
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

export default DataAnalyticsCard