'use client'

import React from 'react'
import useJobs from '@/app/components/features/jobs/hooks/useJobs'

const JobsList: React.FC = () => {
  const { jobs, loading, error } = useJobs()
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <ul>
      {jobs.length > 0 ? (
        jobs.map((job) => <li key={job.uid}>{job.title}</li>)
      ) : (
        <div>No jobs available.</div>
      )}
    </ul>
  )
}

export default JobsList
