import {HTMLProps, forwardRef} from 'react'

export interface InputProps extends HTMLProps<HTMLInputElement> {}

function Input(props: InputProps, ref: React.Ref<HTMLInputElement>) {
  return <input className="w-full rounded border p-5" ref={ref} {...props} />
}

export default forwardRef(Input)
