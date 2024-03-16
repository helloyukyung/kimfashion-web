'use client'
import Link from 'next/link'
import {usePathname} from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink = ({href, children}: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`block w-full py-[8px] ${isActive ? 'text-[var(--primary-01)]' : 'hover:text-[var(--primary-01)]'}`}
    >
      {children}
    </Link>
  )
}

export default NavLink
