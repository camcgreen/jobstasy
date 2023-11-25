import React from 'react'
import { FieldValues } from 'react-hook-form'
import { InputFieldProps } from '@/app/components/common/components/input-field/type' // Adjust the import path to the actual location of your type.ts file
import styles from '@/app/components/common/components/input-field/inputField.module.css'

const InputField = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  rules,
  type,
  placeholder,
  error,
}: InputFieldProps<TFieldValues>) => (
  <div className={styles.container}>
    <label htmlFor={name}>{label}</label>
    <input {...register(name, rules)} type={type} placeholder={placeholder} />
    {error && <p>{error}</p>}
  </div>
)

export default InputField
