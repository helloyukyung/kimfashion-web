import {getCurationList} from '@/api/curations'
import Hashtag from '@/components/common/hashtag'
import Subtitle from '@/components/common/subtitle'
import Image from 'next/image'
import Link from 'next/link'

export default async function Page() {
  const curationList = await getCurationList()

  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <h1 className="mb-[12px] font-fontPairDisplay text-[3.2rem] font-bold uppercase">CURATION</h1>
      <Subtitle>양질의 패션정보만 엄선한 큐레이션</Subtitle>
      <div className="grid gap-[10px] tablet:grid-cols-2">
        {curationList.map((curation, index) => (
          <Link href={`/curation/${curation.id}`} className="flex flex-col" key={index}>
            <div className="relative overflow-hidden pb-[200px]">
              <Image
                className="absolute h-[200px] w-full rounded object-cover"
                width={500}
                height={500}
                src={curation.representativeImage}
                alt="temp"
              />
            </div>
            <div className="pt-[6px] text-[1.2rem]">
              {curation.hashtags.map((hashtag, index) => (
                <Hashtag text={hashtag} key={`${hashtag}_${index}`} />
              ))}
            </div>
            <h2 className="py-[5px] text-[1.6rem]">{curation.title}</h2>
            <p className="line-clamp-2 text-[1.2rem] text-[gray]">{curation.content}</p>
          </Link>
        ))}
      </div>
    </main>
  )
}
