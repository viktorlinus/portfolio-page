"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

const ContactForm = () => {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("https://ot904fyj.rpcld.net/webhook/ac737118-8cc8-4fd5-8bce-cdf26ab7ba1f", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "key": "m75kA2nP2X872pA"
        },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        toast({
          title: "Meddelande skickat!",
          description: "Tack för ditt meddelande. Jag återkommer så snart som möjligt.",
          variant: "default",
        })
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        })
      } else {
        throw new Error("Något gick fel")
      }
    } catch (error) {
      toast({
        title: "Något gick fel",
        description: "Det uppstod ett problem när meddelandet skulle skickas. Försök igen senare.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Kontakta Mig
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Har du ett projekt i åtanke eller vill du veta mer om mina tjänster? Skicka ett meddelande så återkommer jag så snart som möjligt.
          </motion.p>
        </div>

        <motion.div 
          className="max-w-lg mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Namn</Label>
              <Input
                id="name"
                name="name"
                placeholder="Ditt namn"
                required
                value={formData.name}
                onChange={handleChange}
                className="bg-card border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">E-post</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="din.email@exempel.se"
                required
                value={formData.email}
                onChange={handleChange}
                className="bg-card border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="subject">Ämne</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Vad gäller ditt meddelande?"
                required
                value={formData.subject}
                onChange={handleChange}
                className="bg-card border"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message">Meddelande</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Beskriv ditt ärende"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="bg-card border resize-none"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Skickar..." : "Skicka Meddelande"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactForm