'use client'
import {Curation, CurationProduct} from '@/api/curations'
import {supabase} from '@/lib/supabase'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import * as z from 'zod'
import Button from '../common/button'
import FileInput from '../common/file-input'
import Form from '../common/form'
import Input from '../common/input'
import {extractHashtags} from './news-form'
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

interface FormValues extends Omit<Curation, 'created_at' | 'hashtags' | 'products' | 'representativeImage'> {
  title: string
  representativeImage: FileList
  content: string
  hashtags: string
  products: CurationProduct[]
}

function CurationForm() {
  const form = useForm({mode: 'all'})

  const handleSubmit = async (values: FormValues) => {
    const {representativeImage, hashtags, ...rest} = values
    console.log('values', values)
    const {data, error} = await supabase.from('curation').insert({...values, hashtags: extractHashtags(hashtags)})
    console.log('data', data, 'error', error)
    if (error) {
      toast.error(error.message)
      return
    }
    toast.success('성공적으로 글을 올렸습니다.')
  }
  return (
    <>
      <h1 className="mb-[12px] font-fontPairDisplay text-[2.8rem] font-bold">Curation</h1>
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
        <Form.Item label="내용" name="content">
          <Input />
        </Form.Item>
        <Form.List
          name="products"
          label="추천 제품"
          renderField={(index) => (
            <>
              <Form.Item label="브랜드명" name={`products.${index}.brandName`}>
                <Input />
              </Form.Item>
              <Form.Item label="제품명" name={`products.${index}.name`}>
                <Input />
              </Form.Item>
              <Form.Item label="가격" name={`products.${index}.price`}>
                <Input type="number" min={0} />
              </Form.Item>
              <Form.Item label="제품 사진" name={`products.${index}.image`}>
                <FileInput imageType="news" />
              </Form.Item>
              <Form.Item label="제품 설명" name={`products.${index}.description`}>
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

export default CurationForm
