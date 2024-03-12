import {getCuration} from '@/api/curations'
import WriterInfo from '@/components/common/writer-info'
import Image from 'next/image'

export default async function Page({params}: {params: {id: string}}) {
  const curation = await getCuration(params.id)

  if (!curation) return null
  return (
    <main className="mx-auto w-full max-w-[780px] p-[10px]">
      <h1 className="mb-[12px] text-[3.2rem] font-bold uppercase">{curation.title}</h1>
      <WriterInfo profileImage="/assets/kimfashion_logo.svg" nickname="김패션" createdAt="2022.02.02" />
      <p className="pb-[20px] text-[1.4rem]">{curation.content}</p>
      {curation.products.map((product, index) => (
        <div className="my-[20px]" key={index}>
          <h3 className="pb-[10px] text-[1.8rem] font-bold">
            {index + 1}. {product.name}
          </h3>
          <div className="flex flex-col gap-[10px] tablet:h-[320px] tablet:flex-row">
            <div className="pb-full relative overflow-hidden tablet:min-w-[300px] tablet:pb-[320px]">
              <Image
                width={600}
                height={400}
                className="rounded object-cover tablet:absolute tablet:h-[320px]"
                src={product.image as string}
                alt={product.name}
              />
            </div>
            <div className="flex h-full flex-col justify-end gap-[15px] pt-[4px]">
              <div>
                <h3 className="text-[1.6rem] font-bold">{product.brandName}</h3>
                <p className="py-[4px] font-semibold">{product.name}</p>
                <p>KRW {product.price.toLocaleString()}</p>
              </div>
              <p className="py-[10px]">{product.description}</p>
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
