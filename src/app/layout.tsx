import Footer from '@/components/layout/footer'
import Header from '@/components/layout/header'
import '@/styles/globals.css'
import '@/styles/reset.css'
import type {Metadata} from 'next'
import {Playfair_Display} from 'next/font/google'
import Head from 'next/head'
import Script from 'next/script'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
export const metadata: Metadata = {
  title: '김패션 | 패션정보는 김패션에서',
  description: '트렌디한 패션&라이프스타일 뉴스를 전달'
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
      </Head>
      <body className={`${pairiDisplay.variable}`}>
        <div className="flex w-full flex-col">
          <Header />
          <div className="flex flex-col items-center pt-[60px] laptop:ml-[220px]">{children}</div>
          <Footer />
          <ToastContainer theme="colored" position="top-center" autoClose={3000} />
        </div>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-G8M9N52KNH" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-G8M9N52KNH');
            `
          }}
        />
      </body>
    </html>
  )
}
