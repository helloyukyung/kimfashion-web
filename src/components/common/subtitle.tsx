import {PropsWithChildren} from 'react'

interface SubtitleProps {}

function Subtitle({children}: PropsWithChildren<SubtitleProps>) {
  return <p className="py-[20px] text-[1.6rem] text-[gray]">{children}</p>
}

export default Subtitle
