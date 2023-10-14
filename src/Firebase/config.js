// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFtCGPbou_cqr5CHuHSD3aKGwIgt0ec7I",
  authDomain: "proyectoreactjs-eb262.firebaseapp.com",
  projectId: "proyectoreactjs-eb262",
  storageBucket: "proyectoreactjs-eb262.appspot.com",
  messagingSenderId: "367541711578",
  appId: "1:367541711578:web:22ccff5622c9cd841eabe3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
