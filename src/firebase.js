// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKq6STygIBeBZokTQ1PlERZaTbKBMQMWg",
  authDomain: "clone-bf194.firebaseapp.com",
  projectId: "clone-bf194",
  storageBucket: "clone-bf194.appspot.com",
  messagingSenderId: "358234448651",
  appId: "1:358234448651:web:af629b7aa0b618ce80780e",
  measurementId: "G-D1SHL2VYL3",
};

// initialApp
const app = initializeApp(firebaseConfig);

// const db = firestore();
const auth = getAuth(app);

export { auth };
