// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "modern-blog-1c849.firebaseapp.com",
  projectId: "modern-blog-1c849",
  storageBucket: "modern-blog-1c849.appspot.com",
  messagingSenderId: "887955335099",
  appId: "1:887955335099:web:66e819e074e0b4b1d7869e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

