import Image from 'next/image'

interface LogoProps {
  className?: string
  width: number
  height: number
}
function Logo({...props}: LogoProps) {
  return <Image src={'/assets/logo.png'} priority {...props} alt="kimfashion_logo" />
}

export default Logo
