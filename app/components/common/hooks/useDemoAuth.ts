'use client'

import { useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { createAndLoginDemoUser } from '@/app/components/common/utils/auth'

export const useDemoAuth = () => {
  const router = useRouter()

  const loginAsDemo = useCallback(
    async (userType: string) => {
      await createAndLoginDemoUser(userType)
      router.push('/jobs')
    },
    [router]
  )

  return { loginAsDemo }
}
