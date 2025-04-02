"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ThemeToggle } from "./theme-toggle"
import { LanguageSwitcher } from "./language-switcher"
import { cn } from "@/lib/utils"

interface NavbarProps {
  lang?: string
  dictionary?: {
    home: string
    process: string
    services: string
    projects: string
    contact: string
  }
}

const Navbar = ({
  lang = "sv",
  dictionary = {
    home: "Hem",
    process: "Min Process",
    services: "Tjänster",
    projects: "Projekt",
    contact: "Kontakt"
  }
}: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToIdeaSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const ideaSection = document.getElementById("idea-to-reality")
    if (ideaSection) {
      // Stäng mobilmenyn om den är öppen
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
      
      const offset = 60
      const ideaPosition = ideaSection.getBoundingClientRect().top + window.pageYOffset - offset
      
      window.scrollTo({
        top: ideaPosition,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    // Throttle function to limit execution frequency
    const throttle = (callback: () => void, limit: number) => {
      let waiting = false;
      return () => {
        if (!waiting) {
          callback();
          waiting = true;
          setTimeout(() => {
            waiting = false;
          }, limit);
        }
      };
    };

    // Update scroll state with throttling
    const handleScroll = throttle(() => {
      // Use transform: translateY(0) for better iOS performance
      const scrolled = window.scrollY > 10;
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    }, 10); // Limit to max ~100 times per second

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 will-change-transform",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-2 transition-[background,padding] duration-300"
          : "bg-transparent py-4 transition-[background,padding] duration-300"
      )}
      style={{
        // Force hardware acceleration
        transform: 'translateZ(0)',
        WebkitTransform: 'translateZ(0)',
        backfaceVisibility: 'hidden',
        WebkitBackfaceVisibility: 'hidden'
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          href={`/${lang}`} 
          className="flex items-center gap-2"
        >
          <Image
            src="/logo-text.png"
            alt="Eken Consulting"
            width={160}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href={`/${lang}`} 
            className="font-medium hover:text-primary transition-colors"
          >
            {dictionary.home}
          </Link>
          <a 
            href="#idea-to-reality" 
            className="font-medium hover:text-primary transition-colors cursor-pointer"
            onClick={scrollToIdeaSection}
          >
            {dictionary.process}
          </a>
          <Link 
            href="#about-services" 
            className="font-medium hover:text-primary transition-colors"
          >
            {dictionary.services}
          </Link>
          <Link 
            href="#projects" 
            className="font-medium hover:text-primary transition-colors"
          >
            {dictionary.projects}
          </Link>
          <Link 
            href="#contact" 
            className="font-medium hover:text-primary transition-colors"
          >
            {dictionary.contact}
          </Link>
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b shadow-lg">
          <div className="container mx-auto py-4 flex flex-col gap-4">
            <Link
              href={`/${lang}`}
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dictionary.home}
            </Link>
            <a
              href="#idea-to-reality"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors cursor-pointer"
              onClick={scrollToIdeaSection}
            >
              {dictionary.process}
            </a>
            <Link
              href="#about-services"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dictionary.services}
            </Link>
            <Link
              href="#projects"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dictionary.projects}
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {dictionary.contact}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar