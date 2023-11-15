'use client'

import { useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { Job } from '@/app/components/features/jobs/types/job'

const useJobs = () => {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchJobs = async () => {
      setLoading(true)
      try {
        const jobsCollection = collection(db, 'jobs')
        const query = await getDocs(jobsCollection)
        const fetchedJobs = query.docs.map((doc) => ({
          uid: doc.id,
          ...doc.data(),
        })) as Job[]
        setJobs(fetchedJobs)
      } catch (err) {
        setError(err as Error)
      } finally {
        setLoading(false)
      }
    }
    fetchJobs()
  }, [])

  return { jobs, loading, error }
}

export default useJobs
