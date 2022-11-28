// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACPDnF5nWzo5zfEcif3gda_Kki5ISH-QE",
  authDomain: "myblog-1b4c0.firebaseapp.com",
  projectId: "myblog-1b4c0",
  storageBucket: "myblog-1b4c0.appspot.com",
  messagingSenderId: "152682321704",
  appId: "1:152682321704:web:8400296a8259657ae8a21d",
  measurementId: "G-HZMS6NCXP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const blog = collection(db, "blog")

export {blog, db}