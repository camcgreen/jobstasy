import JobsListContainer from '@/app/components/features/jobs/components/list/jobs-list-container/JobsListContainer'
import styles from '@/app/(routes)/jobs/page.module.css'

const Jobs: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1>Jobs Hero</h1>
      <JobsListContainer />
    </main>
  )
}

export default Jobs
