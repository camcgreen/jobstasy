import React from 'react'
import { FieldValues } from 'react-hook-form'
import { SelectFieldProps } from '@/app/components/common/components/select-field/type'
import styles from '@/app/components/common/components/select-field/selectField.module.css'

const SelectField = <TFieldValues extends FieldValues>({
  label,
  name,
  register,
  options,
  rules,
  error,
}: SelectFieldProps<TFieldValues>) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <select id={name} {...register(name, rules)}>
      <option value='' disabled>
        Select option...
      </option>
      {options.map((value) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </select>
    {error && <p>{error}</p>}
  </div>
)
export default SelectField
