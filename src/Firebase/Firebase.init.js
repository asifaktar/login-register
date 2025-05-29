// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ffKNSLCM7JOZMGt0aPwMoIkbvR8_z6Q",
  authDomain: "login-register-9d0b7.firebaseapp.com",
  projectId: "login-register-9d0b7",
  storageBucket: "login-register-9d0b7.firebasestorage.app",
  messagingSenderId: "766065986006",
  appId: "1:766065986006:web:083fc76242e589292abc77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
