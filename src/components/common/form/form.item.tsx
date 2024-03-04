import {ErrorMessage} from '@hookform/error-message'
import {FC, PropsWithChildren, ReactElement, cloneElement} from 'react'
import {FieldValues, RegisterOptions, useFormContext} from 'react-hook-form'
export interface FormItemProps {
  name: string
  label?: string
  required?: boolean
  valueAsNumber?: boolean
  valueAsDate?: boolean
  registerOptions?: RegisterOptions<FieldValues, string>
}

export const FormItem: FC<PropsWithChildren<FormItemProps>> = ({
  name,
  children,
  label,
  registerOptions
}: PropsWithChildren<FormItemProps>) => {
  const {
    register,
    getFieldState,
    formState: {errors}
  } = useFormContext()
  const {error} = getFieldState(name)

  return (
    <div className="flex flex-col gap-1 pb-4">
      <div className="flex flex-col gap-2">
        {label && (
          <label className="text-[#334454]" htmlFor={name}>
            {label}
          </label>
        )}
        {cloneElement(children as ReactElement, {
          id: name,
          status: error ? 'error' : undefined,
          ...register(name, {
            ...registerOptions
          })
        })}
      </div>
      {error && (
        <p>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({message}) => <span className="text-[1.2rem] text-[var(--hashtag)]">{`${message}`}</span>}
          />
        </p>
      )}
    </div>
  )
}
