export type Project = {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  imageSrc: string;
  technologies: string[];
  features: string[];
  projectUrl: string;
  icon: string; // Legacy emoji icon (for backwards compatibility)
  iconType: string; // 'code', 'brain', 'chart', 'shopping', 'phone', 'message' etc.
  hidden?: boolean;
};

export const projects: Project[] = [
  {
    id: "lillemanochjag",
    title: "Lilleman & Jag",
    description: "Second hand-butik för barnkläder med rättvis ersättning och digital spårning.",
    fullDescription: "Lilleman & Jag är en innovativ second hand-butik för barnkläder som planerar att öppna i Borås sommaren 2025. Projektet innehåller en modern webbplats med registreringsformulär där föräldrar kan registrera sig som inlämnare av barnkläder. Webbplatsen är byggd med fokus på användarupplevelse, SEO och konvertering, tillsammans med automatiserade flöden i n8n för att hantera inlämnarregistreringar och nyhetsbrevsprenumerationer.",
    imageSrc: "/lillemanochjag.jpg",
    technologies: ["Next.js", "n8n", "SEO-optimering", "Tailwind CSS", "Automatiserade flöden"],
    features: [
      "Integrerat n8n-system för automatiserad hantering av registreringar",
      "Konverteringsoptimerad formulärdesign med vägledande UX-element",
      "Avancerad SEO-implementering med schema markup och metadata",
      "Responsiv design med Tailwind CSS för alla skärmstorlekar",
      "Integrerade webhooks för datahantering och uppföljningskommunikation"
    ],
    projectUrl: "https://lillemanochjag.se",
    icon: "👶",
    iconType: "baby",
  },
  {
    id: "matjakt",
    title: "Matjakt App",
    description: "Applikation som tar aktuella varor på rea och skapar personaliserade recept.",
    fullDescription: "Matjakt är en innovativ lösning som hjälper användare att spara pengar och minska matsvinn. Genom att analysera aktuella rabatter från just nu enbart Willys, skapar appen personaliserade receptförslag baserade på varor som är på rea just nu. Användare kan spara sina favoritrecept, ställa in kostpreferenser och lägga till ingredienserna i deras inköpslista.",
    imageSrc: "/matjakt.jpg",
    technologies: ["Next.js", "OpenAI", "n8n", "Supabase", "Tailwind CSS"],
    features: [
      "Realtidsuppdateringar av rabatter",
      "Personaliserade receptförslag",
      "Kostpreferensfilter för specialkost",
      "Spara favoritrecept",
      "Spara inköpslista med varor på rea"
    ],
    projectUrl: "https://matjakt.com",
    icon: "🍲",
    iconType: "chef",
  },
  {
    id: "ai-assistant",
    title: "Personlig AI-assistent",
    description: "AI-assistent som kommunicerar via Telegram med avancerade minnesfunktioner.",
    fullDescription: "Min personliga AI-assistent är byggd för att underlätta dagliga uppgifter genom en bekväm Telegram-integration. Assistenten kan lagra och återkalla minnen, genomföra semantiska sökningar i tidigare konversationer och utföra databasförfrågningar för att hitta relevant information. Assistenten kan även söka efter information på nätet för att hitta uppdaterad information i realtid. Projektet är byggt med n8n för automatisering och kommer att expanderas ytterligare med fler funktioner och integrationer.",
    imageSrc: "/ai-assistant.jpg",
    technologies: ["n8n", "Telegram API", "Semantisk sökning", "Databas"],
    features: [
      "Kommunikation via Telegram",
      "Persistent minneshantering",
      "Semantisk sökning i tidigare konversationer",
      "Databasförfrågningar",
      "Expanderbar plattform för framtida funktioner"
    ],
    projectUrl: "",
    icon: "🤖",
    iconType: "brain",
  },
  {
    id: "crypto-dashboard",
    title: "Krypto Dashboard",
    description: "Dashboard för att övervaka och analysera de 100 största kryptovalutorna.",
    fullDescription: "Krypto Dashboard är ett verktyg för investerare och entusiaster som vill hålla sig uppdaterade om kryptomarknaden. Dashboarden visar realtidsdata för de 100 största kryptovalutorna, inklusive prisförändringar, marknadsvolymer, och historiska prisgrafer. Användare kan skapa sina egna anpassningsbara verktyg mha arbetsbänk-verktyget för att skapa en unik vy över marknaden.",
    imageSrc: "/crypto-dashboard.jpg",
    technologies: ["Next.js", "Supabase", "Chart.js", "Krypto-API:er"],
    features: [
      "Realtidsuppdateringar av priser",
      "Historiska prisgrafer",
      "Anpassningsbara verktyg",
      "Caching av chart-data"
    ],
    projectUrl: "https://cryptoproject-dashboard.netlify.app/",
    icon: "📊",
    iconType: "chart",
  },
  {
    id: "ai-caller",
    title: "AI-baserad ordertagare",
    description: "AI-system för restauranger som tar emot beställningar via telefon.",
    fullDescription: "Detta AI-baserade system hjälper restauranger att effektivisera hanteringen av telefonbeställningar. Systemet kan svara på inkommande samtal, ta emot beställningar, ställa följdfrågor och bekräfta order med kunden. Beställningarna registreras automatiskt i restaurangens ordersystem, vilket sparar tid för personalen och minskar risken för fel. Systemet är särskilt utformat för takeaway-restauranger.",
    imageSrc: "/ai-caller.jpg",
    technologies: ["Telefoni-API", "Speech-to-Text", "Text-to-Speech", "Restaurang-CRM"],
    features: [
      "Automatisk besvarande av telefonsamtal",
      "Naturlig konversation med kunder",
      "Integration med befintliga ordersystem",
      "Hantering av specialbeställningar",
      "Orderbekräftelser via SMS"
    ],
    projectUrl: "https://ai-caller.example.com",
    icon: "📞",
    iconType: "phone",
    hidden: true
  },
  {
    id: "ai-chat-agent",
    title: "AI-chattagent för företag",
    description: "Chatbot som sorterar och kvalificerar leads samt besvarar allmänna frågor.",
    fullDescription: "AI-chattagenten är designad för att förbättra kundservice och leadgenerering på företagswebbplatser. Agenten kan svara på vanliga frågor om företagets produkter och tjänster, sorterar inkommande förfrågningar baserat på prioritet, och kvalificerar leads innan de skickas vidare till säljteamet. Genom att använda RAG (Retrieval Augmented Generation) kan chatboten ge detaljerade och korrekta svar baserat på företagets dokumentation.",
    imageSrc: "/ai-chat-agent.jpg",
    technologies: ["RAG", "Vektordatabas", "Embeddings", "API-integrationer"],
    features: [
      "Automatiserade svar på vanliga frågor",
      "Lead-kvalificering och sortering",
      "Kunskapsbas med RAG-teknologi",
      "Integration med CRM-system",
      "Flerspråkigt stöd"
    ],
    projectUrl: "https://ai-chat-agent.example.com",
    icon: "💬",
    iconType: "message",
    hidden: true
  }
];
