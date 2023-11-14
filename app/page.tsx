import Image from 'next/image'
import firebaseApp from '@/firebase/config.js'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import Button from '@/app/components/common/components/button'
import styles from '@/app/page.module.css'

const auth = getAuth(firebaseApp)

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.content}>
        <Image
          src='/images/logo-full.svg'
          width={146}
          height={40}
          alt='Jobstasy logo'
          className={styles.logo}
        />
        <Button solid={true} text='Log in as a demo user' />
        <p className={styles.note}>Demo users can search and apply for jobs.</p>
        <div className={styles.break}>
          <div />
          <p>or</p>
          <div />
        </div>
        <Button solid={false} text='Log in as a demo company' />
        {/* <p className={styles.note}>Demo users can search and apply for jobs.</p>
        <p className={styles.note}>Demo companies can post jobs.</p> */}
        {/* <p className={styles.note}>
          Demo users can search and apply for jobs.
          <br />
          Demo companies can post jobs.
        </p> */}
        <p className={styles.note}>Demo companies can post jobs.</p>
      </div>
    </main>
  )
}
