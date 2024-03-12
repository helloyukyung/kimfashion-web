'use client'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import Button from '../common/button'

interface HoverTooltipButtonProps {
  x: number
  y: number
  url: string
}
const HoverTooltipButton = ({x, y, url}: HoverTooltipButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [og, setOg] = useState<{ogImageUrl: string; ogTitle: string}>({ogImageUrl: '', ogTitle: ''})

  const tooltipLocation = `${x > 50 ? `-right-[10vw] tablet:-right-[40px]` : '-left-[10vw] tablet:-left-[40px]'}`
  useEffect(() => {
    const fetchOpenGraphImage = async () => {
      try {
        const response = await fetch(`/api/og-image?url=${url}`)
        const data = await response.json()
        setOg(data)
      } catch (error: any) {
        console.error('Error fetching OpenGraph image:')
      }
    }
    if (isHovered) {
      fetchOpenGraphImage()
    }
  }, [isHovered, url])

  const handleClickPurchase = () => {
    url && window.open(url, '_blank')
  }

  return (
    <div style={{left: `${x}%`, top: `${y}%`}} className={`z-100 absolute`}>
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <button
          type="button"
          className="flex h-[18px] w-[18px] items-center justify-center rounded-full bg-[var(--hashtag)]"
        >
          <span className="inline-block h-[18px] align-middle text-white before:content-['+']"></span>
        </button>
        {isHovered && (
          <div className={`absolute ${tooltipLocation} top-[18px] p-3`}>
            <div className="flex h-[100px] w-[250px] gap-4 rounded bg-white p-3">
              <Image className="rounded" src={og?.ogImageUrl} width={80} height={80} alt="image" />
              <div className="flex flex-1 flex-col items-start justify-between">
                <span className="line-clamp-2">{og?.ogTitle}</span>
                <Button full={true} onClick={handleClickPurchase}>
                  구매하기
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default HoverTooltipButton
