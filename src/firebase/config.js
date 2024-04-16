// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpeutBRIVy9Pyx9VWjJpax4W_rP2-ESIo",
  authDomain: "react-cursos-c922f.firebaseapp.com",
  projectId: "react-cursos-c922f",
  storageBucket: "react-cursos-c922f.appspot.com",
  messagingSenderId: "964107987531",
  appId: "1:964107987531:web:30ab04d4cc56aac7697bce"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);