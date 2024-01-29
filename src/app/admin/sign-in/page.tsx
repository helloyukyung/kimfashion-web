'use client'
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {useRouter} from 'next/navigation'
import {ChangeEvent, useState} from 'react'

export default function Page() {
  const router = useRouter()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const supabase = createClientComponentClient()

  const handleSignIn = async () => {
    try {
      const {data, error} = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      if (data.user) {
        router.replace('/admin/dashboard')
      }
    } catch (e) {
      console.log('e->', e)
    }
  }
  console.log('this is login')

  return (
    <main className="flex w-full max-w-[var(--max-layout-width)] flex-col justify-center px-[var(--side-padding)]">
      <h1 className="mb-[12px] font-fontPairDisplay text-[3.2rem] font-bold uppercase">로그인</h1>
      <label>email:</label>
      <input
        className="border"
        name="email"
        value={email}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (!e.target) return
          setEmail(e.target.value)
        }}
      />
      <label>password:</label>
      <input
        className="border"
        name="password"
        value={password}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (!e.target) return
          setPassword(e.target.value)
        }}
      />
      <button onClick={handleSignIn}>SIGN-IN</button>
    </main>
  )
}
