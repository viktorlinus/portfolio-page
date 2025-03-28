export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    name: "Anna Lindberg",
    role: "Projektledare",
    company: "TechSolutions AB",
    content: "Viktors Matjakt-app har revolutionerat hur vi planerar våra måltider i hemmet. Vi sparar inte bara pengar på mat, utan har också minskat matsvinnet avsevärt. Användargränssnittet är intuitivt och receptförslagen är alltid relevanta och anpassade efter våra preferenser. Det som verkligen imponerar är hur appen automatiskt anpassar sig till aktuella erbjudanden från olika butiker, vilket gör veckohandlingen både enklare och billigare. Jag rekommenderar verkligen detta verktyg till alla som vill optimera sitt matkonto.",
  },
  {
    id: "testimonial2",
    name: "Erik Johansson",
    role: "Restaurangägare",
    company: "Pizzeria Milano",
    content: "AI-baserade ordertagaren har förbättrat vår orderhantering enormt. Vi missar färre beställningar och våra kunder är nöjda med den snabba, effektiva servicen. Systemet klarar av att hantera komplexa beställningar, specialförfrågningar och till och med förstår dialekter som tidigare varit problematiska för vår personal. Vi har sett en ökning på 30% i takeaway-försäljningen sedan implementeringen, samt minskat stress för vår personal under rusningstider. Viktors support och kontinuerliga förbättringar av systemet har varit exemplariska.",
  },
  {
    id: "testimonial3",
    name: "Maria Svensson",
    role: "Marknadsföringschef",
    company: "Digital Growth",
    content: "Vi implementerade AI-chattagenten på vår webbplats och såg omedelbart resultat. Leadgenerering ökade med 35% och kunderna får svar på sina frågor 24/7. Chatboten lyckas fånga upp och kvalificera leads på ett sätt som verkligen imponerar - den förstår komplexa frågor och kan leverera djupa, informativa svar om våra tjänster. Det som särskilt utmärker lösningen är hur den sömlöst kan eskalera viktiga förfrågningar till vårt säljteam, med all relevant kontext redan dokumenterad. Integrationen med vår CRM var enkel och Viktor var tillgänglig under hela processen för att säkerställa att allt fungerade optimalt.",
  },
  {
    id: "testimonial4",
    name: "Johan Bergström",
    role: "Investerare",
    company: "CryptoVentures",
    content: "Krypto Dashboarden ger mig exakt den översikt jag behöver för att fatta välgrundade investeringsbeslut. Realtidsdata, användarvänligt gränssnitt och anpassningsbara notifieringar - allt jag behöver. Jag har provat många olika verktyg för kryptoanalys, men detta är det första som kombinerar djup teknisk analys med en användarvänlig design. De visuella representationerna av marknadsdata är särskilt värdefulla, och möjligheten att skapa anpassade bevakningslistor med automatiska varningar har hjälpt mig att fånga flera lönsamma investeringsmöjligheter. Ett enastående verktyg som konstant utvecklas med nya funktioner.",
  },
  {
    id: "testimonial5",
    name: "Lena Karlsson",
    role: "Produktchef",
    company: "InnovaTech",
    content: "Den personliga AI-assistenten har ökat min produktivitet markant. Att kunna söka i tidigare konversationer och få snabba svar via Telegram är ovärderligt i mitt dagliga arbete. Assistenten har en imponerande förmåga att förstå kontexten i mina frågor och leverera relevant information omedelbart. Speciellt användbar är funktionen som låter mig integrera assistenten med våra interna databaser, vilket gör att den kan ge mig uppdaterad projektstatistik och rapporter direkt i Telegram. Detta har sparat mig otaliga timmar av manuell datainsamling och rapportgenerering. Viktors löpande support och assistentens ständiga inlärning har gjort detta till ett oumbärligt verktyg.",
  }
];
