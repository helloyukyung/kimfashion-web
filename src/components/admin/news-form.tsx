'use client'
import {getImageUrl} from '@/api/images'
import {News, getNews, patchNews, postNews} from '@/api/news'
import Button from '@/components/common/button'
import FileInput from '@/components/common/file-input'
import Form from '@/components/common/form'
import Input from '@/components/common/input'
import {zodResolver} from '@hookform/resolvers/zod'
import dynamic from 'next/dynamic'
import {useParams, useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'
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

interface FormValues extends Omit<News, 'representativeImage' | 'hashtags'> {
  representativeImage: FileList | string
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
  const [initialLoading, setInitialLoading] = useState(true)
  const params = useParams<{id: string}>()
  const id = Number(params?.id) || 'new'
  const router = useRouter()
  const form = useForm({mode: 'all', resolver: zodResolver(schema)})

  const handleSubmit = async (values: FormValues) => {
    const {representativeImage, hashtags, ...rest} = values
    const representativeImageUrl =
      typeof representativeImage !== 'string'
        ? await getImageUrl({fileList: representativeImage, imageType: 'news'})
        : representativeImage

    const submitData = {
      ...rest,
      representativeImage: representativeImageUrl,
      hashtags: extractHashtags(hashtags)
    }

    if (id === 'new') {
      const {error, data} = await postNews(submitData)
      if (error) return toast.error(error.message)
      toast.success('성공적으로 글을 올렸습니다.')
      if (data[0]) router.push(`/news/${data[0].id}`)
      return
    } else {
      const {error} = await patchNews(id, submitData)
      if (error) return toast.error(error.message)
      toast.success('성공적으로 글을 수정했습니다.')
      router.push(`/news/${id}`)
    }
  }

  // 비동기 로직을 처리하는 별도의 함수
  const fetchNewsData = async () => {
    if (id === 'new') return setInitialLoading(false)

    try {
      const data = await getNews(id)
      if (data) {
        form.reset({
          ...data,
          hashtags: data.hashtags.map((tag) => `#${tag}`).join(' ')
        })
      }
    } catch (error) {
      console.error('글을 불러오는 데 실패했습니다.')
    } finally {
      setInitialLoading(false)
    }
  }

  useEffect(() => {
    fetchNewsData()
  }, [id])

  if (initialLoading) return <div>Loading</div>
  return (
    <>
      <h1 className="mb-[12px] font-pd text-[2.8rem] font-bold">News</h1>
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
          저장
        </Button>
      </Form>
    </>
  )
}

export default NewsForm
