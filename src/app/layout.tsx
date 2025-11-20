import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Driva - Inteligência Comercial B2B',
  description: 'Plataforma completa de inteligência comercial para mapeamento de mercado, geração de leads e automação de prospecção.',
  keywords: 'B2B, inteligência comercial, leads, prospecção, automação, marketing',
  authors: [{ name: 'Matheus' }],
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
