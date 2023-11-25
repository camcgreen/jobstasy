import JobPostForm from '@/app/components/features/jobs/components/form/JobPostForm'
import styles from '@/app/(routes)/post/page.module.css'

const Post: React.FC = () => {
  return (
    <main className={styles.main}>
      <h1>Post Job</h1>
      <JobPostForm />
    </main>
  )
}

export default Post
