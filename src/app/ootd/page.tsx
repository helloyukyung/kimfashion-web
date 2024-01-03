import OotdList from '@/components/ootd/ootd-list'

export default async function Page() {
  return (
    <main className="flex w-full max-w-[900px] flex-col justify-center px-[var(--side-padding)]">
      <h2 className="mb-[12px] text-[3.2rem] font-bold uppercase">ootd</h2>
      <OotdList />
    </main>
  )
}
