import Subtitle from "@/components/common/subtitle";
import Title from "@/components/common/title";
import LookInfoList from "@/components/look-info/look-info-list";

export default async function Page() {
  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <Title>CELEBRITY&apos;S LOOK INFO</Title>
      <Subtitle>
        연애인들의 공항, SNS 사진 속 옷 정보와 구매 링크까지 바로 확인해보세요.
      </Subtitle>
      <LookInfoList />
    </main>
  );
}
