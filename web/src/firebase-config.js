import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7KyMrK6bFt9zVaMckJpZoKk1hgQPUiXM",
  authDomain: "majorproject-2cda8.firebaseapp.com",
  projectId: "majorproject-2cda8",
  storageBucket: "majorproject-2cda8.appspot.com",
  messagingSenderId: "269991327507",
  appId: "1:269991327507:web:066db9277f7894a54c0ce6",
  measurementId: "G-5GWZBFC7WP",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
