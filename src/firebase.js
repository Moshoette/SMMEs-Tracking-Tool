// src/firebase.js
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBby_-ESoVZMP4Kx9Ir6e5oW2E1m0Y2FeE",
  authDomain: "performance-tracking-sys-6d2d2.firebaseapp.com",
  projectId: "performance-tracking-sys-6d2d2",
  storageBucket: "performance-tracking-sys-6d2d2.appspot.com",
  messagingSenderId: "631132143539",
  appId: "1:631132143539:web:3a72fd9670c5c2fa83d5c6"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
