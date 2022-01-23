// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7XBMlXDIRleMfi8EPnFlIFWl27CB4864",
  authDomain: "twitter-clone-app-e8a5e.firebaseapp.com",
  projectId: "twitter-clone-app-e8a5e",
  storageBucket: "twitter-clone-app-e8a5e.appspot.com",
  messagingSenderId: "537320271030",
  appId: "1:537320271030:web:69f1cd220638fd96604a17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();