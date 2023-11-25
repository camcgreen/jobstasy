import React from 'react'
import { Controller, FieldValues } from 'react-hook-form'
import { DateTimeFieldProps } from '@/app/components/common/components/datetime-field/type'

const DateTimeField = <TFieldValues extends FieldValues>({
  control,
  name,
  label,
  rules,
  min,
  max,
  error,
}: DateTimeFieldProps<TFieldValues>) => (
  <div>
    <label htmlFor={name}>{label}</label>
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field }) => (
        <input type='datetime-local' id={name} min={min} max={max} {...field} />
      )}
    />
    {error && <p>{error}</p>}
  </div>
)

export default DateTimeField
