import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Luxury Bungalow Living | Premium Real Estate',
  description: 'Experience premium living spaces designed for comfort. Discover our exclusive collection of luxury bungalows with world-class amenities.',
  keywords: ['luxury bungalow', 'premium real estate', 'luxury living', 'modern homes', 'exclusive properties'],
  openGraph: {
    title: 'Luxury Bungalow Living | Premium Real Estate',
    description: 'Experience premium living spaces designed for comfort.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0f0f14',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
