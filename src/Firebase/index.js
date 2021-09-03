import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyBgfC8Tapu295jK0YdzMFPy5ls3gsU4WCk",
  authDomain: "orabela-react-coder.firebaseapp.com",
  projectId: "orabela-react-coder",
  storageBucket: "orabela-react-coder.appspot.com",
  messagingSenderId: "1039377712787",
  appId: "1:1039377712787:web:99b23bdb0362e422f7af66",
  measurementId: "G-QKX9ZGKFZ8"
});

export const db = () => getFirestore();
