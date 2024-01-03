import OotdItem from './ootd-item'

function OotdList() {
  return (
    <div className="grid grid-cols-3 gap-[6px]">
      {['', '', '', ''].map((item, index) => (
        <OotdItem key={index} />
      ))}
    </div>
  )
}

export default OotdList
