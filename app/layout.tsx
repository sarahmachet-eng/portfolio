

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
  title: 'Sarah L. | Graphic designer',
  description:
    'Portfolio — design graphique, illustrations et identités visuelles.',
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: '/icon.svg',
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
