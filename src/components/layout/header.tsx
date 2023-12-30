'use client'
import Link from 'next/link'
import {useCallback, useState} from 'react'
import {FaInstagram} from 'react-icons/fa'
import {MdClose, MdOutlineEmail, MdOutlineMenu} from 'react-icons/md'
import Logo from '../Logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleClickMenuOpen = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed flex min-h-[50px] min-w-full flex-col items-center justify-center bg-black text-white laptop:sticky laptop:min-h-[100dvh] laptop:min-w-[220px] laptop:px-[12px] laptop:py-[20px]">
      <button onClick={handleClickMenuOpen} className="absolute left-[10px] top-[9px] laptop:hidden">
        {isMenuOpen ? <MdClose size="30px" /> : <MdOutlineMenu size="30px" />}
      </button>
      <Link href="/" onClick={handleCloseMenu}>
        <Logo width={140} height={140} className="h-[50px] w-[50px] laptop:h-[140px] laptop:w-[140px]" />
      </Link>
      <ul
        onClick={handleCloseMenu}
        className={` ${
          isMenuOpen ? 'visible translate-x-0 opacity-100 duration-500' : 'invisible -translate-x-full opacity-0'
        } fixed top-[50px] w-full flex-col items-start bg-black transition-all laptop:visible laptop:static laptop:flex laptop:flex-1 laptop:translate-x-0 laptop:opacity-100`}
      >
        <li className="py-[8px] pl-[20px]">
          <Link href="/news">NEWS</Link>
        </li>
        <li className="py-[8px] pl-[20px]">
          <Link href="/top5">TOP5</Link>
        </li>
        <li className="py-[8px] pl-[20px]">
          <Link href="/">OOTD</Link>
        </li>
        <li className="py-[8px] pl-[20px]">
          <Link href="/">CELEBRITY</Link>
        </li>
      </ul>
      <ul className="hidden text-[12px] laptop:block">
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
