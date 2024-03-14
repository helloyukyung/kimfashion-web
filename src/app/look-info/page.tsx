import {getLookInfoList} from '@/api/look-info'
import Subtitle from '@/components/common/subtitle'
import LookInfoList from '@/components/look-info/look-info-list'

export default async function Page() {
  const lookInfoList = await getLookInfoList()
  return (
    <main className="w-full flex max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <h1 className="font-pd mb-[12px] text-[3.2rem] font-bold">LOOK INFO</h1>
      <Subtitle>사진 속 옷 정보와 구매 링크까지 바로 확인해보세요.</Subtitle>
      <LookInfoList lookInfoList={lookInfoList} />
    </main>
  )
}
