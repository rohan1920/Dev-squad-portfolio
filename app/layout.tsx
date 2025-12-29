import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import CursorEffect from '@/components/CursorEffect'
import FuturisticBackground from '@/components/FuturisticBackground'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins' 
})

export const metadata: Metadata = {
  title: 'DevSquad - Building scalable web & AI solutions together',
  description: 'DevSquad is a team of 5 developers focused on building AI-powered, scalable web solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <FuturisticBackground />
        <CursorEffect />
        {children}
      </body>
    </html>
  )
}

