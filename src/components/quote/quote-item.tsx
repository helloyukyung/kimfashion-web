import Image from 'next/image'

function QuoteItem() {
  return (
    <div className="flex items-center align-center justify-center flex-col">
      <p>Shoplifting is a victimless crime, like punching someone in the dark.</p>
      <Image
        priority
        src={'https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185'}
        width={120}
        height={120}
        alt={'character-image'}
      />
    </div>
  )
}

export default QuoteItem
