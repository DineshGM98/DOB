import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDOr6og8wZU1BaURENrcTdmLomQFHsdnlE",
  authDomain: "auth-f74d7.firebaseapp.com",
  projectId: "auth-f74d7",
  storageBucket: "auth-f74d7.appspot.com",
  messagingSenderId: "918685761592",
  appId: "1:918685761592:web:dd8104fdd431e41d7ea6cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);