export type Testimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  en?: {
    role?: string;
    company?: string;
    content: string;
  }
};

export const testimonials: Testimonial[] = [
  {
    id: "testimonial1",
    name: "Alicia Haglund",
    role: "Grundare",
    company: "Lilleman och Jag",
    content: "Viktor har varit fantastisk att arbeta med under utvecklingen av vår nya hemsida. Hans arbetsprocess är både snabb och effektiv, och slutresultatet överträffade alla våra förväntningar. Vad som verkligen imponerade på mig var hans förmåga att se bortom våra ursprungliga specifikationer och komma med innovativa förslag som avsevärt förbättrade användarupplevelsen. Han tänker proaktivt och kommer med idéer för funktioner och förbättringar som vi inte ens hade övervägt, men som visade sig vara precis vad vi behövde. Hans tekniska kunnande kombinerat med en genuint konsultativ approach har gjort honom till en värdefull partner för vårt företag.",
    en: {
      role: "Founder",
      company: "Lilleman och Jag",
      content: "Viktor has been amazing to work with during the development of our new website. His work process is both fast and efficient, and the end result exceeded all our expectations. What really impressed me was his ability to see beyond our original specifications and come up with innovative suggestions that significantly improved the user experience. He thinks proactively and comes up with ideas for features and improvements that we hadn't even considered, but which turned out to be exactly what we needed. His technical expertise combined with a genuinely consultative approach has made him a valuable partner for our company."
    }
  },
  {
    id: "testimonial2",
    name: "Ryan Carlson",
    role: "Tech Lead",
    company: "Innovate Solutions",
    content: "Jag blir ständigt imponerad av Viktors tekniska brillians och innovativa lösningar. Han har en unik förmåga att tänka flera steg framåt i utvecklingsprocessen, vilket resulterar i kod som är både elegant och framtidssäker. Vid flera tillfällen har han presenterat implementeringsidéer långt innan vi faktiskt behövt dem, vilket har sparat oss både tid och resurser. Det som verkligen skiljer Viktor från andra utvecklare är hans holistiska förståelse för hur tekniska lösningar passar in i det större affärsperspektivet. Hans arbete är inte bara tekniskt imponerande utan också strategiskt värdefullt för vår organisation.",
    en: {
      role: "Tech Lead",
      company: "Innovate Solutions",
      content: "I'm constantly impressed by Viktor's technical brilliance and innovative solutions. He has a unique ability to think several steps ahead in the development process, resulting in code that is both elegant and future-proof. On several occasions, he has presented implementation ideas long before we actually needed them, which has saved us both time and resources. What really sets Viktor apart from other developers is his holistic understanding of how technical solutions fit into the larger business perspective. His work is not only technically impressive but also strategically valuable for our organization."
    }
  },
  {
    id: "testimonial3",
    name: "Alpha Extract Team",
    role: "Investment Group",
    company: "Alpha Extract",
    content: "Viktor designade och utvecklade vår företagshemsida med enastående resultat. Som en investeringsgrupp fokuserad på global likviditet och kryptovalutor behövde vi en webbplats som förmedlade både seriositet och teknisk framkant - något Viktor levererade med bravur. Hans innovativa approach och tekniska skicklighet reflekterar exakt de värderingar vi själva eftersträvar i våra investeringar. Kommunikationen under hela projektet var exemplarisk, och hans förmåga att snabbt iterera baserat på vår feedback var imponerande. Vi uppskattade särskilt hans djupa förståelse för vår bransch, vilket resulterade i en webbplats som verkligen talar till vår målgrupp.",
    en: {
      role: "Investment Group",
      company: "Alpha Extract",
      content: "Viktor designed and developed our corporate website with outstanding results. As an investment group focused on global liquidity and cryptocurrencies, we needed a website that conveyed both seriousness and technical edge - something Viktor delivered with excellence. His innovative approach and technical prowess exactly reflect the values we ourselves strive for in our investments. The communication throughout the project was exemplary, and his ability to quickly iterate based on our feedback was impressive. We particularly appreciated his deep understanding of our industry, which resulted in a website that truly speaks to our target audience."
    }
  }
];

// Helper function to get testimonial data based on language
export const getTestimonialData = (testimonial: Testimonial, lang: string = 'sv') => {
  if (lang === 'en' && testimonial.en) {
    return {
      ...testimonial,
      role: testimonial.en.role || testimonial.role,
      company: testimonial.en.company || testimonial.company,
      content: testimonial.en.content
    };
  }
  return testimonial;
};