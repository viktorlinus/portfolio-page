import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// Supported languages
const supportedLocales = ['sv', 'en']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Check if the pathname already has a locale
  const pathnameHasLocale = supportedLocales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )
  
  // If no locale in path, detect from browser or use default
  if (!pathnameHasLocale) {
    // Get preferred language from headers
    const acceptLanguage = request.headers.get('accept-language') || ''
    
    // Check if user prefers English
    let locale = 'sv' // Default to Swedish
    if (acceptLanguage.includes('en') && !acceptLanguage.includes('sv')) {
      locale = 'en'
    }
    
    // Redirect to the same pathname with locale prefix
    return NextResponse.redirect(
      new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url)
    )
  }
  
  return NextResponse.next()
}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next) and static assets (images, etc)
    '/((?!api|_next/static|_next/image|images|logos|favicon.ico|logo-text.jpg|logo-text.png|logo1.png|sitemap.xml|robots.txt).*)',
  ],
}