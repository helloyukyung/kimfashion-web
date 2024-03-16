import {supabase} from '@/lib/supabase'

export interface LookInfo {
  id: number
  title: string
  name: string
  image: string
  imageSource: string
  hashtags: string[]
  infos: {
    x: number
    y: number
    url: string
  }[]
}

export interface PostLookInfo extends Omit<LookInfo, 'id'> {}

export const getLookInfoList = async () => {
  const {data, error} = await supabase.from('look-info').select('*')
  if (error) {
    throw error
  }
  return data as LookInfo[]
}

export const getLookInfo = async (id: string) => {
  const {data, error} = await supabase.from('look-info').select('*').eq('id', id)
  if (error) {
    throw error
  }
  return data[0] as LookInfo
}

export const postLookInfo = async (lookInfo: PostLookInfo) => {
  const response = await supabase.from('look-info').insert(lookInfo)

  return response
}
