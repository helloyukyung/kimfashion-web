'use client'

import Button from '@/components/common/button'
import Form from '@/components/common/form'
import Input from '@/components/common/input'
import {createClientComponentClient} from '@supabase/auth-helpers-nextjs'
import {useRouter} from 'next/navigation'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'

interface FormValues {
  email: string
  password: string
}

export default function Page() {
  const router = useRouter()
  const form = useForm<FormValues>()
  const supabase = createClientComponentClient()

  const handleSignIn = async (values: FormValues) => {
    try {
      const {data, error} = await supabase.auth.signInWithPassword(values)
      if (error) return toast.error(error.message)
      if (data.user) {
        router.replace('/admin/dashboard/new')
      }
    } catch (e: any) {
      toast.error(`로그인이 불가능합니다(${e.message})`)
    }
  }

  return (
    <main className="flex w-full max-w-[450px] flex-col justify-center px-[var(--side-padding)]">
      <h1 className="mb-16 font-pd text-[3.2rem] font-bold uppercase">로그인</h1>
      <Form form={form} onSubmit={handleSignIn} className="flex flex-col gap-4">
        <Form.Item label="아이디" name="email" registerOptions={{required: '이메일을 입력해주세요.'}}>
          <Input placeholder="아이디를 입력해주세요." />
        </Form.Item>
        <Form.Item label="비밀번호" name="password" registerOptions={{required: '비밀번호를 입력해주세요.'}}>
          <Input placeholder="아이디를 입력해주세요." />
        </Form.Item>

        <Button type="submit">로그인</Button>
      </Form>
    </main>
  )
}
