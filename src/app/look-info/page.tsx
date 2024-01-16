import Subtitle from '@/components/common/subtitle'
import LookInfoList from '@/components/look-info/look-info-list'

export default async function Page() {
  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <h1 className="mb-[12px] font-fontPairDisplay text-[3.2rem] font-bold">CELEBRITY&apos;S LOOK INFO</h1>
      <Subtitle>연애인들의 공항, SNS 사진 속 옷 정보와 구매 링크까지 바로 확인해보세요.</Subtitle>
      <LookInfoList />
    </main>
  )
}
