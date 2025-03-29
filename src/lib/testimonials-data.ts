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
    name: "Alicia Haglund",
    role: "Grundare",
    company: "Lilleman och Jag",
    content: "Viktor har varit fantastisk att arbeta med under utvecklingen av vår nya hemsida. Hans arbetsprocess är både snabb och effektiv, och slutresultatet överträffade alla våra förväntningar. Vad som verkligen imponerade på mig var hans förmåga att se bortom våra ursprungliga specifikationer och komma med innovativa förslag som avsevärt förbättrade användarupplevelsen. Han tänker proaktivt och kommer med idéer för funktioner och förbättringar som vi inte ens hade övervägt, men som visade sig vara precis vad vi behövde. Hans tekniska kunnande kombinerat med en genuint konsultativ approach har gjort honom till en värdefull partner för vårt företag.",
  },
  {
    id: "testimonial2",
    name: "Ryan Carlson",
    role: "Tech Lead",
    company: "Innovate Solutions",
    content: "Jag blir ständigt imponerad av Viktors tekniska brillians och innovativa lösningar. Han har en unik förmåga att tänka flera steg framåt i utvecklingsprocessen, vilket resulterar i kod som är både elegant och framtidssäker. Vid flera tillfällen har han presenterat implementeringsidéer långt innan vi faktiskt behövt dem, vilket har sparat oss både tid och resurser. Det som verkligen skiljer Viktor från andra utvecklare är hans holistiska förståelse för hur tekniska lösningar passar in i det större affärsperspektivet. Hans arbete är inte bara tekniskt imponerande utan också strategiskt värdefullt för vår organisation.",
  },
  {
    id: "testimonial3",
    name: "Alpha Extract Team",
    role: "Investment Group",
    company: "Alpha Extract",
    content: "Viktor designade och utvecklade vår företagshemsida med enastående resultat. Som en investeringsgrupp fokuserad på global likviditet och kryptovalutor behövde vi en webbplats som förmedlade både seriositet och teknisk framkant - något Viktor levererade med bravur. Hans innovativa approach och tekniska skicklighet reflekterar exakt de värderingar vi själva eftersträvar i våra investeringar. Kommunikationen under hela projektet var exemplarisk, och hans förmåga att snabbt iterera baserat på vår feedback var imponerande. Vi uppskattade särskilt hans djupa förståelse för vår bransch, vilket resulterade i en webbplats som verkligen talar till vår målgrupp.",
  }
];
