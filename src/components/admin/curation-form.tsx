'use client'
import {Curation, CurationProduct} from '@/api/curations'
import {getImageUrl} from '@/api/images'
import {supabase} from '@/lib/supabase'
import {zodResolver} from '@hookform/resolvers/zod'
import {useForm} from 'react-hook-form'
import {toast} from 'react-toastify'
import * as z from 'zod'
import Button from '../common/button'
import FileInput from '../common/file-input'
import Form from '../common/form'
import Input from '../common/input'

const productSchema = z.object({
  brandName: z.string().trim().min(1, {message: '브랜드명을 입력해주세요.'}),
  name: z.string().trim().min(1, {message: '제품명을 입력해주세요.'}),
  price: z.number().min(0, {message: '가격을 입력해주세요.'}),
  image: z.any().refine((value) => value.length > 0, {message: '제품 사진을 업로드해주세요.'}),
  description: z.string().trim().min(1, {message: '제품 설명을 입력해주세요.'})
})

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
    ),
  products: z.array(productSchema)
})

interface FormValues extends Omit<Curation, 'created_at' | 'hashtags' | 'products' | 'representativeImage'> {
  title: string
  representativeImage: FileList
  content: string
  hashtags: string
  products: CurationProduct[]
}

function CurationForm() {
  const form = useForm({mode: 'all', resolver: zodResolver(schema)})

  const handleSubmit = async (values: FormValues) => {
    const {representativeImage, hashtags, products, ...rest} = values
    const representativeImageUrl = await getImageUrl({fileList: representativeImage, imageType: 'news'})
    const productImageUrls = await Promise.all(
      products.map(async (product: CurationProduct) => {
        return await getImageUrl({fileList: product.image as FileList, imageType: 'news'})
      })
    )

    const updatedValues = {
      ...rest,
      representativeImage: representativeImageUrl,
      products: values.products.map((product, index) => ({
        ...product,
        image: productImageUrls[index]
      }))
    }

    const {error} = await supabase.from('curation').insert(updatedValues)

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
            <div>
              <Form.Item label="브랜드명" name={`products.${index}.brandName`}>
                <Input />
              </Form.Item>
              <Form.Item label="제품명" name={`products.${index}.name`}>
                <Input />
              </Form.Item>
              <Form.Item label="가격" registerOptions={{valueAsNumber: true}} name={`products.${index}.price`}>
                <Input type="number" />
              </Form.Item>
              <Form.Item label="제품 사진" name={`products.${index}.image`}>
                <FileInput imageType="news" />
              </Form.Item>
              <Form.Item label="제품 설명" name={`products.${index}.description`}>
                <Input />
              </Form.Item>
            </div>
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
