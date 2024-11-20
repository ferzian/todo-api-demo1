// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZjDgdB6tlYbPII-86yFg0vxbgEx5Mt_s",
  authDomain: "todo-app-2a759.firebaseapp.com",
  projectId: "todo-app-2a759",
  storageBucket: "todo-app-2a759.firebasestorage.app",
  messagingSenderId: "521830855296",
  appId: "1:521830855296:web:cdc709cb32a32826fc6c65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);