// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZXHIykgIi3cBdqjYvef7-PE5kKtuF0Ns",
  authDomain: "fir-authentication-2101b.firebaseapp.com",
  projectId: "fir-authentication-2101b",
  storageBucket: "fir-authentication-2101b.appspot.com",
  messagingSenderId: "303285141750",
  appId: "1:303285141750:web:051a9d34e356fbb927ecd7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)