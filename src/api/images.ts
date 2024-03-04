import {supabase} from '@/lib/supabase'
import {v4 as uuidv4} from 'uuid'

interface GetImageUrlParams {
  fileList: FileList
  imageType: string
}
export const getImageUrl = async ({fileList, imageType}: GetImageUrlParams) => {
  const fileArray = Array.prototype.slice.call(fileList)
  const {data, error} = await supabase.storage.from('images').upload(imageType + '/' + uuidv4(), fileArray[0] as File)
  if (data) {
    const filePath = process.env.NEXT_PUBLIC_SUPABASE_URL + '/storage/v1/object/public/images/' + data.path
    return filePath
  }
  if (error) {
    throw Error
  }
}
