import Image from 'next/image'

function LookInfoItem() {
  return (
    <div className="laptop:min-w-[200px]">
      <Image
        className="h-[full] w-[full] rounded hover:bg-[pink]"
        width={300}
        height={300}
        src="/assets/temp/test_2.jpeg"
        alt="temp"
      />
    </div>
  )
}

export default LookInfoItem
