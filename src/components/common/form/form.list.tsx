import {ErrorMessage} from '@hookform/error-message'
import {FC, PropsWithChildren, ReactNode} from 'react'
import {FieldValues, useFieldArray, useFormContext} from 'react-hook-form'
import Button from '../button'

export interface FormListProps<T extends FieldValues> {
  name: string
  label: string
  renderField: (index: number) => ReactNode
}

export const FormList: FC<PropsWithChildren<FormListProps<FieldValues>>> = ({name, label, renderField}) => {
  const {
    control,
    formState: {errors}
  } = useFormContext()
  const {fields, append, remove} = useFieldArray({control, name})

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-bold text-[#334454]" htmlFor={name}>
          {label}
        </label>
      )}
      <div className="flex flex-col gap-2">
        {fields.map((field, index) => (
          <div className="p-3 rounded-md bg-[#F8F9F9]" key={field.id}>
            <div className="flex items-center justify-between">
              <label className="font-bold text-[#334454]">Index {index + 1}</label>
              <Button
                styleType="white"
                className="p-1 border-[var(--primary-01)] text-[var(--primary-01)]"
                type="button"
                onClick={() => remove(index)}
              >
                X
              </Button>
            </div>
            {renderField(index)}
          </div>
        ))}
      </div>
      <Button styleType="white" className="border-dashed" type="button" onClick={() => append({})}>
        + {label} 추가
      </Button>
      {errors[name] && (
        <p>
          <ErrorMessage errors={errors} name={name} />
        </p>
      )}
    </div>
  )
}

export default FormList
