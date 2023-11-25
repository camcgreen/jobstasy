'use client'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Tiptap from '@/app/components/features/jobs/components/form/tiptap/titap'
import DualThumbSlider from '@/app/components/common/components/dual-thumb-slider/dualThumbSlider'
import InputField from '@/app/components/common/components/input-field/inputField'
import SelectField from '@/app/components/common/components/select-field/selectField'
import CheckboxField from '@/app/components/common/components/checkbox-field/checkboxField'
import DateTimeField from '@/app/components/common/components/datetime-field/dateTimeField'
import { defaultFormValues } from '@/app/components/features/jobs/components/form/validation/defaultFormValues'
import { formRules } from '@/app/components/features/jobs/components/form/validation/rules'
import { useFormSubmit } from '@/app/components/features/jobs/hooks/useFormSubmit'
import { JobFromForm } from '@/app/components/features/jobs/types/jobFromForm'
import {
  getCurrentDateTime,
  getSixMonthsFromNowDateTime,
} from '@/app/components/features/jobs/components/form/utils/helpers'
import styles from '@/app/components/features/jobs/components/form/page.module.css'

const JobPostForm: React.FC = () => {
  const now: string = getCurrentDateTime()
  const sixMonthsFromNow: string = getSixMonthsFromNowDateTime()
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: defaultFormValues,
  })
  const submitForm = useFormSubmit()
  const onSubmit = async (data: JobFromForm) => {
    await submitForm(data, now)
  }
  return (
    <div className={styles.container}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label='title'
          name='title'
          type='text'
          register={register}
          rules={formRules.title}
          error={errors.title?.message}
        />
        <InputField
          label='location'
          name='location'
          type='text'
          register={register}
          rules={formRules.location}
          error={errors.location?.message}
        />
        <label htmlFor='description'>Description</label>
        <Controller
          control={control}
          name='description'
          rules={formRules.description}
          render={({ field: { onChange } }) => (
            <Tiptap
              description=''
              onChange={(e) => {
                onChange(e) // HTML in typeof string
              }}
            />
          )}
        />
        <SelectField
          label='Seniority Level'
          name='level'
          register={register}
          rules={formRules.level}
          options={['Junior', 'Mid-Level', 'Senior']}
          error={errors.level?.message}
        />
        <CheckboxField
          label='Full Time'
          name='fullTime'
          register={register}
          error={errors.fullTime?.message}
        />
        <label htmlFor='salaryRange'>Salary</label>
        <Controller
          control={control}
          name='salaryRange'
          render={({ field: { onChange } }) => (
            <DualThumbSlider
              min={25000}
              max={100000}
              onChange={({ min, max }: { min: number; max: number }) => {
                const minStr = min.toString()
                const maxStr = max.toString()
                const formattedMin =
                  minStr.substring(0, minStr.length - 3) +
                  ',' +
                  minStr.substring(minStr.length - 3)
                const formattedMax =
                  maxStr.substring(0, maxStr.length - 3) +
                  ',' +
                  maxStr.substring(maxStr.length - 3)
                const salaryRange = `£${formattedMin}-£${formattedMax}`
                onChange(salaryRange)
              }}
            />
          )}
        />
        <DateTimeField
          control={control}
          name='deadline'
          label='Application Deadline'
          rules={formRules.deadline}
          min={now}
          max={sixMonthsFromNow}
          error={errors.deadline?.message}
        />
        <input type='submit' />
      </form>
    </div>
  )
}

export default JobPostForm
