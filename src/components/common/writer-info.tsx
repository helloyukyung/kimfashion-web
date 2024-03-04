import dayjs from 'dayjs'
import Image from 'next/image'

interface WriterInfoProps {
  profileImage: string
  nickname: string
  createdAt: string
}

function WriterInfo({profileImage, nickname, createdAt}: WriterInfoProps) {
  return (
    <div className="flex items-center gap-[10px] pb-[12px] pl-[4px] pt-[8px]">
      <Image
        priority
        className="h-[32px] w-[32px] rounded-[100px]"
        width={32}
        height={32}
        src={profileImage}
        alt="logo"
      />
      <div>
        <span>{nickname}</span>
        <span className="px-[4px] text-[#737373]">·</span>
        <span className="text-[#737373]">{dayjs(createdAt).format('YYYY.MM.DD')}</span>
      </div>
    </div>
  )
}

export default WriterInfo
