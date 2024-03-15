import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAoUEYjn0vwyU3pM844hTgr1Dh_cSmsJ_E",
    authDomain: "scenario2-58e0b.firebaseapp.com",
    projectId: "scenario2-58e0b",
    storageBucket: "scenario2-58e0b.appspot.com",
    messagingSenderId: "777814465524",
    appId: "1:777814465524:web:e98b6ee32f00ff8964b7a1"
  };

let firebase_app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(firebaseConfig);

export { db, firebase_app};