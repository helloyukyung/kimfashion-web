import PostList from '@/components/post/post-list'
import RecommendPostItem from '@/components/post/recomend-post-item'

export default async function Page() {
  return (
    <main className="box-border flex w-full flex-col items-center justify-center gap-[20px] p-[10px] laptop:flex-row laptop:items-start laptop:gap-[64px] ">
      <PostList title="news" />
      <div className="w-full min-w-[200px] max-w-[480px] laptop:max-w-[200px] laptop:pt-[60px]">
        <h3 className="mb-[8px] text-[16px] font-bold">추천 게시물</h3>
        <div className="scrollbar-hide flex max-w-full gap-[10px] overflow-hidden  overflow-x-scroll laptop:flex-col">
          {['', '', ''].map((item, index) => (
            <RecommendPostItem key={index} />
          ))}
        </div>
        <div className="mt-[10px] text-[10px] text-[lightgray]">© 2024 김패션 all rights reserved.</div>
      </div>
    </main>
  )
}
