import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'
import Navigation from '@/components/layout/Navigation'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Moja Prodavnica',
  description: 'Vaša online prodavnica za sve potrepštine',
  keywords: ['prodavnica', 'online shopping', 'e-commerce', 'Croatia'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hr" className={inter.variable}>
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        <main>{children}</main>
        <Toaster position="top-center" />
      </body>
    </html>
  )
} 