import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../styles/globals.css'
import './../styles/reset.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Next Template',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
