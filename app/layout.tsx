

import { Space_Grotesk, Bebas_Neue } from "next/font/google"
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
})

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bebas",
})
const nunito = Nunito({ 
  subsets: ["latin"],
  variable: '--font-nunito',
  display: 'swap',
})

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})



export const metadata: Metadata = {
  title: 'Sarah-L. | Creative Designer & Illustrator',
  description: 'Portfolio kawaii goth - Illustrations, visuels, design d\'applications et sites web',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${nunito.variable} ${inter.variable} bg-background`}>
<body className={`${spaceGrotesk.className} ${bebas.variable}`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
