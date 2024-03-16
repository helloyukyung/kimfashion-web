import {supabase} from '@/lib/supabase'

export interface News {
  id: number
  title: string
  content: string
  representativeImage: string
  created_at: string
  hashtags: string[]
}

export const getNewsList = async () => {
  const {data, error} = await supabase.from('news').select('*').range(0, 10)

  if (error) {
    throw error
  }
  return data as News[]
}

export const getNews = async (id: string) => {
  const {data, error} = await supabase.from('news').select('*').eq('id', id)

  if (error) {
    throw error
  }
  return data[0] as News
}
