import { getFirestore, doc, setDoc } from 'firebase/firestore'
import firebaseApp from '@/firebase/config.js'
import { User } from 'firebase/auth'

const db = getFirestore(firebaseApp)

interface FirestoreUser {
  uid: string
  email: string | null
  createdAt: Date
  // role?: string; // example of an optional field
}

export const addUserToFirestore = async (user: User) => {
  const userRef = doc(db, 'users', user.uid)

  const firestoreUserData: FirestoreUser = {
    uid: user.uid,
    email: user.email,
    createdAt: new Date(),
    // role: 'user', // example of setting a default role
  }

  await setDoc(userRef, firestoreUserData)
}
