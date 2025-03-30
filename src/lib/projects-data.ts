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
  // Translations
  en?: {
    title: string;
    description: string;
    fullDescription: string;
    features: string[];
  }
};

export const projects: Project[] = [
  {
    id: "lillemanochjag",
    title: "Lilleman & Jag",
    description: "Second hand-butik för barnkläder med rättvis ersättning och digital spårning.",
    fullDescription: "Lilleman & Jag är en innovativ second hand-butik för barnkläder som planerar att öppna i Borås sommaren 2025. Projektet innehåller en modern webbplats med registreringsformulär där föräldrar kan registrera sig som inlämnare av barnkläder. Webbplatsen är byggd med fokus på användarupplevelse, SEO och konvertering, tillsammans med automatiserade flöden i n8n för att hantera inlämnarregistreringar och nyhetsbrevsprenumerationer.",
    imageSrc: "/lillemanochjag.jpg",
    technologies: ["Next.js", "n8n", "SEO-optimering", "Automatiserade flöden"],
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
    en: {
      title: "Lilleman & Jag",
      description: "Second-hand shop for children's clothing with fair compensation and digital tracking.",
      fullDescription: "Lilleman & Jag is an innovative second-hand shop for children's clothing planning to open in Borås in summer 2025. The project includes a modern website with registration forms where parents can register as consignors of children's clothing. The website is built with a focus on user experience, SEO, and conversion, along with automated workflows in n8n to handle consignor registrations and newsletter subscriptions.",
      features: [
        "Integrated n8n system for automated registration management",
        "Conversion-optimized form design with guiding UX elements",
        "Advanced SEO implementation with schema markup and metadata",
        "Responsive design with Tailwind CSS for all screen sizes",
        "Integrated webhooks for data handling and follow-up communication"
      ]
    }
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
    en: {
      title: "Matjakt App",
      description: "Application that takes current items on sale and creates personalized recipes.",
      fullDescription: "Matjakt is an innovative solution that helps users save money and reduce food waste. By analyzing current discounts from currently only Willys, the app creates personalized recipe suggestions based on items that are on sale right now. Users can save their favorite recipes, set dietary preferences, and add ingredients to their shopping list.",
      features: [
        "Real-time discount updates",
        "Personalized recipe suggestions",
        "Dietary preference filters for special diets",
        "Save favorite recipes",
        "Save shopping list with items on sale"
      ]
    }
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
    en: {
      title: "Personal AI Assistant",
      description: "AI assistant that communicates via Telegram with advanced memory functions.",
      fullDescription: "My personal AI assistant is built to facilitate daily tasks through a convenient Telegram integration. The assistant can store and recall memories, perform semantic searches in previous conversations, and execute database queries to find relevant information. The assistant can also search for information on the web to find updated information in real-time. The project is built with n8n for automation and will be expanded further with more features and integrations.",
      features: [
        "Communication via Telegram",
        "Persistent memory management",
        "Semantic search in previous conversations",
        "Database queries",
        "Expandable platform for future features"
      ]
    }
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
    en: {
      title: "Crypto Dashboard",
      description: "Dashboard for monitoring and analyzing the top 100 cryptocurrencies.",
      fullDescription: "Crypto Dashboard is a tool for investors and enthusiasts who want to stay updated on the crypto market. The dashboard displays real-time data for the top 100 cryptocurrencies, including price changes, market volumes, and historical price charts. Users can create their own customizable tools using the workbench tool to create a unique view of the market.",
      features: [
        "Real-time price updates",
        "Historical price charts",
        "Customizable tools",
        "Caching of chart data"
      ]
    }
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
    hidden: true,
    en: {
      title: "AI-based Order Taker",
      description: "AI system for restaurants that receives orders via phone.",
      fullDescription: "This AI-based system helps restaurants streamline the handling of phone orders. The system can answer incoming calls, receive orders, ask follow-up questions, and confirm orders with the customer. The orders are automatically registered in the restaurant's order system, which saves time for the staff and reduces the risk of errors. The system is specifically designed for takeaway restaurants.",
      features: [
        "Automatic answering of phone calls",
        "Natural conversation with customers",
        "Integration with existing order systems",
        "Handling of special orders",
        "Order confirmations via SMS"
      ]
    }
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
    hidden: true,
    en: {
      title: "AI Chat Agent for Business",
      description: "Chatbot that sorts and qualifies leads and answers general questions.",
      fullDescription: "The AI chat agent is designed to improve customer service and lead generation on business websites. The agent can answer common questions about the company's products and services, sort incoming inquiries based on priority, and qualify leads before forwarding them to the sales team. By using RAG (Retrieval Augmented Generation), the chatbot can provide detailed and accurate answers based on the company's documentation.",
      features: [
        "Automated responses to common questions",
        "Lead qualification and sorting",
        "Knowledge base with RAG technology",
        "Integration with CRM systems",
        "Multilingual support"
      ]
    }
  }
];

// Helper function to get project data based on language
export const getProjectData = (project: Project, lang: string = 'sv') => {
  if (lang === 'en' && project.en) {
    return {
      ...project,
      title: project.en.title,
      description: project.en.description,
      fullDescription: project.en.fullDescription,
      features: project.en.features
    };
  }
  return project;
};