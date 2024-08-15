// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBby_-ESoVZMP4Kx9Ir6e5oW2E1m0Y2FeE",
  authDomain: "performance-tracking-sys-6d2d2.firebaseapp.com",
  projectId: "performance-tracking-sys-6d2d2",
  storageBucket: "performance-tracking-sys-6d2d2.appspot.com",
  messagingSenderId: "631132143539",
  appId: "1:631132143539:web:3a72fd9670c5c2fa83d5c6"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
