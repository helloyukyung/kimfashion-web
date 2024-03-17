import Image from 'next/image'
import {ChangeEvent, forwardRef, useState} from 'react'
import {useFormContext} from 'react-hook-form'
import {InputProps} from '../input'
type ImageType = 'news' | 'curation' | 'look-info'
interface FileInputProps extends InputProps {
  imageType: ImageType
}

function FileInput({imageType, ...props}: FileInputProps, ref: any) {
  const {getValues} = useFormContext()
  const {onChange, ...rest} = props
  const defaultValue = props?.name && getValues(props?.name)
  const [tempFileUrl, setTempFileUrl] = useState<string>()

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const file = e.target.files[0]
    setTempFileUrl(URL.createObjectURL(file))
  }

  return (
    <>
      <input type="file" onChange={handleChange} className="w-full rounded border p-5" ref={ref} {...rest} />
      {typeof defaultValue === 'string' && (
        <Image priority width={100} height={100} src={defaultValue} alt="tempFile" />
      )}
      <div>{tempFileUrl && <Image priority width={100} height={100} src={tempFileUrl} alt="tempFile" />}</div>
    </>
  )
}

export default forwardRef(FileInput)
