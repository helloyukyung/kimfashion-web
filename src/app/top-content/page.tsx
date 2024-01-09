import Hashtag from '@/components/common/hashtag'
import Subtitle from '@/components/common/subtitle'
import Image from 'next/image'

export default async function Page() {
  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <h1 className="mb-[12px] text-[3.2rem] font-bold uppercase">top content</h1>
      <Subtitle>오래 입을 수 있으면서, 하입의 경계에 있는 종류 별 탑 제품들을 소개합니다.</Subtitle>
      <div className="grid gap-[10px] tablet:grid-cols-2">
        {['', '', '', ''].map((item, index) => (
          <div className="flex flex-col" key={index}>
            <div className="relative overflow-hidden pb-[180px]">
              <Image
                className="absolute h-[180px] w-full rounded object-cover"
                width={500}
                height={500}
                src="/assets/temp/forher.jpeg"
                alt="temp"
              />
            </div>
            <div className="pt-[6px] text-[1.2rem]">
              {['후드티', '기본템'].map((hashtag) => (
                <Hashtag text={hashtag} key={hashtag} />
              ))}
            </div>
            <h2 className="py-[5px] text-[1.6rem]">기본 후드티 TOP5 추천</h2>
            <p className="line-clamp-2 text-[1.2rem] text-[gray]">
              남들 다 입는 뻔한 후드티 말고, 트렌디하고 유행안타는 기본 후드티 추천. 후드티는 누가 뭐라고 해도 가장
              트렌디한 &apos;must have item&apos;입니다. 호불호 없는 인기 후드티를 추천해드리겠습니다. 흥청망청
              돈쓰지말고 이것만 보고 따라사면 당신도 패셔니스타가 될수있습니다.
            </p>
          </div>
        ))}
      </div>
    </main>
  )
}
