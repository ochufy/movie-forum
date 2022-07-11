// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_WEB_API_KEY,
  authDomain: "movie-forum-4b39e.firebaseapp.com",
  projectId: "movie-forum-4b39e",
  storageBucket: "movie-forum-4b39e.appspot.com",
  messagingSenderId: "729687636786",
  appId: "1:729687636786:web:99a3eb7d2de7985913b52b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
