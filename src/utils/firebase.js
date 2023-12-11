// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnvbRwKnqKU4QSASpWydQ5xDfIS3_54kY",
  authDomain: "netflixgpt-8efd2.firebaseapp.com",
  projectId: "netflixgpt-8efd2",
  storageBucket: "netflixgpt-8efd2.appspot.com",
  messagingSenderId: "471008141815",
  appId: "1:471008141815:web:8f4acd1b2d373b452e4ef2",
  measurementId: "G-TXRRCREZ46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()