import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

export interface SelectFieldProps<TFieldValues extends FieldValues> {
  label: string
  name: Path<TFieldValues>
  register: UseFormRegister<TFieldValues>
  options: string[]
  rules?: { required: string }
  error?: string | undefined
}
