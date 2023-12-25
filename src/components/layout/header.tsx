import {FaInstagram} from 'react-icons/fa'
import {MdOutlineEmail} from 'react-icons/md'
import Logo from '../Logo'
const Header = () => {
  return (
    <div className="sticky flex min-h-[100dvh] min-w-[220px] flex-col items-center bg-black px-[12px] py-[20px] text-white">
      <Logo />
      <ul className="flex flex-1 flex-col items-start">
        <li className="p-[8px]">NEWS</li>
        <li className="p-[8px]">OOTD</li>
        <li className="p-[8px]">CELEBRITY</li>
      </ul>
      <ul className="text-[12px]">
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
