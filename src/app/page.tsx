import QuoteItem from '@/components/quote/quote-item'
import Image from 'next/image'

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Image src={'/assets/logo.svg'} width={500} height={200} alt={'logo'} />
      <QuoteItem />
    </main>
  )
}
