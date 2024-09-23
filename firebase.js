// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAlLnRrenvo4LOp1g3290l3U6DouWKkiM",
  authDomain: "sonnnn-4fce6.firebaseapp.com",
  projectId: "sonnnn-4fce6",
  storageBucket: "sonnnn-4fce6.appspot.com",
  messagingSenderId: "955956035171",
  appId: "1:955956035171:web:65c92844ae698726004256",
  measurementId: "G-M5X3KX8NJZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);