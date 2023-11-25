'use client'

import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { JobFromForm } from '@/app/components/features/jobs/types/jobFromForm'
import styles from '@/app/components/features/jobs/components/form/page.module.css'
import DualThumbSlider from '@/app/components/common/components/dual-thumb-slider/dualThumbSlider'

const JobPostForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      location: '',
      level: '',
      fullTime: true,
      salaryRange: '',
      deadline: Date.now(),
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
        <label htmlFor='salaryMin'>Salary range (low):</label>
        <DualThumbSlider
          min={25000}
          max={100000}
          onChange={({ min, max }: { min: number; max: number }) => {
            const formattedMin = min
            const formattedMax = max
            const salaryRange = `£${formattedMin}-£${formattedMax}`
            console.log(salaryRange)
          }}
        />
      </form>
      <p>{errors.title?.message}</p>
    </div>
  )
}

export default JobPostForm