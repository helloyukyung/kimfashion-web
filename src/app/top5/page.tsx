import Hashtag from '@/components/common/hashtag'
import Subtitle from '@/components/common/subtitle'
import Image from 'next/image'

export default async function Page() {
  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <h2 className="mb-[12px] text-[3.2rem] font-bold uppercase">TOP5</h2>
      <Subtitle>패션제품 TOP5를 소개합니다.</Subtitle>
      <div className="flex gap-[10px]">
        <div className="relative min-w-[130px] overflow-hidden pb-[130px]">
          <Image
            className="absolute h-[130px] w-full rounded"
            width={130}
            height={130}
            src="/assets/temp/test_2.jpeg"
            alt="temp"
          />
        </div>
        <div className="max-h-[130px]">
          <div className=" text-[1.6rem] ">
            {['후드티', '기본템'].map((hashtag) => (
              <Hashtag text={hashtag} key={hashtag} />
            ))}
          </div>
          <h2 className="py-[10px] text-[2.1rem]">기본 후드티 TOP5 추천</h2>
          <p className="line-clamp-4 text-[1.6rem]">
            남들 다 입는 뻔한 후드티 말고, 트렌디하고 유행안타는 기본 후드티 추천. 후드티는 누가 뭐라고 해도 가장
            트렌디한 &apos;must have item&apos;입니다. 호불호 없는 인기 후드티를 추천해드리겠습니다. 흥청망청 돈쓰지말고
            이것만 보고 따라사면 당신도 패셔니스타가 될수있습니다.
          </p>
        </div>
      </div>
    </main>
  )
}
