import type { Metadata } from 'next'
import { Inter, Poppins, Roboto } from 'next/font/google'
import './globals.css'
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

export const metadata: Metadata = {
  title: 'Eken Consulting',
  description: 'Skalbara, intelligenta tekniska lösningar för ditt företag',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" suppressHydrationWarning>
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
