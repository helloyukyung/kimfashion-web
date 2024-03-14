'use client'
import {getImageUrl} from '@/api/images'
import {PostLookInfo, postLookInfo} from '@/api/look-info'
import Button from '@/components/common/button'
import FileInput from '@/components/common/file-input'
import Form from '@/components/common/form'
import Input from '@/components/common/input'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import * as z from 'zod'
import {extractHashtags} from './news-form'

interface FormValues extends Omit<PostLookInfo, 'image' | 'hashtags'> {
  image: FileList
  hashtags: string
}

const schema = z.object({
  title: z.string().trim().min(1, {message: '제목을 입력해주세요.'}),
  name: z.string().trim().min(1, {message: '이름을 입력해주세요.'}),
  image: z.any().refine((value) => value.length > 0, {message: '이미지를 업로드해주세요.'}),
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
    ),
  infos: z.array(
    z.object({
      x: z.number().min(0, {message: 'x값을 입력해주세요.'}),
      y: z.number().min(0, {message: 'y값을 입력해주세요.'}),
      url: z.string().trim().min(1, {message: '제품 구매 링크를 입력해주세요.'})
    })
  )
})

function LookInfoForm() {
  const form = useForm({mode: 'all', resolver: zodResolver(schema)})

  const handleSubmit = async (values: FormValues) => {
    const {image, hashtags, ...rest} = values
    const imageUrl: string = (await getImageUrl({fileList: image, imageType: 'look-info'})) || ''

    console.log(imageUrl, hashtags, rest)
    const {error} = await postLookInfo({image: imageUrl, hashtags: extractHashtags(hashtags), ...rest})
    if (error) return toast.error(error.message)
    toast.success('성공적으로 글을 올렸습니다.')
  }

  return (
    <>
      <h1 className="font-pd mb-[12px] text-[2.8rem] font-bold">LookInfo</h1>
      <Form form={form} onSubmit={handleSubmit}>
        <Form.Item label="제목" name="title">
          <Input />
        </Form.Item>
        <Form.Item label="이름" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="이미지" name="image">
          <FileInput imageType="news" />
        </Form.Item>
        <Form.Item label="해시태그" name="hashtags">
          <Input />
        </Form.Item>
        <Form.List
          name="infos"
          label="정보"
          renderField={(index) => (
            <>
              <Form.Item label="x 좌표" registerOptions={{valueAsNumber: true}} name={`infos.${index}.x`}>
                <Input type="number" />
              </Form.Item>
              <Form.Item label="y 좌표" registerOptions={{valueAsNumber: true}} name={`infos.${index}.y`}>
                <Input type="number" />
              </Form.Item>
              <Form.Item label="상품 url" name={`infos.${index}.url`}>
                <Input />
              </Form.Item>
            </>
          )}
        />
        <Button full type="submit">
          제출
        </Button>
      </Form>
    </>
  )
}

export default LookInfoForm
