import {ButtonHTMLAttributes, PropsWithChildren} from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  styleType?: 'default' | 'white'
  full?: boolean
}

const Button = ({
  children,
  type = 'button',
  styleType = 'default',
  full = false,
  className,
  ...rest
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={`${full ? 'w-full' : ''} rounded p-6  ${styleType === 'default' ? 'bg-[black] text-[white] ' : 'border bg-[white] text-[black]'} ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  )
}

export default Button
