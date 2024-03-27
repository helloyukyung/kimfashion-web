import {LookInfo} from '@/api/look-info'
import Image from 'next/image'
import Link from 'next/link'
import {GiClothes} from 'react-icons/gi'
interface LookInfoItemProps {
  lookInfo: LookInfo
}
function LookInfoItem({lookInfo}: LookInfoItemProps) {
  return (
    <Link
      href={`/look-info/${lookInfo.id}`}
      className="hover::after:bg-opacity-[0.28] hover::after:bg-gray-500 hover::after:absolute hover::after:inset-0 hover::after:rounded group relative z-0"
    >
      <div className="relative w-full overflow-hidden pb-[120%] laptop:min-w-[200px]">
        <Image
          priority
          className="absolute left-0 top-0 h-full w-full rounded object-cover"
          width={280}
          height={280}
          src={lookInfo.image}
          alt={lookInfo.title}
        />
      </div>
      <div className="opacity-28 absolute inset-0 hidden items-center justify-center gap-[20px] rounded bg-[#0000008a] text-white group-hover:flex">
        <div className="flex gap-[10px]">
          <GiClothes />
          <span>{lookInfo.infos.length}</span>
        </div>
      </div>
    </Link>
  )
}

export default LookInfoItem
