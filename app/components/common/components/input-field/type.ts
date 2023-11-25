import {
  UseFormRegister,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form'

export interface InputFieldProps<TFieldValues extends FieldValues> {
  label: string
  name: Path<TFieldValues>
  register: UseFormRegister<TFieldValues>
  rules?: RegisterOptions
  type?: string
  placeholder?: string
  error?: string | undefined
}
