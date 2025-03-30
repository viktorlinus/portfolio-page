# Internationalization (i18n) Implementation

## Current Status
✅ Successfully implemented and working correctly.

## Overview
The portfolio website now supports both Swedish (default) and English languages, with a fully integrated internationalization system following Next.js best practices.

## Directory Structure
```
src/
├── app/
│   ├── [lang]/      # Dynamic route for language handling
│   │   ├── page.tsx # Root page with translations
│   │   └── layout.tsx # Layout with language context
│   └── layout.tsx   # Root layout (language-independent)
├── locales/         # Directory for translation files
│   ├── sv.json      # Swedish translations
│   └── en.json      # English translations
└── middleware.ts    # For language detection and redirection
```

## Core Components

### 1. Middleware (middleware.ts)
Handles automatic language detection and redirection:
```typescript
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
    
    if (acceptLanguage && acceptLanguage.includes('en') && !acceptLanguage.includes('sv')) {
      locale = 'en'
    }
    
    // Redirect to the same pathname with locale prefix
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    )
  }
  
  return NextResponse.next()
}
```

### 2. Dictionary Utility (lib/dictionary.ts)
Loads language-specific translations:
```typescript
import 'server-only'

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  sv: () => import('@/locales/sv.json').then((module) => module.default)
}

export const getDictionary = async (locale: string) => {
  // Fallback to Swedish if language not supported
  const lang = locale in dictionaries ? locale : 'sv'
  return dictionaries[lang as keyof typeof dictionaries]()
}
```

### 3. Language Switcher Component (components/language-switcher.tsx)
UI component for changing language:
```typescript
'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()
  const currentLang = pathname?.split('/')[1] || 'sv'
  
  const switchLanguage = () => {
    const newLang = currentLang === 'en' ? 'sv' : 'en'
    const restOfPath = pathname.split('/').slice(2).join('/')
    router.push(`/${newLang}${restOfPath ? `/${restOfPath}` : ''}`)
  }

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      onClick={switchLanguage} 
      aria-label="Switch language"
      className="w-auto px-2"
    >
      <Globe className="h-[1.2rem] w-[1.2rem] mr-1" />
      <span className="text-xs font-medium">
        {currentLang === 'en' ? 'SV' : 'EN'}
      </span>
    </Button>
  )
}
```

### 4. Page Component with Translations (app/[lang]/page.tsx)
Renders content based on the current language:
```typescript
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
      {/* Other translated sections */}
    </main>
  )
}
```

### 5. Helper Functions for Content
- **getProjectData**: Retrieves language-specific project data
- **getTestimonialData**: Retrieves language-specific testimonial data

## Translation Files
Comprehensive JSON files containing all site content in both languages:

### Swedish (sv.json)
```json
{
  "hero": {
    "title": "Jag Bygger Dina Idéer",
    "subtitle": "Skalbara, intelligenta tekniska lösningar för ditt företag",
    "cta": "Utforska möjligheterna",
    "scrollText": "Scrolla ner"
  },
  "nav": {
    "home": "Hem",
    "process": "Min Process",
    "services": "Tjänster",
    "projects": "Projekt",
    "testimonials": "Referenser",
    "contact": "Kontakt"
  },
  // More sections...
}
```

### English (en.json)
```json
{
  "hero": {
    "title": "I Build Your Ideas",
    "subtitle": "Scalable, intelligent technical solutions for your business",
    "cta": "Explore the possibilities",
    "scrollText": "Scroll down"
  },
  "nav": {
    "home": "Home",
    "process": "My Process",
    "services": "Services",
    "projects": "Projects",
    "testimonials": "References",
    "contact": "Contact"
  },
  // More sections...
}
```

## Component Updates
All components have been updated to support multiple languages:

1. **Navbar**: Displays navigation items in the correct language
2. **HeroSection**: Shows title, subtitle, and CTA in the selected language
3. **IdeaToReality**: Presents process steps in the appropriate language
4. **AboutServices**: Shows service cards with translated content
5. **ProjectGrid/ProjectCard**: Displays projects with language-specific descriptions
6. **TestimonialsSection**: Shows testimonials in the chosen language
7. **ContactForm**: Has form labels and placeholders in the correct language
8. **Footer**: Shows copyright and other information in the selected language

## SEO Enhancements
- **Metadata with language alternates**: Each page indicates its alternative language versions
- **hreflang Tags**: Proper language attribution for search engines
- **Sitemap.xml**: Includes both language versions of each page
- **Canonical URLs**: Correct cross-references between language variants

## Implementation Challenges Solved
1. **Service Components**: Updated all service cards to detect language and display appropriate content
2. **Project Data Structure**: Modified to include translations for all project information
3. **Testimonial Translations**: Ensured customer quotes are available in both languages
4. **Form Labels**: Fixed all input labels to show in the correct language

## Future Enhancement Possibilities
1. **Additional Languages**: The system is designed to easily add more languages
2. **Language Persistence**: Could add cookie or localStorage to remember user's language preference
3. **More Granular Content**: Could expand translation system for more dynamic content

## Benefits
1. **Broader Audience**: Site now accessible to both Swedish and international visitors
2. **Improved SEO**: Proper multilingual implementation for better search rankings
3. **Professional Presentation**: Demonstrates technical capability and consideration for diverse users
4. **Easier Content Management**: Centralized translation files make content updates simpler
5. **Scalability**: Architecture supports adding more languages in the future