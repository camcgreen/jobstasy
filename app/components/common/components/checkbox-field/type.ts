import { UseFormRegister, FieldValues, Path } from 'react-hook-form'

export interface CheckboxFieldProps<TFieldValues extends FieldValues> {
  label: string
  name: Path<TFieldValues>
  register: UseFormRegister<TFieldValues>
  error?: string | undefined
}
