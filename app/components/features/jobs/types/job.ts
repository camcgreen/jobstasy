export interface Job {
  uid: string
  createdAt: number
  deadline: number
  title: string
  company: string
  location: string
  salaryMin: number
  salaryMax: number
  fullTime: boolean
  level: string
  applicants: number
  md: string
}
