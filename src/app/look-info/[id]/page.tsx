import {getLookInfo} from '@/api/look-info'
import WriterInfo from '@/components/common/writer-info'
import LookInfoList from '@/components/look-info/look-info-list'
import InfoItems from '@/components/look-info/tooltip-button-list'
import Image from 'next/image'

export default async function Page({params}: {params: {id: string}}) {
  const lookInfo = await getLookInfo(params.id)
  return (
    <main className="w-full mx-auto max-w-[480px] p-[10px]">
      <h1 className="mb-[12px] text-[3.2rem] font-bold uppercase">{lookInfo.title}</h1>
      <div className="relative">
        <Image className="h-[full] w-[full] rounded" width={800} height={800} src={lookInfo.image} alt="temp" />
        <InfoItems infos={lookInfo.infos} />
      </div>
      <WriterInfo profileImage="/assets/kimfashion_logo.svg" nickname="김패션" createdAt="2022.02.02" />
      {lookInfo.name}의 게시물 더보기
      <LookInfoList lookInfoList={[]} />
    </main>
  )
}
