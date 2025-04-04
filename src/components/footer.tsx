"use client"

import Link from "next/link"
import Image from "next/image"

interface FooterProps {
  aboutTitle?: string;
  aboutText?: string;
  contactTitle?: string;
  location?: string;
  socialTitle?: string;
  copyright?: string;
}

const Footer = ({ 
  aboutTitle = "Om Mig",
  aboutText = "Jag är en utvecklare med passion för innovativa teknologiska lösningar som förenklar människors vardag.",
  contactTitle = "Kontakt",
  location = "Borås, Sverige",
  socialTitle = "Sociala Medier",
  copyright = " 2025 Eken Consulting. Alla rättigheter förbehållna."
}: FooterProps) => {
  return (
    <footer id="contact" className="bg-muted py-12">
      <div className="container px-4 md:px-6 mx-auto">
        {/* Logo alone in first row, left-aligned */}
        <div className="flex justify-start mb-8">
          <Image
            src="/logo1.png"
            alt="Eken Consulting"
            width={240}
            height={48}
            className="w-auto h-48" /* Large logo image */
            priority
          />
        </div>
        
        {/* All three columns in second row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">{aboutTitle}</h3>
            <p className="text-muted-foreground mb-4">
              {aboutText}
            </p>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4">{contactTitle}</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2 text-primary"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>viktorlinus@gmail.com</span>
              </li>
              <li className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 mr-2 text-primary"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{location}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">{socialTitle}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/viktorlinus" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a 
                href="https://twitter.com/viklin98" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <div className="flex justify-center items-center mb-4">
            <Image
              src="/logo-text.png"
              alt="Eken Consulting"
              width={160}
              height={32}
              className="w-auto h-12"
              priority
            />
          </div>
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer