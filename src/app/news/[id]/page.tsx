import {getNews} from '@/api/news'
import Content from '@/components/common/content'
import Hashtag from '@/components/common/hashtag'
import WriterInfo from '@/components/common/writer-info'

export default async function Page({params}: {params: {id: string}}) {
  const data = await getNews(Number(params.id))

  if (!data) return null
  return (
    <main className="mx-auto w-full max-w-[538px] p-[10px]">
      <h1 className="mb-[12px] text-[3.2rem] font-bold uppercase">{data.title}</h1>
      <WriterInfo profileImage="/assets/kimfashion_logo.png" nickname="김패션" createdAt={data.created_at} />
      <div className="py-[8px]">{data.hashtags?.map((hashtag, index) => <Hashtag text={hashtag} key={index} />)}</div>
      <Content value={data.content} />
    </main>
  )
}
