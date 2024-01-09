import Image from 'next/image'
import {FaBookmark, FaRegEye} from 'react-icons/fa6'
function LookInfoItem() {
  return (
    <div className=" hover::after:bg-opacity-[0.28] hover::after:bg-gray-500 hover::after:absolute hover::after:inset-0 hover::after:rounded group relative z-0">
      <div className="laptop:min-w-[200px]">
        <Image
          className="h-[full] w-[full] rounded"
          width={300}
          height={300}
          src="/assets/temp/test_2.jpeg"
          alt="temp"
        />
      </div>
      <div className="opacity-28 absolute inset-0 hidden items-center justify-center gap-[20px] rounded bg-[#0000008a] text-white group-hover:flex">
        <div className="flex gap-[10px]">
          <FaRegEye /> <span>124</span>
        </div>
        <div className="flex gap-[10px]">
          <FaBookmark /> <span>28</span>
        </div>
      </div>
    </div>
  )
}

export default LookInfoItem
