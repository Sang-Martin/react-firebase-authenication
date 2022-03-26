// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"

// Set Up the Firebase Config with .env the Create React App Way.
// This will have to be added to netlify.
const firebaseConfig = {
  apiKey:process.env.API_KEY,
  authDomain:process.env.AUTH_DOMAIN,
  databaseURL:process.env.DATABASE_URL,
  projectId:process.env.PROJECT_ID,
  storageBucket:process.env.STORAGE_BUCKET,
  messagingSenderId:process.env.MESSAIGN_SENDER_ID,
  appId:process.env.APP_ID,
  measurementId:process.env.MEASUREMENT_ID
};

// Initialize Firebase App and associated services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getDatabase(app)
 
export {auth, db}