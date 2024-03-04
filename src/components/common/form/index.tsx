import {FC, PropsWithChildren} from 'react'
import {FieldValues, FormProvider, UseFormProps, UseFormReturn} from 'react-hook-form'
import {Id} from 'react-toastify'
import {FormItem, FormItemProps} from './form.item'
import FormList, {FormListProps} from './form.list'

interface FormProps<T extends FieldValues> extends UseFormProps<T> {
  form: UseFormReturn<any>
  onSubmit: (values: any) => Promise<void | Id> | void
  successRedirectHref?: string
  className?: string
}

interface FormComponent<T extends FieldValues> extends FC<PropsWithChildren<FormProps<T>>> {
  Item: FC<PropsWithChildren<FormItemProps>>
  List: FC<PropsWithChildren<FormListProps<T>>>
}

export const Form: FormComponent<FieldValues> = <T extends FieldValues>({
  form,
  children,
  onSubmit,
  className
}: PropsWithChildren<FormProps<T>>) => {
  return (
    <FormProvider {...form}>
      <form className={`flex flex-col gap-4 ${className}`} onSubmit={form.handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  )
}

Form.Item = FormItem
Form.List = FormList

export default Form
