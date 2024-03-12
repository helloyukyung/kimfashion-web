import WriterInfo from '@/components/common/writer-info'
import HoverTooltipButton from '@/components/look-info/hover-tooltip-button'
import LookInfoList from '@/components/look-info/look-info-list'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[720px] p-[10px]">
      <h1 className="mb-[12px] text-[3.2rem] font-bold uppercase">제니의 공항 사진 정보</h1>
      <div className="relative">
        <Image
          className="h-[full] w-[full] rounded"
          width={800}
          height={800}
          src="/assets/temp/test_2.jpeg"
          alt="temp"
        />
        <HoverTooltipButton x={80} y={40} url="https://www.musinsa.com/app/goods/3825573?loc=goods_rank" />
      </div>
      <WriterInfo profileImage="/assets/temp/marieclaire.png" nickname="김패션" createdAt="2022.02.02" />
      한소희의 게시물 더보기
      <LookInfoList />
    </main>
  )
}
