export interface JobFromForm {
  deadline: number
  title: string
  location: string
  salaryRange: string
  fullTime: boolean
  level: 'junior' | 'mid' | 'senior'
  md: string
}
