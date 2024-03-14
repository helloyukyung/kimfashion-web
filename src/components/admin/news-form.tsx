'use client'
import {getImageUrl} from '@/api/images'
import Button from '@/components/common/button'
import FileInput from '@/components/common/file-input'
import Form from '@/components/common/form'
import Input from '@/components/common/input'
import {supabase} from '@/lib/supabase'
import {zodResolver} from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import * as z from 'zod'

const ContentEditor = dynamic(() => import('@/components/common/content-editor'), {ssr: false})

export const extractHashtags = (input: string) => {
  const hashtags: string[] = input.match(/#[ㄱ-힣a-zA-Z]+\w*/g) || []

  return hashtags.map(function (tag) {
    return tag.replace('#', '')
  })
}

interface FormValues {
  title: string
  representativeImage: FileList
  content: string
  hashtags: string
}

const schema = z.object({
  title: z.string().trim().min(1, {message: '제목을 입력해주세요.'}),
  representativeImage: z.any().refine((value) => value.length > 0, {message: '대표 이미지를 업로드해주세요.'}),
  content: z.string().trim().min(1, {message: '내용을 입력해주세요.'}),
  hashtags: z
    .string()
    .trim()
    .min(1, {message: '해시태그를 입력해주세요.'})
    .refine(
      (value) => {
        const hashtags = value.split(/\s+/)
        const pattern = /^#[\wㄱ-힣]+(\s+#[\wㄱ-힣]+)*$/
        return hashtags.every((tag) => pattern.test(tag))
      },
      {message: '#김패션 #패션뉴스 ... 형식으로 입력해주세요.'}
    )
    .refine(
      (value) => {
        const hashtags = value.split(/\s+/)
        if (hashtags.length > 5) return false
        else return true
      },
      {message: '최대 5개의 해시태그를 입력해주세요'}
    )
})

function NewsForm() {
  const form = useForm({mode: 'all', resolver: zodResolver(schema)})

  const handleSubmit = async (values: FormValues) => {
    const {representativeImage, hashtags, ...rest} = values
    const representativeImageUrl = await getImageUrl({fileList: representativeImage, imageType: 'news'})

    const {error} = await supabase
      .from('news')
      .insert({...values, representativeImage: representativeImageUrl, hashtags: extractHashtags(hashtags)})

    if (error) return toast.error(error.message)
    toast.success('성공적으로 글을 올렸습니다.')
  }

  return (
    <>
      <h1 className="font-pd mb-[12px] text-[2.8rem] font-bold">News</h1>
      <Form form={form} onSubmit={handleSubmit}>
        <Form.Item label="제목" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="대표이미지" name="representativeImage">
          <FileInput imageType="news" />
        </Form.Item>
        <Form.Item label="해시태그" name="hashtags">
          <Input />
        </Form.Item>
        <ContentEditor />
        <Button full type="submit">
          제출
        </Button>
      </Form>
    </>
  )
}

export default NewsForm
