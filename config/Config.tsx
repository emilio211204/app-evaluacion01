// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC_pxk00Zlw6qeMZ_Q9I4YSxNN4lvrkaNY",
    authDomain: "ejercicio-n1-a8801.firebaseapp.com",
    databaseURL: "https://ejercicio-n1-a8801-default-rtdb.firebaseio.com",
    projectId: "ejercicio-n1-a8801",
    storageBucket: "ejercicio-n1-a8801.firebasestorage.app",
    messagingSenderId: "1048715473368",
    appId: "1:1048715473368:web:863ceb3fe5dfd26d3c82ad",
    measurementId: "G-5XYGEPK6YV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase();