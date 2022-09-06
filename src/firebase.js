import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCXtAUJuTZIEyrNhYYlWLFj_50ZNXUfXsQ",
  authDomain: "netflix-clone-5b031.firebaseapp.com",
  projectId: "netflix-clone-5b031",
  storageBucket: "netflix-clone-5b031.appspot.com",
  messagingSenderId: "571527149449",
  appId: "1:571527149449:web:884bda0bd35b42f3c39358"
};

const firebaseApp = initializeApp(firebaseConfig)
const auth = getAuth(firebaseApp)
const db = getFirestore(firebaseApp)

export { auth }
export default db