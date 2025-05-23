import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDte2gfOD-aDliuRcvj3jdba41yNKUnoE4",
  authDomain: "mojaprodanivca.firebaseapp.com",
  projectId: "mojaprodanivca",
  storageBucket: "mojaprodanivca.firebasestorage.app",
  messagingSenderId: "398407451123",
  appId: "1:398407451123:web:3fba59b53682ba0eb8d286",
  measurementId: "G-M72BD5NWN5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);