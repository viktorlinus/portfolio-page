"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ThemeToggle } from "./theme-toggle"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          href="/" 
          className="text-2xl font-bold text-primary"
        >
          Portfolio
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium hover:text-primary transition-colors">
            Hem
          </Link>
          <Link href="#about-services" className="font-medium hover:text-primary transition-colors">
            Tjänster
          </Link>
          <Link href="#projects" className="font-medium hover:text-primary transition-colors">
            Projekt
          </Link>
          <Link href="#testimonials" className="font-medium hover:text-primary transition-colors">
            Referenser
          </Link>
          <Link href="#contact" className="font-medium hover:text-primary transition-colors">
            Kontakt
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden flex items-center gap-2">
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
              href="/"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hem
            </Link>
            <Link
              href="#about-services"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Tjänster
            </Link>
            <Link
              href="#projects"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projekt
            </Link>
            <Link
              href="#testimonials"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Referenser
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Kontakt
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
