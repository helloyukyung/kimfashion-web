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
  const {data, loading, error} = useFetchOpenGraph(infos?.map((info) => info.url))

  const handleMouseEnterLeave = (index: number, isEnter: boolean) => {
    setHoverStates(hoverStates.map((_, i) => (i === index ? isEnter : hoverStates[i])))
  }
  const handleClickPurchase = (url: string) => {
    window.open(url, '_blank')
  }

  if (loading)
    return (
      <div role="status" className="absolute flex w-full animate-pulse gap-5 overflow-x-auto py-9">
        {Array.from({length: 3}, (_, i) => (
          <div key={i} className="min-h-[100px] min-w-[100px] rounded bg-gray-300" />
        ))}
      </div>
    )

  if (error) return <div>제품 정보를 불러오는데 실패했어요🥲</div>

  return (
    <>
      {infos.map((info, index) => (
        <HoverTooltipButton
          key={`${info.url}_${index}`}
          x={info.x}
          y={info.y}
          url={info.url}
          title={data[index]?.ogTitle}
          hoverState={hoverStates[index]}
          image={data[index]?.ogImage}
          handleMouseEnter={() => handleMouseEnterLeave(index, true)}
          handleMouseLeave={() => handleMouseEnterLeave(index, false)}
        />
      ))}
      <div className="absolute flex w-full gap-5 overflow-x-auto py-9">
        {infos.map((info, index) => (
          <div
            className="min-h-[100px] min-w-[100px]"
            key={`${info.url}_${index}`}
            onClick={() => handleClickPurchase(info.url)}
            onMouseEnter={() => handleMouseEnterLeave(index, true)}
            onMouseLeave={() => handleMouseEnterLeave(index, false)}
          >
            <Image
              className={`h-[100px] w-[100px] rounded border-2 border-solid ${hoverStates[index] ? 'border-[var(--primary-01)]' : ' border-gray-300'}`}
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
