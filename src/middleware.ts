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
  
  // Detect if request is from a search engine crawler
  const userAgent = request.headers.get('user-agent') || ''
  const isBot = /Googlebot|bingbot|Baiduspider|DuckDuckBot|Slurp|Yandex|facebookexternalhit/i.test(userAgent)
  
  // If no locale in path and not a bot, perform normal redirection
  if (!pathnameHasLocale && !isBot) {
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
  
  // For bots without locale, serve default locale content without redirection
  if (!pathnameHasLocale && isBot) {
    // Rewrite to the default locale (Swedish) without changing URL
    return NextResponse.rewrite(
      new URL(`/sv${pathname === '/' ? '' : pathname}`, request.url)
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