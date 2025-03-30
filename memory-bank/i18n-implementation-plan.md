# Internationalization (i18n) Implementation Plan

## Overview

This document outlines the plan for adding multi-language support to the portfolio website, focusing on Swedish (default) and English languages. The implementation will follow Next.js best practices for internationalization.

## Project Structure Changes

```
src/
├── app/
│   ├── [lang]/      # Dynamic route for language handling
│   │   ├── page.tsx # Root page
│   │   ├── about/   # About page
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   └── layout.tsx   # Root layout (language-independent)
├── locales/         # Directory for language files
│   ├── sv.json      # Swedish translations
│   └── en.json      # English translations
└── middleware.ts    # For language detection and redirection
```

## Implementation Steps

### 1. Create Language Middleware

The middleware will:
- Check if the URL already contains a language code
- If not, detect preferred language from browser settings
- Redirect to the appropriate language version
- Default to Swedish if no preference is detected

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  
  // Supported languages
  const supportedLocales = ['sv', 'en']
  
  // Check if path contains a language code
  const pathnameHasLocale = supportedLocales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  if (!pathnameHasLocale) {
    // Determine default language from Accept-Language header or use 'sv' as default
    let locale = 'sv'
    const acceptLanguage = request.headers.get('accept-language')
    
    if (acceptLanguage && acceptLanguage.includes('en')) {
      locale = 'en'
    }
    
    // Redirect to language-specific path
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    )
  }

  return NextResponse.next()
}
 
