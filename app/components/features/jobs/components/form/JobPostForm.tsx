'use client'

import React from 'react'
import { useForm, Controller, SubmitHandler } from 'react-hook-form'
import { JobFromForm } from '@/app/components/features/jobs/types/jobFromForm'
import Tiptap from '@/app/components/features/jobs/components/form/tiptap/titap'
import DualThumbSlider from '@/app/components/common/components/dual-thumb-slider/dualThumbSlider'
import styles from '@/app/components/features/jobs/components/form/page.module.css'

const JobPostForm: React.FC = () => {
  const now: string = new Date().toISOString().slice(0, 16)
  const sixMonthsFromNow: string = new Date(
    new Date().setMonth(new Date().getMonth() + 6)
  )
    .toISOString()
    .slice(0, 16)

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
  const onSubmit: SubmitHandler<JobFromForm> = (data) => console.log(data)
  return (
    <div className={styles.container}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
          placeholder='Title'
        />
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
          placeholder='Location'
        />
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
                onChange(e)
              }}
            />
          )}
        />
        <select
          {...register('level', {
            required: 'You must include the job seniority level.',
          })}
        >
          <option value='' disabled>
            Select job level...
          </option>
          <option value='junior'>Junior</option>
          <option value='mid'>Mid-level</option>
          <option value='senior'>Senior</option>
        </select>
        <label>
          Full Time:
          <input type='checkbox' {...register('fullTime')} />
        </label>
        <label htmlFor='salaryRange'>Salary range:</label>
        <Controller
          control={control}
          name='salaryRange'
          render={({ field: { onChange } }) => (
            <DualThumbSlider
              min={25000}
              max={100000}
              onChange={({ min, max }: { min: number; max: number }) => {
                const formattedMin = min
                const formattedMax = max
                const salaryRange = `£${formattedMin}-£${formattedMax}`
                onChange(salaryRange)
              }}
            />
          )}
        />
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
