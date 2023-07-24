// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvC6QbITOOjiwGAGhANH9gcsf5omho7zQ",
  authDomain: "socialmedia-16bc7.firebaseapp.com",
  projectId: "socialmedia-16bc7",
  storageBucket: "socialmedia-16bc7.appspot.com",
  messagingSenderId: "577511008597",
  appId: "1:577511008597:web:449005def62f3108c9a7dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);