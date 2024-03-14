import {getNewsList} from '@/api/news'
import NewsList from '@/components/news/news-list'

export default async function Page() {
  const newsList = await getNewsList()
  return (
    <main className="w-full flex flex-col-reverse items-center justify-center gap-[20px] px-[var(--side-padding)] laptop:flex-row laptop:items-start laptop:gap-[64px]">
      <div className="w-full flex max-w-[480px] flex-col justify-center">
        <h1 className="font-pd mb-[12px] text-[3.2rem] font-bold">NEWS</h1>
        <NewsList newsList={newsList} />
      </div>
      {/* <RecommendPostList /> */}
    </main>
  )
}
