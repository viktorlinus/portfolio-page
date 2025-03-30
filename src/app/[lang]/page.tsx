import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import IdeaToReality from "@/components/idea-to-reality"
import AboutServices from "@/components/about-services"
import ProjectGrid from "@/components/project-grid"
import TestimonialsSection from "@/components/testimonials-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"
import { getDictionary } from "@/lib/dictionary"

export default async function Home({ 
  params 
}: { 
  params: { lang: string } 
}) {
  const dict = await getDictionary(params.lang)
  
  return (
    <main className="min-h-screen">
      <Navbar lang={params.lang} dictionary={dict.nav} />
      <HeroSection 
        title={dict.hero.title}
        subtitle={dict.hero.subtitle}
        cta={dict.hero.cta}
        scrollText={dict.hero.scrollText}
      />
      <IdeaToReality 
        title={dict.process.title}
        subtitle={dict.process.subtitle}
        steps={dict.process.steps}
        ctaText={dict.process.ctaText}
      />
      <AboutServices 
        title={dict.services.title}
        subtitle={dict.services.subtitle}
        services={dict.services.items}
        question={dict.services.question}
        ctaText={dict.services.ctaText}
      />
      <ProjectGrid 
        title={dict.projects.title}
        subtitle={dict.projects.subtitle}
        viewProject={dict.projects.viewProject}
        technologiesText={dict.projects.technologies}
      />
      <TestimonialsSection 
        title={dict.testimonials.title}
        subtitle={dict.testimonials.subtitle}
      />
      <ContactForm 
        title={dict.contact.title}
        subtitle={dict.contact.subtitle}
        namePlaceholder={dict.contact.name}
        emailPlaceholder={dict.contact.email}
        subjectPlaceholder={dict.contact.subjectPlaceholder}
        messagePlaceholder={dict.contact.messagePlaceholder}
        submitText={dict.contact.send}
        sendingText={dict.contact.sending}
        successMessage={dict.contact.success}
        errorMessage={dict.contact.error}
      />
      <Footer 
        aboutTitle={dict.footer.aboutTitle}
        aboutText={dict.footer.aboutText}
        contactTitle={dict.footer.contactTitle}
        location={dict.footer.location}
        socialTitle={dict.footer.socialTitle}
        copyright={dict.footer.copyright}
      />
      <Toaster />
    </main>
  )
}