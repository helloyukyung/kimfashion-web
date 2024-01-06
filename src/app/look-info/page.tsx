import LookInfoList from '@/components/look-info/look-info-list'

export default async function Page() {
  return (
    <main className="flex w-full max-w-[900px] flex-col justify-center px-[var(--side-padding)]">
      <h2 className="mb-[12px] text-[3.2rem] font-bold uppercase">CELEBRITY&apos;S LOOK INFO</h2>
      <LookInfoList />
    </main>
  )
}
