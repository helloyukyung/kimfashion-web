import {LookInfo} from '@/api/look-info'
import LookInfoItem from './look-info-item'

interface LookInfoListProps {
  lookInfoList: LookInfo[]
}
function LookInfoList({lookInfoList}: LookInfoListProps) {
  return (
    <div className="grid grid-cols-3 gap-[6px]">
      {lookInfoList.map((lookInfo, index) => (
        <LookInfoItem key={index} lookInfo={lookInfo} />
      ))}
    </div>
  )
}

export default LookInfoList
