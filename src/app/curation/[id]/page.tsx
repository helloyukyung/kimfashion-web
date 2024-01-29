import WriterInfo from '@/components/common/writer-info'
import Image from 'next/image'

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-[780px] p-[10px]">
      <h1 className="mb-[12px] text-[3.2rem] font-bold uppercase">기본 후드티 추천</h1>
      <WriterInfo profileImage="/assets/temp/marieclaire.png" nickname="김패션" createdAt="2022.02.02" />
      <p className="pb-[20px] text-[1.4rem]">
        스웨덴을 기반으로 다양한 하위문화를 전통적인 패브릭을 통해 풀어 나가는 브랜드 아워레가시. 국내에서 큰 사랑을
        받는 브랜드인 만큼 코트 또한 유명하다. 넉넉한 사이즈의 제품이지만 테일러링이 들어간 각진 어깨와 허리 라인의
        실루엣이 특징. 모헤어 울의 헤어리한 텍스쳐와 만나 섹시한 무드를 자아내는 확실한 차별점을 가지고있다.
        <br />
        <br /> 스웨덴을 기반으로 다양한 하위문화를 전통적인 패브릭을 통해 풀어 나가는 브랜드 아워레가시. 국내에서 큰
        사랑을 받는 브랜드인 만큼 코트 또한 유명하다. 넉넉한 사이즈의 제품이지만 테일러링이 들어간 각진 어깨와 허리
        라인의 실루엣이 특징. 모헤어 울의 헤어리한 텍스쳐와 만나 섹시한 무드를 자아내는 확실한 차별점을 가지고있다.
      </p>
      {['', '', ''].map((item, index) => (
        <div className="my-[20px]" key={index}>
          <h3 className="pb-[10px] text-[1.8rem] font-bold">{index + 1}. For Her·NAPPING CROP HOODIE ZIP UP</h3>
          <div className="flex flex-col gap-[10px] tablet:h-[320px] tablet:flex-row">
            <div className="pb-full relative overflow-hidden tablet:min-w-[300px] tablet:pb-[320px]">
              <Image
                width={600}
                height={400}
                className="rounded object-cover tablet:absolute tablet:h-[320px]"
                src="/assets/temp/forher.jpeg"
                alt="temp"
              />
            </div>
            <div className="flex h-full flex-col justify-end gap-[15px] pt-[4px]">
              <div>
                <h3 className="text-[1.6rem] font-bold">For Her</h3>
                <p className="py-[4px] font-semibold">NAPPING CROP HOODIE ZIP UP (2ND DROP)</p>
                <p>KRW 104,000</p>
              </div>
              <p className="py-[10px]">
                스웨덴을 기반으로 다양한 하위문화를 전통적인 패브릭을 통해 풀어 나가는 브랜드 아워레가시. 국내에서 큰
                사랑을 받는 브랜드인 만큼 코트 또한 유명하다. 넉넉한 사이즈의 제품이지만 테일러링이 들어간 각진 어깨와
                허리 라인의 실루엣이 특징. 모헤어 울의 헤어리한 텍스쳐와 만나 섹시한 무드를 자아내는 확실한 차별점을
                가지고있다.
              </p>
              <button className="w-full rounded bg-[black] p-[12px] text-[white]">구매하러 가기</button>
            </div>
          </div>
          <p className="py-[8px] text-[1.6rem] font-bold">연관 컨텐츠</p>
          <div className="flex w-[100%] gap-[10px] overflow-x-scroll">
            {['', '', ''].map((item, index) => (
              <div className="flex gap-[4px] rounded p-[8px] hover:bg-[#f9f9f9]" key={index}>
                <Image width={100} height={100} className="rounded" src="/assets/temp/review.svg" alt="temp" />
                <div className="w-[230px]">
                  <p className="py-[3px]">SHOP FOR.HER</p>
                  <p className="text-[1.2rem] text-[#c7c7c7]">
                    간절기 템으로 후드 집업을 찾다 구입한 샵포허의 크롭 후디집업에 대해서 ...
                  </p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-[24px]" />
        </div>
      ))}
    </main>
  )
}
