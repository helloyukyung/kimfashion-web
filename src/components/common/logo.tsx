import Image from 'next/image'

interface LogoProps {
  className?: string
  width: number
  height: number
}
const Logo = ({...props}: LogoProps) => {
  return <Image src={'/assets/logo.png'} {...props} alt="kimfashion_logo" />
}

export default Logo