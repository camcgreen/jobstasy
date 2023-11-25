import { JobFromForm } from '@/app/components/features/jobs/types/jobFromForm'

export interface Job extends JobFromForm {
  uid: string
  company: string
  createdAt: number
  applicants: number
  md: string
}
