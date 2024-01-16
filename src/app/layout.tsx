import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import '@/styles/globals.css'
import '@/styles/reset.css'
import type {Metadata} from 'next'
import {Playfair_Display} from 'next/font/google'
import Head from 'next/head'

export const metadata: Metadata = {
  title: '김패션 | 패션정보는 김패션에서',
  description: 'Generated by create next app'
}

const pairiDisplay = Playfair_Display({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  preload: false,
  variable: '--font-pair-display',
  display: 'swap'
})

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="ko">
      <Head>
        <link
          rel="stylesheet"
          as="style"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script src="https://platform.instagram.com/en_US/embeds.js" async />
      </Head>
      <body className={`${pairiDisplay.variable}`}>
        <div className="flex w-full flex-col">
          <Header />
          <div className="flex flex-col items-center pt-[80px] laptop:ml-[220px]">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
