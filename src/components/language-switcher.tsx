"use client"

import { usePathname, useRouter } from 'next/navigation'
import { Button } from './ui/button'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  // Extract current language from pathname
  const currentLang = pathname?.split('/')[1] || 'sv'
  
  // Switch to other language
  const switchLanguage = () => {
    const newLang = currentLang === 'en' ? 'sv' : 'en'
    
    // Get the rest of the path (if any)
    const restOfPath = pathname?.split('/').slice(2).join('/') || ''
    
    // Navigate to the same page in the other language
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