"use client"

import React from "react"
import { LucideLineChart } from "lucide-react"
import ServiceCardBase from "./service-card-base"

const DataAnalyticsCard = () => {
  return (
    <ServiceCardBase 
      title="Data & Analys"
      description="Insikter och visualiseringar för bättre beslut"
      icon={<LucideLineChart className="w-6 h-6 text-primary" />}
      shortText="Jag hjälper dig att omvandla data till insikter genom skräddarsydda dashboards och analysverktyg. Tydliga visualiseringar som förenklar beslutsfattande."
      fullDescription="Data är en av de mest värdefulla tillgångarna för moderna företag, men bara om den kan analyseras och presenteras på ett begripligt sätt. Jag skapar skräddarsydda dataanalyslösningar och visualiseringar som hjälper dig att få insikter från dina data. Med fokus på användarcentrerad design bygger jag interaktiva dashboards som presenterar komplex information på ett lättförståeligt sätt, vilket möjliggör bättre och snabbare beslutsfattande. Jag kan arbeta med olika datakällor, från strukturerade databaser till extern API-data, och presentera informationen i realtid."
      servicesList={[
        "Skräddarsydda dashboards för affärsanalys och KPI-uppföljning",
        "Datavisualisering med interaktiva grafer och diagram",
        "Realtidsövervakning av viktiga mätvärden",
        "Integration med befintliga datasystem och API:er",
        "Prediktiva analyser och trendidentifiering"
      ]}
      projectExample={{
        title: "Krypto Dashboard",
        description: "Krypto Dashboard är ett verktyg jag utvecklade för att övervaka och analysera de 100 största kryptovalutorna. Dashboarden visar realtidsdata, prisförändringar, marknadsvolymer och historiska prisgrafer i ett interaktivt och användarvänligt gränssnitt."
      }}
    />
  )
}

export default DataAnalyticsCard