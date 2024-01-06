import LookInfoItem from './look-info-item'

function LookInfoList() {
  return (
    <div className="grid grid-cols-3 gap-[6px]">
      {['', '', '', ''].map((item, index) => (
        <LookInfoItem key={index} />
      ))}
    </div>
  )
}

export default LookInfoList
