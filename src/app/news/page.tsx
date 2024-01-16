import PostList from '@/components/post/post-list'
import RecommendPostList from '@/components/post/recommend-post-list'

export default async function Page() {
  return (
    <main className="flex w-full flex-col-reverse items-center justify-center gap-[20px] px-[var(--side-padding)] laptop:flex-row laptop:items-start laptop:gap-[64px]">
      <div className="flex w-full max-w-[480px] flex-col justify-center">
        <h1 className="mb-[12px] font-fontPairDisplay text-[3.2rem] font-bold">NEWS</h1>
        <PostList />
      </div>
      <RecommendPostList />
    </main>
  )
}
