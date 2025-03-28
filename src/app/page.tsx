import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import IdeaToReality from "@/components/idea-to-reality"
import AboutServices from "@/components/about-services"
import ProjectGrid from "@/components/project-grid"
import TestimonialsSection from "@/components/testimonials-section"
import ContactForm from "@/components/contact-form"
import Footer from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <IdeaToReality />
      <AboutServices />
      <ProjectGrid />
      <TestimonialsSection />
      <ContactForm />
      <Footer />
      <Toaster />
    </main>
  )
}
