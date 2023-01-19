import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyB3bjWxxVvfIllFrb63G0oKdfS7x4CRxaI',
  authDomain: 'cocinar-9529d.firebaseapp.com',
  projectId: 'cocinar-9529d',
  storageBucket: 'cocinar-9529d.appspot.com',
  messagingSenderId: '258208110913',
  appId: '1:258208110913:web:50df65a0073c41265869c0'
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

export { db }
