// src/services/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBa1W1H-e3W03D-b-4dW5PQR2_AmppVqKs",
  authDomain: "telemedicine-app-3f1d9.firebaseapp.com",
  projectId: "telemedicine-app-3f1d9",
  storageBucket: "telemedicine-app-3f1d9.firebasestorage.app",
  messagingSenderId: "216552514495",
  appId: "1:216552514495:web:971a2688e85bcc328fb70a"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);