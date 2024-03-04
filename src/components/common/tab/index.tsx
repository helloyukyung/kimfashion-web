'use client'
import Link from 'next/link'
import {usePathname, useSearchParams} from 'next/navigation'

import {ReactNode} from 'react'

interface TabProps {
  tabs: {title: string; children: ReactNode}[]
}

function Tab({tabs}: TabProps) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const currentTab = searchParams.get('tab') || tabs[0].title

  return (
    <div>
      <div className="flex p-5 text-[2.0rem]">
        {tabs.map((tab, index) => (
          <Link key={index} href={`${pathname}/?tab=${tab.title}`} passHref>
            <div className={`px-10 py-2 ${currentTab === tab.title ? 'border-b border-solid' : ''}`}>{tab.title}</div>
          </Link>
        ))}
      </div>
      <div>
        {tabs.map((tab, index) => (
          <div key={index} style={{display: currentTab === tab.title ? 'block' : 'none'}}>
            {tab.children}
          </div>
        ))}
      </div>
    </div>
  )
}
export default Tab
