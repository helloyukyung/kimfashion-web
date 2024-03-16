'use client'
import Image from 'next/image'
import {useMemo, useState} from 'react'
import {FaPlus} from 'react-icons/fa'
import Button from '../common/button'

interface HoverTooltipButtonProps {
  x: number
  y: number
  url: string
  imageUrl: string
  title: string
  controlledHoverState: boolean
}

const HoverTooltipButton = ({x, y, url, imageUrl, title, controlledHoverState = false}: HoverTooltipButtonProps) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleClickPurchase = () => {
    window.open(url, '_blank')
  }
  const actualIsHovered = controlledHoverState || isHovered

  const tooltipLocation = useMemo(
    () => `${x > 50 ? `-right-[10vw] tablet:-right-[40px]` : '-left-[10vw] tablet:-left-[40px]'} top-[18px]`,
    [x]
  )

  return (
    <div style={{left: `${x}%`, top: `${y}%`}} className="z-100 absolute">
      <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <button type="button" className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-01)]">
          <FaPlus className="text-white" />
        </button>
        {actualIsHovered && (
          <div className={`absolute ${tooltipLocation} p-3`}>
            <div className="flex h-[100px] w-[250px] gap-4 rounded bg-white p-3">
              <Image className="rounded" src={imageUrl} width={80} height={80} alt="image" />
              <div className="flex flex-1 flex-col items-start justify-between">
                <span className="line-clamp-2">{title}</span>
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
