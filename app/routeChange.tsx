'use client'

import { useRouter, usePathname } from 'next/navigation'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { firebaseApp } from '@/firebase/config'
import { useEffect } from 'react'

export function RouteChangeListener() {
  const router = useRouter()
  const pathname = usePathname()
  const auth = getAuth(firebaseApp)

  useEffect(() => {
    if (pathname !== '/') {
      onAuthStateChanged(auth, (user) => {
        if (!user) {
          router.push('/')
        }
        if (pathname === '/post' && user?.email?.includes('user')) {
          router.push('/jobs')
        }
      })
    }
  }, [pathname])

  return <></>
}
