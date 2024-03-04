import {supabase} from '@/lib/supabase'

export interface Curation {
  title: string
  representativeImage: string
  content: string
  created_at: string
  hashtags: string[]
  products: CurationProduct[]
}

export interface CurationProduct {
  brandName: string
  name: string
  price: number
  image: string
  description: string
  relativeContents: any[]
}

export const getCurationList = async () => {
  const {data, error} = await supabase.from('curation').select('*').limit(10).range(0, 100)

  if (error) {
    throw error
  }
  return data as Curation[]
}
