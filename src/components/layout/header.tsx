'use client'
import {useCallback, useState} from 'react'
import {FaInstagram} from 'react-icons/fa'
import {MdClose, MdOutlineEmail, MdOutlineMenu} from 'react-icons/md'
import Logo from '../Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleClickMenuOpen = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  return (
    <div className="fixed laptop:sticky min-w-full flex min-h-[50px] laptop:min-h-[100dvh] laptop:min-w-[220px] flex-col items-center justify-center bg-black laptop:px-[12px] laptop:py-[20px] text-white">
      <button onClick={handleClickMenuOpen} className="absolute top-[9px] left-[10px] laptop:hidden">
        {isMenuOpen ? <MdClose size="30px" /> : <MdOutlineMenu size="30px" />}
      </button>
      <Logo width={140} height={140} className="w-[50px] h-[50px] laptop:w-[140px] laptop:h-[140px]" />
      <ul
        className={` ${
          isMenuOpen ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-full'
        } w-full transition-all duration-500 laptop:flex-1 flex-col items-start laptop:flex fixed top-[50px] bg-black laptop:static laptop:opacity-100 laptop:visible laptop:translate-x-0`}
      >
        <li className="pl-[20px] py-[8px]">NEWS</li>
        <li className="pl-[20px] py-[8px]">TOP5</li>
        <li className="pl-[20px] py-[8px]">OOTD</li>
        <li className="pl-[20px] py-[8px]">CELEBRITY</li>
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
