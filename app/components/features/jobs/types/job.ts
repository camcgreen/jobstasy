import { JobFromForm } from '@/app/components/features/jobs/types/jobFromForm'

export interface Job extends JobFromForm {
  uid: string
  company: string
  createdAt: string
  applicants: number
  md: string
}
