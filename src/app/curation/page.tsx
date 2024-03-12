import {getCurationList} from '@/api/curations'
import Hashtag from '@/components/common/hashtag'
import Subtitle from '@/components/common/subtitle'
import Image from 'next/image'
import Link from 'next/link'

export const mockData = [
  {
    title: '기본 후드티 추천',
    representativeImage: '/assets/temp/forher.jpeg',
    content:
      '스웨덴을 기반으로 다양한 하위문화를 전통적인 패브릭을 통해 풀어 나가는 브랜드 아워레가시. 국내에서 큰 사랑을 받는 브랜드인 만큼 코트 또한 유명하다. 넉넉한 사이즈의 제품이지만 테일러링이 들어간 각진 어깨와 허리 라인의 실루엣이 특징. 모헤어 울의 헤어리한 텍스쳐와 만나 섹시한 무드를 자아내는 확실한 차별점을 가지고있다.',
    hashtags: ['후드티', '기본템'],
    curationProducts: [
      {
        brandName: 'forher',
        name: 'For Her·NAPPING CROP HOODIE ZIP UP',
        price: 10400,
        image: '/assets/temp/forher.jpeg',
        description: '',
        relativeContents: []
      },
      {
        brandName: 'forher',
        name: 'For Her·NAPPING CROP HOODIE ZIP UP',
        price: 10400,
        image: '/assets/temp/forher.jpeg',
        description: '',
        relativeContents: []
      }
    ]
  },
  {
    title: '기본 후드티 추천',
    representativeImage: '/assets/temp/forher.jpeg',
    content:
      '스웨덴을 기반으로 다양한 하위문화를 전통적인 패브릭을 통해 풀어 나가는 브랜드 아워레가시. 국내에서 큰 사랑을 받는 브랜드인 만큼 코트 또한 유명하다. 넉넉한 사이즈의 제품이지만 테일러링이 들어간 각진 어깨와 허리 라인의 실루엣이 특징. 모헤어 울의 헤어리한 텍스쳐와 만나 섹시한 무드를 자아내는 확실한 차별점을 가지고있다.',
    hashtags: ['후드티', '기본템'],
    curationProducts: [
      {
        brandName: 'forher',
        name: 'For Her·NAPPING CROP HOODIE ZIP UP',
        price: 10400,
        image: '/assets/temp/forher.jpeg',
        description: '',
        relativeContents: []
      },
      {
        brandName: 'forher',
        name: 'For Her·NAPPING CROP HOODIE ZIP UP',
        price: 10400,
        image: '/assets/temp/forher.jpeg',
        description: '',
        relativeContents: []
      }
    ]
  }
]

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
