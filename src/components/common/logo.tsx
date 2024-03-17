interface LogoProps {
  className?: string
}

function Logo({className}: LogoProps) {
  return (
    <p className={`hover-animation font-pd font-bold hover:text-[var(--primary-01)] ${className}`}>
      KIM <br /> FASHION
    </p>
  )
}
export default Logo
