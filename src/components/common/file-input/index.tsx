import Image from 'next/image'
import {ChangeEvent, forwardRef, useState} from 'react'
import {InputProps} from '../input'
type ImageType = 'news' | 'curation' | 'look-info'
interface FileInputProps extends InputProps {
  imageType: ImageType
}

function FileInput({imageType, ...props}: FileInputProps, ref: any) {
  const {onChange, ...rest} = props
  const [tempFileUrl, setTempFileUrl] = useState<string[]>([])

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const fileArray = Array.prototype.slice.call(e.target.files)
    const fileUrls = fileArray.map((file: File) => URL.createObjectURL(file))
    setTempFileUrl(fileUrls)
  }

  return (
    <>
      <input type="file" onChange={handleChange} className="w-full rounded border p-5" ref={ref} {...rest} />
      <div>
        {tempFileUrl.length > 0 &&
          tempFileUrl.map((url) => <Image key={url} width={100} height={100} src={url} alt="tempFile" />)}
      </div>
    </>
  )
}

export default forwardRef(FileInput)