export const config = {
  matcher: [
    // Exclude static files, API routes, etc.
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
```

### 2. Create Translation Function

Create a function to load language-specific texts:

```typescript
// src/lib/dictionary.ts
import 'server-only'

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  sv: () => import('@/locales/sv.json').then((module) => module.default)
}

export default async function getDictionary(locale: string) {
  // Fallback to Swedish if language not supported
  const lang = locale in dictionaries ? locale : 'sv'
  return dictionaries[lang as keyof typeof dictionaries]()
}
```

### 3. Create Language Files

Swedish translations:
```json
// src/locales/sv.json
{
  "hero": {
    "title": "Jag Bygger Dina Idéer",
    "subtitle": "Skalbara, intelligenta tekniska lösningar för ditt företag",
    "cta": "Utforska möjligheterna"
  },
  "nav": {
    "home": "Hem",
    "process": "Min Process",
    "services": "Tjänster",
    "projects": "Projekt",
    "contact": "Kontakt"
  },
  "process": {
    "title": "Från Idé till Verklighet",
    "steps": [
      {
        "title": "Din Idé",
        "description": "Allt börjar med din vision. Vi diskuterar dina mål, behov och önskemål för att forma idén."
      },
      {
        "title": "Utveckling",
        "description": "Jag omsätter idén till kod med modern teknik som ger skalbarhet och prestanda."
      },
      {
        "title": "Resultat",
        "description": "En färdig lösning som gör din idé till verklighet, med fokus på användarvänlighet och kvalitet."
      }
    ]
  },
  "services": {
    "title": "Mina Specialkompetenser",
    "items": [
      {
        "title": "Webbapplikationer",
        "description": "Moderna webbapplikationer byggda med React och Next.js"
      },
      {
        "title": "Backend-system",
        "description": "Robusta backend-lösningar med Node.js och databaser"
      },
      {
        "title": "Responsiv Design",
        "description": "Användarvänliga gränssnitt som fungerar på alla enheter"
      }
    ]
  },
  "projects": {
    "title": "Mina Projekt",
    "viewProject": "Visa projekt"
  },
  "testimonials": {
    "title": "Vad Kunderna Säger"
  },
  "contact": {
    "title": "Kontakta Mig",
    "name": "Namn",
    "email": "E-post",
    "message": "Meddelande",
    "send": "Skicka",
    "success": "Meddelandet har skickats. Jag återkommer så snart som möjligt.",
    "error": "Ett fel uppstod. Försök igen senare."
  },
  "footer": {
    "copyright": "© 2025 Eken Consulting. Alla rättigheter förbehållna."
  }
}
```

English translations:
```json
// src/locales/en.json
{
  "hero": {
    "title": "I Build Your Ideas",
    "subtitle": "Scalable, intelligent technical solutions for your business",
    "cta": "Explore the possibilities"
  },
  "nav": {
    "home": "Home",
    "process": "My Process",
    "services": "Services",
    "projects": "Projects",
    "contact": "Contact"
  },
  "process": {
    "title": "From Idea to Reality",
    "steps": [
      {
        "title": "Your Idea",
        "description": "Everything starts with your vision. We discuss your goals, needs, and desires to shape the idea."
      },
      {
        "title": "Development",
        "description": "I transform the idea into code using modern technology that provides scalability and performance."
      },
      {
        "title": "Result",
        "description": "A finished solution that turns your idea into reality, focusing on user-friendliness and quality."
      }
    ]
  },
  "services": {
    "title": "My Specialties",
    "items": [
      {
        "title": "Web Applications",
        "description": "Modern web applications built with React and Next.js"
      },
      {
        "title": "Backend Systems",
        "description": "Robust backend solutions with Node.js and databases"
      },
      {
        "title": "Responsive Design",
        "description": "User-friendly interfaces that work on all devices"
      }
    ]
  },
  "projects": {
    "title": "My Projects",
    "viewProject": "View project"
  },
  "testimonials": {
    "title": "What Clients Say"
  },
  "contact": {
    "title": "Contact Me",
    "name": "Name",
    "email": "Email",
    "message": "Message",
    "send": "Send",
    "success": "Message sent. I will get back to you as soon as possible.",
    "error": "An error occurred. Please try again later."
  },
  "footer": {
    "copyright": "© 2025 Eken Consulting. All rights reserved."
  }
}
```

### 4. Create Language Switcher Component

```tsx
// components/language-switcher.tsx
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const pathName = usePathname()
  const router = useRouter()

  const switchLanguage = () => {
    const currentLang = pathName.split('/')[1]
    const newLang = currentLang === 'en' ? 'sv' : 'en'
    
    // Get the rest of the path (if any)
    const restOfPath = pathName.split('/').slice(2).join('/')
    
    // Navigate to the same page in the other language
    router.push(`/${newLang}/${restOfPath}`)
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={switchLanguage} 
      aria-label="Switch language"
    >
      <Globe className="h-[1.2rem] w-[1.2rem]" />
      <span className="ml-2 text-xs">{pathName.startsWith('/en') ? 'SV' : 'EN'}</span>
    </Button>
  )
}
```

### 5. Create Language-Specific Layouts

```tsx
// src/app/[lang]/layout.tsx
import type { Metadata } from 'next'
import { Inter, Poppins, Roboto } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { GlobalSpotlight } from '@/components/ui/global-spotlight'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import getDictionary from '@/lib/dictionary'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-poppins',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  
  return {
    title: 'Eken Consulting',
    description: params.lang === 'en' 
      ? 'Scalable, intelligent technical solutions for your business' 
      : 'Skalbara, intelligenta tekniska lösningar för ditt företag',
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/favicon.ico',
    },
    alternates: {
      canonical: `https://ekenconsulting.se/${params.lang}`,
      languages: {
        'sv-SE': `https://ekenconsulting.se/sv`,
        'en-US': `https://ekenconsulting.se/en`,
      },
    }
  }
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  const dict = await getDictionary(params.lang)
  
  return (
    <html lang={params.lang} suppressHydrationWarning>
      <body className={`${poppins.variable} ${roboto.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalSpotlight size={600} strength={0.3} initialOpacity={0.4} maxOpacity={0.8}>
            <Navbar lang={params.lang} dictionary={dict.nav} />
            {children}
            <Footer copyright={dict.footer.copyright} />
          </GlobalSpotlight>
        </ThemeProvider>
      </body>
    </html>
  )
}
```

### 6. Create Main Page With Language Support

```tsx
// src/app/[lang]/page.tsx
import { HeroSection } from '@/components/hero-section'
import { IdeaToReality } from '@/components/idea-to-reality'
import { AboutServices } from '@/components/about-services'
import { ProjectsSection } from '@/components/projects-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { ContactForm } from '@/components/contact-form'
import getDictionary from '@/lib/dictionary'

export default async function Home({ params }: { params: { lang: string } }) {
  const dict = await getDictionary(params.lang)
  
  return (
    <main className="flex flex-col items-center justify-between">
      <HeroSection 
        title={dict.hero.title}
        subtitle={dict.hero.subtitle}
        cta={dict.hero.cta}
      />
      <IdeaToReality 
        title={dict.process.title} 
        steps={dict.process.steps} 
      />
      <AboutServices 
        title={dict.services.title}
        services={dict.services.items}
      />
      <ProjectsSection 
        title={dict.projects.title}
        viewProjectText={dict.projects.viewProject}
      />
      <TestimonialsSection title={dict.testimonials.title} />
      <ContactForm 
        title={dict.contact.title}
        namePlaceholder={dict.contact.name}
        emailPlaceholder={dict.contact.email}
        messagePlaceholder={dict.contact.message}
        submitText={dict.contact.send}
        successMessage={dict.contact.success}
        errorMessage={dict.contact.error}
      />
    </main>
  )
}
```

### 7. Update Component Props to Accept Translation Texts

For example, update the Navbar component to accept translations:

```tsx
// components/navbar.tsx
import { LanguageSwitcher } from './language-switcher'

interface NavbarProps {
  lang: string
  dictionary: {
    home: string
    process: string
    services: string
    projects: string
    contact: string
  }
}

export function Navbar({ lang, dictionary }: NavbarProps) {
  return (
    <nav>
      <div className="logo">Eken Consulting</div>
      <ul>
        <li><a href={`/${lang}`}>{dictionary.home}</a></li>
        <li><a href={`/${lang}#process`}>{dictionary.process}</a></li>
        <li><a href={`/${lang}#services`}>{dictionary.services}</a></li>
        <li><a href={`/${lang}#projects`}>{dictionary.projects}</a></li>
        <li><a href={`/${lang}#contact`}>{dictionary.contact}</a></li>
      </ul>
      <LanguageSwitcher />
    </nav>
  )
}
```

### 8. Update robots.txt for Multilingual Support

```
User-agent: *
Allow: /

Sitemap: https://ekenconsulting.se/sitemap.xml
```

### 9. Create sitemap.xml for SEO

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <url>
    <loc>https://ekenconsulting.se/sv</loc>
    <xhtml:link rel="alternate" hreflang="sv" href="https://ekenconsulting.se/sv"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://ekenconsulting.se/en"/>
  </url>
  <url>
    <loc>https://ekenconsulting.se/en</loc>
    <xhtml:link rel="alternate" hreflang="sv" href="https://ekenconsulting.se/sv"/>
    <xhtml:link rel="alternate" hreflang="en" href="https://ekenconsulting.se/en"/>
  </url>
</urlset>
```

## Benefits

1. **Improved User Experience**: Visitors can view the site in their preferred language
2. **Broader Audience**: Reach both Swedish and international audiences
3. **SEO Advantages**: Proper language metadata for search engines
4. **Future Scalability**: Architecture supports adding more languages if needed

## Implementation Strategy

1. Create the basic directory structure for multilingual support
2. Implement middleware for language detection
3. Create translation files and dictionary loader
4. Create the language switcher component
5. Update layouts and pages to use translations
6. Refactor components to accept translation texts
7. Update SEO elements for multilingual support
8. Test language switching and default language detection
