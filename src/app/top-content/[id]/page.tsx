import Title from "@/components/common/title";
import WriterInfo from "@/components/common/writer-info";
import Image from "next/image";

export default function Page() {
  return (
    <main className="w-full p-[10px] mx-auto max-w-[780px]">
      <Title>기본 후드티 TOP5 추천</Title>
      <WriterInfo
        profileImage="/assets/temp/marieclaire.png"
        nickname="김패션"
        createdAt="2022.02.02"
      />
      {/* 전체 설명 */}
      <p className="text-[1.4rem] pb-[20px]">
        스웨덴을 기반으로 다양한 하위문화를 전통적인 패브릭을 통해 풀어 나가는
        브랜드 아워레가시. 국내에서 큰 사랑을 받는 브랜드인 만큼 코트 또한
        유명하다. 넉넉한 사이즈의 제품이지만 테일러링이 들어간 각진 어깨와 허리
        라인의 실루엣이 특징. 모헤어 울의 헤어리한 텍스쳐와 만나 섹시한 무드를
        자아내는 확실한 차별점을 가지고있다.
        <br />
        <br /> 스웨덴을 기반으로 다양한 하위문화를 전통적인 패브릭을 통해 풀어
        나가는 브랜드 아워레가시. 국내에서 큰 사랑을 받는 브랜드인 만큼 코트
        또한 유명하다. 넉넉한 사이즈의 제품이지만 테일러링이 들어간 각진 어깨와
        허리 라인의 실루엣이 특징. 모헤어 울의 헤어리한 텍스쳐와 만나 섹시한
        무드를 자아내는 확실한 차별점을 가지고있다.
      </p>
      {["", ""].map((item, index) => (
        <div className="my-[20px]" key={index}>
          <h3 className="text-[1.8rem] font-bold pb-[10px]">
            {index + 1}. For Her·NAPPING CROP HOODIE ZIP UP
          </h3>
          <div className="flex flex-col tablet:flex-row gap-[10px] tablet:h-[320px]">
            <div className="relative tablet:min-w-[300px] overflow-hidden pb-full tablet:pb-[320px]">
              <Image
                width={600}
                height={400}
                className="tablet:absolute tablet:h-[320px] rounded object-cover"
                src="/assets/temp/forher.jpeg"
                alt="temp"
              />
            </div>
            <div className="pt-[4px] h-full flex flex-col justify-end gap-[15px]">
              <div>
                <h3 className="text-[1.6rem] font-bold">For Her</h3>
                <p className="font-semibold py-[4px]">
                  NAPPING CROP HOODIE ZIP UP (2ND DROP)
                </p>
                <p>KRW 104,000</p>
              </div>
              <p className="py-[10px]">
                스웨덴을 기반으로 다양한 하위문화를 전통적인 패브릭을 통해 풀어
                나가는 브랜드 아워레가시. 국내에서 큰 사랑을 받는 브랜드인 만큼
                코트 또한 유명하다. 넉넉한 사이즈의 제품이지만 테일러링이 들어간
                각진 어깨와 허리 라인의 실루엣이 특징. 모헤어 울의 헤어리한
                텍스쳐와 만나 섹시한 무드를 자아내는 확실한 차별점을 가지고있다.
              </p>
              <button className="bg-[black] text-[white] w-full p-[12px] rounded">
                구매하러 가기
              </button>
            </div>
          </div>
          <p className="text-[1.6rem] py-[8px] font-bold">연관 컨텐츠</p>
          <div className="w-[100%] flex gap-[10px] overflow-x-scroll">
            {["", "", ""].map((item, index) => (
              <div
                className="flex gap-[4px] p-[8px] hover:bg-[#f9f9f9] rounded"
                key={index}
              >
                <Image
                  width={100}
                  height={100}
                  className="rounded"
                  src="/assets/temp/review.svg"
                  alt="temp"
                />
                <div className="w-[230px]">
                  <p className="py-[3px]">SHOP FOR.HER</p>
                  <p className="text-[#c7c7c7] text-[1.2rem]">
                    간절기 템으로 후드 집업을 찾다 구입한 샵포허의 크롭
                    후디집업에 대해서 ...
                  </p>
                </div>
              </div>
            ))}
          </div>
          <hr className="my-[24px]" />
        </div>
      ))}
    </main>
  );
}
