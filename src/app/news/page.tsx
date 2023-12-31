import Image from 'next/image'

export default async function Page() {
  return (
    <main className="flex w-full max-w-[468px] flex-col gap-[20px] p-[10px] laptop:flex-row laptop:gap-[64px]">
      <div className="flex flex-col">
        <h2 className="mb-[16px] text-[32px] font-bold">NEWS</h2>
        {['', ''].map((item, index) => (
          <div className="w-full laptop:min-w-[468px]" key={index}>
            <div className="flex items-center gap-[10px] pb-[12px] pl-[4px] text-[14px]">
              <Image
                priority
                className="rounded-[100px]"
                width={32}
                height={32}
                src="/assets/temp/marieclaire.png"
                alt="logo"
              />
              <div>
                <span>마리끌레르</span>
                <span className="px-[4px] text-[#737373]">·</span>
                <span className="text-[#737373]">1일</span>
              </div>
            </div>
            <Image className="w-full rounded" width={400} height={400} src="/assets/temp/test_1.jpeg" alt="temp" />
            <div className="py-[8px] text-[14px]">
              <h3>
                <b className="mr-[4px]">마리끌레르</b>루이비통과 최소라가 함께한 마리끌레르 1월호 커버 공개
              </h3>
              <span className="text-[#bb3a48]">#Fashion</span> <span className="text-[#bb3a48]">#Trand</span>
              <hr className="my-[8px]" />
            </div>
          </div>
        ))}
      </div>
      <div className="min-w-[200px] laptop:pt-[100px]">
        <h3 className="mb-[8px] text-[16px] font-bold">추천 게시물</h3>
        <div className="flex gap-[10px] overflow-x-scroll laptop:flex-col">
          {['', ''].map((item, index) => (
            <div key={index} className="min-w-[200px]">
              <Image
                className="h-[200px] w-[200px] rounded"
                width={200}
                height={150}
                src="/assets/temp/test_2.jpeg"
                alt="temp"
              />
              <p className="pb-[2px] pt-[4px] text-[14px] font-bold">제니가 말아주는 공항 스타일링</p>
              <p className="text-[11px] text-[gray]">editor MarieClaireKorea | 2023.12.26</p>
            </div>
          ))}
        </div>
        <div className="mt-[10px] text-[10px] text-[lightgray]">© 2024 김패션 all rights reserved.</div>
      </div>
    </main>
  )
}
