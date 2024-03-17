import {supabase} from '@/lib/supabase'

const PATH = 'news'
export interface News {
  id: number
  title: string
  content: string
  representativeImage: string
  created_at: string
  hashtags: string[]
}

interface PatchNews extends Partial<News> {}

export const getNewsList = async () => {
  const {data, error} = await supabase.from(PATH).select('*').range(0, 10)
  if (error) {
    throw error
  }
  return data as News[]
}

export const getNews = async (id: number) => {
  const {data, error} = await supabase.from(PATH).select('*').eq('id', id)
  if (error) {
    throw error
  }
  return data[0] as News
}
export const postNews = async (data: PatchNews) => {
  const response = await supabase.from(PATH).insert(data).select()
  return response
}

export const patchNews = async (id: number, data: PatchNews) => {
  const response = await supabase.from(PATH).update(data).eq('id', id).select()
  return response
}
