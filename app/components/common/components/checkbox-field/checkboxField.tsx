import React from 'react'
import { FieldValues } from 'react-hook-form'
import { CheckboxFieldProps } from '@/app/components/common/components/checkbox-field/type'
import styles from '@/app/components/common/components/checkbox-field/checkboxField.module.css'

const CheckboxField = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  error,
}: CheckboxFieldProps<TFieldValues>) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <input type='checkbox' {...register(name)} />
    {error && <p>{error}</p>}
  </div>
)

export default CheckboxField
