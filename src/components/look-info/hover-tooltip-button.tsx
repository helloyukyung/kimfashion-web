'use client'
import Image from 'next/image'
import {FaPlus} from 'react-icons/fa'
import Button from '../common/button'

interface HoverTooltipButtonProps {
  x: number
  y: number
  url: string
  image: string
  title: string
  handleMouseEnter: () => void
  handleMouseLeave: () => void
  hoverState: boolean
}

const HoverTooltipButton = ({
  x,
  y,
  url,
  image,
  title,
  hoverState,
  handleMouseEnter,
  handleMouseLeave
}: HoverTooltipButtonProps) => {
  const handleClickPurchase = () => {
    window.open(url, '_blank')
  }

  const tooltipLocation =
    x < 50
      ? '-left-[20vw] tablet:-left-[40px] ' + (y > 50 && '-top-[120px]')
      : '-right-[20vw] tablet:-right-[40px] ' + (y > 50 && '-top-[120px]')

  return (
    <div style={{left: `${x}%`, top: `${y}%`}} className="z-100 absolute">
      <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <button
          type="button"
          className="opacity- flex h-9 w-9 items-center justify-center rounded-full bg-[var(--primary-01)] opacity-85"
        >
          <FaPlus className="text-white" />
        </button>
        {hoverState && (
          <div className={`absolute ${tooltipLocation} p-3`}>
            <div className="flex h-[100px] w-[250px] gap-4 rounded bg-white p-3">
              <Image className="rounded" src={image} width={80} height={80} alt="image" />
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
