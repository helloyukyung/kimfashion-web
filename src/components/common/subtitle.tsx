import {PropsWithChildren} from 'react'

interface SubtitleProps {}

function Subtitle({children}: PropsWithChildren<SubtitleProps>) {
  return <h2 className="py-[20px] text-[1.6rem] text-[gray]">{children}</h2>
}

export default Subtitle
