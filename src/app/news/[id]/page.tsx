import Image from 'next/image'

export default async function Page() {
  return (
    <main className="w-full p-[10px] laptop:w-[600px]">
      <div className="">
        <Image width={150} height={300} src="/assets/temp/test_1.jpeg" alt="temp" />
        <h3>제니,닝닝,소미가 말아주는 겨울 아우터 스타일링</h3>
        <span>#Fashion</span> <span>#Trand</span>
      </div>
    </main>
  )
}
