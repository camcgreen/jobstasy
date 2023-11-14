import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
} from 'firebase/auth'
import firebaseApp from '@/firebase/config.js'

const auth = getAuth(firebaseApp)

export const createAndLoginDemoUser = async (type: string) => {
  const email = `${type}-${Date.now()}@demo.jobstasy.com`
  const password = 'demo-password-0'

  try {
    await createUserWithEmailAndPassword(auth, email, password)
    await signInWithEmailAndPassword(auth, email, password)
  } catch (error) {
    console.error('Error with demo user operation:', error)
  }
}
