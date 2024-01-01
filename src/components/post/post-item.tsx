import Image from 'next/image'

function PostItem() {
  return (
    <div className="w-full">
      <div className="flex items-center gap-[10px] pb-[12px] pl-[4px] pt-[8px] text-[14px]">
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
      <Image className="w-full rounded" width={480} height={480} src="/assets/temp/test_1.jpeg" alt="temp" />
      <div className="py-[8px] text-[14px]">
        <h3>
          <b className="mr-[4px]">마리끌레르</b>루이비통과 최소라가 함께한 마리끌레르 1월호 커버 공개
        </h3>
        <div className="pt-[4px] text-[color:var(--hashtag)]">
          <span>#Fashion</span> <span>#Trand</span>
        </div>
        <hr className="my-[8px]" />
      </div>
    </div>
  )
}

export default PostItem
