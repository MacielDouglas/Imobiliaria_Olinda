// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-estate-olinda-imob.firebaseapp.com',
  projectId: 'mern-estate-olinda-imob',
  storageBucket: 'mern-estate-olinda-imob.appspot.com',
  messagingSenderId: '293786659247',
  appId: '1:293786659247:web:eb86d95150e556148e675a',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
