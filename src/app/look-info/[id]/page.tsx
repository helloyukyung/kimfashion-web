import {getLookInfo} from '@/api/look-info'
import InfoItems from '@/components/look-info/tooltip-button-list'
import Image from 'next/image'
import {Suspense} from 'react'

export default async function Page({params}: {params: {id: string}}) {
  const lookInfo = await getLookInfo(params.id)

  return (
    <main className="mx-auto w-full max-w-[480px] p-[10px]">
      <h1 className="mb-[12px] text-[3.2rem] font-bold uppercase">{lookInfo.title}</h1>
      <div className="relative mb-[125px]">
        <Image
          className="h-[full] w-[full] rounded"
          width={800}
          height={800}
          src={lookInfo.image}
          alt={lookInfo.title}
        />
        {lookInfo.imageSource && (
          <span className="absolute w-full py-2 text-center text-[1rem] text-slate-600">
            이미지 출처: {lookInfo.imageSource}
          </span>
        )}
        <Suspense fallback={'Loading'}>
          <InfoItems infos={lookInfo.infos} />
        </Suspense>
      </div>
    </main>
  )
}
