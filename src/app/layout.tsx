import type { Metadata } from 'next'
import { Gloria_Hallelujah } from 'next/font/google'

import './../styles/globals.css'
import './../styles/reset.css'
const gloriaHallelujah = Gloria_Hallelujah({ weight: ['400'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next Template',
  description: 'Next Template',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={gloriaHallelujah.className}>{children}</body>
    </html>
  )
}
