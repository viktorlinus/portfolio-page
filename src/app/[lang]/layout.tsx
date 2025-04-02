import type { Metadata } from 'next'
import { Inter, Poppins, Roboto } from 'next/font/google'
import '../globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { GlobalSpotlight } from '@/components/ui/global-spotlight'

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

export async function generateMetadata({ 
  params 
}: { 
  params: { lang: string } 
}): Promise<Metadata> {
  return {
    title: 'Eken Consulting',
    description: params.lang === 'en' 
      ? 'Scalable, intelligent technical solutions for your business' 
      : 'Skalbara, intelligenta tekniska lösningar för ditt företag',
    icons: {
      icon: '/logos/logo-icon.png',
      shortcut: '/logos/logo-icon.png',
      apple: '/logos/logo-icon.png',
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

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
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
            {children}
          </GlobalSpotlight>
        </ThemeProvider>
      </body>
    </html>
  )
}