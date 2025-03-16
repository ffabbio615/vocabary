// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAwsyLIY7Qv86LwL166EoPNV24WdDBOod0",
  authDomain: "vocabary.firebaseapp.com",
  projectId: "vocabary",
  storageBucket: "vocabary.firebasestorage.app",
  messagingSenderId: "508916622039",
  appId: "1:508916622039:web:221e88ecc99d9b9b550692",
  measurementId: "G-RS5SGXG33Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);