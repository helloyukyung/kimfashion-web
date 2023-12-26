import {FaInstagram} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import Logo from '../Logo'
const Header = () => {
  return (
    <div className="sticky min-w-full flex h-[50px] laptop:min-h-[100dvh] laptop:min-w-[220px] flex-col items-center justify-center bg-black laptop:px-[12px] laptop:py-[20px] text-white">
      <Logo width={140} height={140} className="w-[50px] h-[50px] laptop:w-[140px] laptop:h-[140px]" />
      <ul className=" flex-1 flex-col items-start hidden laptop:flex">
        <li className="p-[8px]">NEWS</li>
        <li className="p-[8px]">TOP5</li>
        <li className="p-[8px]">OOTD</li>
        <li className="p-[8px]">CELEBRITY</li>
      </ul>
      <ul className="text-[12px] hidden laptop:block">
        <li className="flex items-center gap-[8px] pb-[4px]">
          <MdOutlineEmail size="14px" />
          kimfashion@gmail.com
        </li>
        <li className="flex items-center gap-[8px]">
          <FaInstagram size="14px" />
          kimfashion_news
        </li>
      </ul>
    </div>
  )
}

export default Header
