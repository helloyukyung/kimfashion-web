'use client'

import Link from 'next/link'
import {useState} from 'react'
import {CiInstagram, CiMail} from 'react-icons/ci'
import {MdClose, MdOutlineMenu} from 'react-icons/md'
import Logo from '../common/logo'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleClickMenuOpen = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed z-[var(--z-header)] flex max-h-[100dvh] min-h-[50px] min-w-full flex-col items-center justify-center bg-black text-white laptop:min-h-[100dvh] laptop:min-w-[220px] laptop:px-[12px] laptop:py-[20px]">
      <button
        onClick={handleClickMenuOpen}
        className="absolute left-[10px] top-[9px] hover:text-[var(--primary-01)] laptop:hidden"
      >
        {isMenuOpen ? <MdClose size="30px" /> : <MdOutlineMenu size="30px" />}
      </button>
      <Link href="/" onClick={handleCloseMenu} className="w-[60px] laptop:my-[40px] laptop:w-[140px]">
        <Logo width={150} height={150} />
      </Link>
      <div
        onClick={handleCloseMenu}
        className={`${
          isMenuOpen ? 'visible translate-x-0 opacity-100 duration-500' : 'invisible -translate-x-full opacity-0'
        } fixed top-[50px] w-full flex-col items-start bg-black pb-[10px] pl-[20px] transition-all laptop:visible laptop:static laptop:flex laptop:max-w-[140px] laptop:flex-1 laptop:translate-x-0 laptop:pl-0 laptop:opacity-100`}
      >
        <Link href="/news" className="block w-full py-[8px] hover:text-[var(--primary-01)]">
          NEWS
        </Link>
        {/* <Link href="/curation" className="block w-full py-[8px] hover:text-[var(--primary-01)]">
          CURATION
        </Link> */}
        {/* <Link href="/look-info" className="block w-full py-[8px] hover:text-[var(--primary-01)]">
          LOOK INFO
        </Link> */}
      </div>
      <address className="hidden gap-[10px] text-[1.2rem] laptop:flex">
        <a href="mailto:official.kimfashion@gmail.com" className="hover:text-[var(--primary-01)]">
          <CiMail size="24px" />
        </a>
        <a target="_blank" href="https://www.instagram.com/kimfashion_news" className="hover:text-[var(--primary-01)]">
          <CiInstagram size="24px" />
        </a>
      </address>
    </div>
  )
}

export default Header
