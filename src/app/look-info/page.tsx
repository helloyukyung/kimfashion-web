import Subtitle from '@/components/common/subtitle'
import LookInfoList from '@/components/look-info/look-info-list'

export default async function Page() {
  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <h2 className="mb-[12px] text-[3.2rem] font-bold uppercase">CELEBRITY&apos;S LOOK INFO</h2>
      <Subtitle>연애인들의 공항, SNS 사진 속 옷 정보를 공유합니다. 👀</Subtitle>
      <LookInfoList />
    </main>
  )
}
