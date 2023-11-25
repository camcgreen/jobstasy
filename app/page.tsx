'use client'

import Image from 'next/image'
import { useDemoAuth } from '@/app/components/common/hooks/useDemoAuth'
import styles from '@/app/page.module.css'

const Home: React.FC = () => {
  const { loginAsDemo } = useDemoAuth()
  const handleDemoLogin = (type: string) => {
    loginAsDemo(type)
  }
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
        <button
          className='button button-solid'
          onClick={() => handleDemoLogin('user')}
        >
          Log in as a demo user
        </button>
        <p className={styles.note}>Demo users can search and apply for jobs.</p>
        <div className={styles.break}>
          <div />
          <p>or</p>
          <div />
        </div>
        <button className='button' onClick={() => handleDemoLogin('company')}>
          Log in as a demo company
        </button>
        <p className={styles.note}>Demo companies can post jobs.</p>
      </div>
    </main>
  )
}

export default Home
