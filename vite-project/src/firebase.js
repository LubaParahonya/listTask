import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // apiKey: String(import.meta.env.REACT_APP_FIREBASE_VITE_API_KEY),
  // authDomain: String(import.meta.env.EACT_APP_FIREBASE_VITE_AUTH_DOMAIN),
  // projectId: String(import.meta.env.REACT_APP_FIREBASE_VITE_PROJECT_ID),
  // storageBucket: String(import.meta.env.REACT_APP_FIREBASE_VITE_STORAGE_BUCKET),
  // messagingSenderId: String(import.meta.env.REACT_APP_FIREBASE_VITE_MESSAGING_SENDER_ID),
  // appId: String(import.meta.env.REACT_APP_FIREBASE_VITE_APP_ID),
  // measurementId: String(import.meta.env.REACT_APP_FIREBASE_VITE_MEASUREMENT_ID)
 apiKey: "AIzaSyCwLqQw5mGrCwUZE-aLpn0i1OGgzde-oSs",
 authDomain: "password-af82d.firebaseapp.com",
 projectId: "password-af82d",
 storageBucket: "password-af82d.appspot.com",
 messagingSenderId: "185095487903",
 appId: "1:185095487903:web:08085bf0b9a4a7df353daa",
 measurementId: "G-DT3G6KQN8B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
