import { addDoc, collection } from 'firebase/firestore'
import { db } from '@/firebase/config'
import { Job } from '@/app/components/features/jobs/types/job'
import { JobFromForm } from '@/app/components/features/jobs/types/jobFromForm'

export const useFormSubmit = () => {
  const submitForm = async (data: JobFromForm, now: string) => {
    const dataToSubmit: Job = JSON.parse(JSON.stringify(data))
    dataToSubmit.uid = crypto.randomUUID()
    dataToSubmit.createdAt = now
    dataToSubmit.company = 'Apple' // Get this from the user account
    // dataToSubmit.applicants = Math.floor(Math.random() * 100) // use this only when populating database
    dataToSubmit.applicants = 0
    try {
      const docRef = await addDoc(collection(db, 'jobs'), dataToSubmit)
      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }
  }

  return submitForm
}
