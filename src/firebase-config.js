import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getDatabase } from 'firebase/database'
const firebaseConfig = {
    apiKey: "AIzaSyC_j2QB3lwsSOtXt2KIE10fHHRGX-2X5Yk",
    authDomain: "messi-store-b8b76.firebaseapp.com",
    projectId: "messi-store-b8b76",
    storageBucket: "messi-store-b8b76.appspot.com",
    messagingSenderId: "202028288355",
    appId: "1:202028288355:web:c8fc6f5ecd6ebd8018eb56",
    measurementId: "G-M0446TZXMW"
  };
  
  
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getDatabase(app);