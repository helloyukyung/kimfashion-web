'use client'

import Link from 'next/link'
import {useState} from 'react'
import {CiInstagram, CiMail} from 'react-icons/ci'
import {MdClose, MdOutlineMenu} from 'react-icons/md'
import Logo from '../common/logo'
import NavLink from './nav-link'

const EMAIL = 'mailto:official.kimfashion@gmail.com'
const INSTAGRAM_URL = 'https://www.instagram.com/kimfashion_news'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  const handleClickMenuOpen = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleCloseMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="fixed z-[var(--z-header)] flex max-h-[100dvh] min-w-full flex-row items-center justify-between bg-black px-8 py-4 text-white laptop:min-h-[100dvh] laptop:min-w-[220px] laptop:flex-col laptop:justify-center laptop:px-[12px] laptop:py-[20px]">
      <button
        onClick={handleClickMenuOpen}
        className="hover-animation left-[10px] top-[9px] hover:text-[var(--primary-01)] laptop:absolute laptop:hidden"
      >
        {isMenuOpen ? <MdClose size="30px" /> : <MdOutlineMenu size="30px" />}
      </button>
      <Link href="/" onClick={handleCloseMenu} className="w-[60px] laptop:my-[40px] laptop:w-[140px]">
        <Logo className="laptop:text-[3.2rem]" />
      </Link>
      <div
        onClick={handleCloseMenu}
        className={`${
          isMenuOpen ? 'visible translate-x-0 opacity-100 duration-500' : 'invisible -translate-x-full opacity-0'
        } fixed left-0 top-[50px] w-full flex-col items-start bg-black pb-5 pl-16 transition-all laptop:visible laptop:static laptop:flex laptop:max-w-[140px] laptop:flex-1 laptop:translate-x-0 laptop:pl-0 laptop:opacity-100`}
      >
        <NavLink href="/news">NEWS</NavLink>
        <NavLink href="/look-info">LOOK INFO</NavLink>
      </div>
      <address className="flex gap-[10px] text-[1.2rem]">
        <a href={EMAIL} className="hover-animation hover:text-[var(--primary-01)]">
          <CiMail size="24px" />
        </a>
        <a target="_blank" href={INSTAGRAM_URL} className="hover-animation hover:text-[var(--primary-01)]">
          <CiInstagram size="24px" />
        </a>
      </address>
    </div>
  )
}

export default Header
