import PostList from '@/components/post/post-list'

export default async function Page() {
  return (
    <main className="flex w-full flex-col-reverse items-center justify-center gap-[20px] px-[var(--side-padding)] laptop:flex-row laptop:items-start laptop:gap-[64px]">
      <PostList title="top5" />
    </main>
  )
}
