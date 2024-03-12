import {supabase} from '@/lib/supabase'

export interface Curation {
  id: number
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
  image: string | FileList
  description: string
  relativeContents?: any[]
}

export const getCurationList = async () => {
  const {data, error} = await supabase.from('curation').select('*')

  if (error) {
    throw error
  }
  return data as Curation[]
}
export const getCuration = async (id: string) => {
  const {data, error} = await supabase.from('curation').select('*').eq('id', id)

  if (error) {
    throw error
  }
  return data[0] as Curation
}
