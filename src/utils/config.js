import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
  databaseURL:
    'https://zyuan-todo-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: process.env.FIREBASE_PROJECTID,
  storageBucket: process.env.FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
  appId: process.env.APPID,
  measurementId: process.env.FIREBASE_MEASUREMENTID,
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
