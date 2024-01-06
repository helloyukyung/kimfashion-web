import Image from 'next/image'

function RecommendPostItem() {
  return (
    <div className="min-w-[200px]">
      <Image
        className="h-[200px] w-[200px] rounded"
        width={200}
        height={150}
        src="/assets/temp/test_2.jpeg"
        alt="temp"
      />
      <p className="pb-[2px] pt-[4px] font-bold">제니가 너무 이쁜 공항 스타일링</p>
      <p className="text-[1rem] text-[gray]">editor KimfashionKorea | 2023.12.26</p>
    </div>
  )
}

export default RecommendPostItem
