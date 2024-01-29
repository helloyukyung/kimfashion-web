'use client'
import {supabase} from '@/lib/supabase'
import {useRouter} from 'next/navigation'

export default function Page() {
  const route = useRouter()
  const handleLogout = async () => {
    const {error} = await supabase.auth.signOut()
    console.log('signout', error)
    route.refresh()
  }

  console.log('this is dashboard')

  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <button onClick={handleLogout}>Logout</button>
    </main>
  )
}
