import { Control, FieldValues, Path } from 'react-hook-form'

export interface DateTimeFieldProps<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>
  name: Path<TFieldValues>
  label: string
  rules: { required: string }
  min: string
  max: string
  error?: string | undefined
}
