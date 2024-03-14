'use client'

import {LookInfo} from '@/api/look-info'
import Image from 'next/image'
import {useState} from 'react'
import useFetchOpenGraph from './hooks/use-fetch-open-graph'
import HoverTooltipButton from './hover-tooltip-button'

interface InfoItemsProps {
  infos: LookInfo['infos']
}

function InfoItems({infos}: InfoItemsProps) {
  const [hoverStates, setHoverStates] = useState(Array(infos.length).fill(false))
  const {data, loading} = useFetchOpenGraph(infos?.map((info) => info.url))

  const handleMouseEnter = (index: number) => {
    setHoverStates(hoverStates.map((state, i) => (i === index ? true : state)))
  }

  const handleMouseLeave = (index: number) => {
    setHoverStates(hoverStates.map((state, i) => (i === index ? false : state)))
  }

  const handleClickPurchase = (url: string) => {
    window.open(url, '_blank')
  }

  if (loading) return <div>Loading...</div>

  return (
    <>
      {infos.map((info, index) => (
        <HoverTooltipButton
          key={`${info.url}_${index}`}
          x={info.x}
          y={info.y}
          url={info.url}
          title={data[index]?.ogTitle}
          imageUrl={data[index]?.ogImage}
          controlledHoverState={hoverStates[index]}
        />
      ))}
      <div className="w-full p-5 flex gap-5 overflow-x-auto">
        {infos.map((info, index) => (
          <div
            className="min-h-[100px] min-w-[100px]"
            key={`${info.url}_${index}`}
            onClick={() => handleClickPurchase(info.url)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            <Image
              className="rounded border-[3px] border-solid border-[lightGray] hover:border-[var(--hashtag)]"
              src={data[index]?.ogImage}
              width={100}
              height={100}
              alt={data[index]?.ogTitle || '상품 이미지'}
            />
          </div>
        ))}
      </div>
    </>
  )
}

export default InfoItems
