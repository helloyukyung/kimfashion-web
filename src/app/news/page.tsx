import PostList from '@/components/post/post-list'
import RecommendPostList from '@/components/post/recommend-post-list'

export default async function Page() {
  return (
    <main className="box-border flex w-full flex-col-reverse items-center justify-center gap-[20px] p-[10px] laptop:flex-row laptop:items-start laptop:gap-[64px]">
      <PostList title="news" />
      <RecommendPostList />
    </main>
  )
}
