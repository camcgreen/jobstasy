import JobsList from '@/app/components/features/jobs/components/JobsList'
import styles from '@/app/(routes)/jobs/page.module.css'

export default function Jobs() {
  return (
    <main className={styles.main}>
      <h1>Jobs Hero</h1>
      <JobsList />
    </main>
  )
}
