// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6IfIg7pKU3J2b52fgz-5fT8FTUXHzX9k",
  authDomain: "hackthisfall-c2223.firebaseapp.com",
  projectId: "hackthisfall-c2223",
  storageBucket: "hackthisfall-c2223.appspot.com",
  messagingSenderId: "274951320982",
  appId: "1:274951320982:web:eda35cf73c086335a5d9b7",
  measurementId: "G-7EH0PPB6Y8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);