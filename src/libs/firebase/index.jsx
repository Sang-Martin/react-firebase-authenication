// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"

// Set Up the Firebase Config with .env the Create React App Way.
// This will have to be added to netlify.
const firebaseConfig = {
    apiKey: "AIzaSyD5-KrhjHd1mo61E1oOPGPy6jwdBFrPSdc",
  authDomain: "realtime-database-345f2.firebaseapp.com",
  databaseURL: "https://realtime-database-345f2-default-rtdb.firebaseio.com",
  projectId: "realtime-database-345f2",
  storageBucket: "realtime-database-345f2.appspot.com",
  messagingSenderId: "736902782319",
  appId: "1:736902782319:web:46849fad415674ac99dc9a",
  measurementId: "G-1566DTHFVR"
//   apiKey:process.env.API_KEY,
//   authDomain:process.env.AUTH_DOMAIN,
//   databaseURL:process.env.DATABASE_URL,
//   projectId:process.env.PROJECT_ID,
//   storageBucket:process.env.STORAGE_BUCKET,
//   messagingSenderId:process.env.MESSAIGN_SENDER_ID,
//   appId:process.env.APP_ID,
//   measurementId:process.env.MEASUREMENT_ID
};

// Initialize Firebase App and associated services
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)
 
export {auth, db}


