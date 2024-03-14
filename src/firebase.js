// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAYt6bgzaS3IraK5m2oO7HgBclri7SAvVM",
  authDomain: "fir-auth-8603e.firebaseapp.com",
  projectId: "fir-auth-8603e",
  storageBucket: "fir-auth-8603e.appspot.com",
  messagingSenderId: "472016507764",
  appId: "1:472016507764:web:975018854f430350ecd221"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);