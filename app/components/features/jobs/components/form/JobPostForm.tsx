'use client'
import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Tiptap from '@/app/components/features/jobs/components/form/tiptap/titap'
import DualThumbSlider from '@/app/components/common/components/dual-thumb-slider/dualThumbSlider'
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
    defaultValues: {
      title: '',
      location: '',
      description: '',
      level: '',
      fullTime: true,
      salaryRange: '',
      deadline: '',
    },
  })
  const submitForm = useFormSubmit()
  const onSubmit = async (data: JobFromForm) => {
    await submitForm(data, now)
  }
  return (
    <div className={styles.container}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='title'>Title</label>
        <input
          {...register('title', {
            required: 'You must include the job title.',
            minLength: {
              value: 4,
              message: 'The job title must be at least 4 characters long.',
            },
            maxLength: {
              value: 80,
              message:
                'The job title must be no longer than 80 characters long.',
            },
          })}
        />
        <label htmlFor='location'>Location</label>
        <input
          {...register('location', {
            required: 'You must include the job location.',
            minLength: {
              value: 2,
              message: 'The job location must be at least 2 characters long.',
            },
            maxLength: {
              value: 80,
              message:
                'The job location must be no longer than 80 characters long.',
            },
          })}
        />
        <label htmlFor='description'>Description</label>
        <Controller
          control={control}
          name='description'
          rules={{
            required: 'You must enter a job description.',
          }}
          render={({ field: { onChange } }) => (
            <Tiptap
              description=''
              onChange={(e) => {
                onChange(e) // HTML in typeof string
              }}
            />
          )}
        />
        <label htmlFor='level'>Seniority Level</label>
        <select
          {...register('level', {
            required: 'You must include the job seniority level.',
          })}
        >
          <option value='' disabled>
            {/* Select option... */}
          </option>
          <option value='Junior'>Junior</option>
          <option value='Mid-Level'>Mid-level</option>
          <option value='Senior'>Senior</option>
        </select>
        <label>
          Full Time:
          <input type='checkbox' {...register('fullTime')} />
        </label>
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
        <label htmlFor='deadline'>Application Deadline</label>
        <Controller
          control={control}
          name='deadline'
          rules={{
            required:
              'You must enter a date and time for the application deadline.',
          }}
          render={({ field }) => (
            <input
              type='datetime-local'
              min={now}
              max={sixMonthsFromNow}
              {...field}
            />
          )}
        />
        <input type='submit' />
      </form>
      <p>{errors.description?.message}</p>
    </div>
  )
}

export default JobPostForm
