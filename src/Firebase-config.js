/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDH-Vznrke9ArunLxL9YnM1BmAlHjaKpSA",
  authDomain: "plug-project-b06d7.firebaseapp.com",
  projectId: "plug-project-b06d7",
  storageBucket: "plug-project-b06d7.appspot.com",
  messagingSenderId: "269915694217",
  appId: "1:269915694217:web:a9c8cece83097f66641258"
};
*/
// Import the functions you need from the SDKs you need
import {getAuth,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC__QDkxsyrPEFV_G3wJH6D2hdDtEi8Zk",
  authDomain: "plug-project-c66f5.firebaseapp.com",
  projectId: "plug-project-c66f5",
  storageBucket: "plug-project-c66f5.appspot.com",
  messagingSenderId: "942522260411",
  appId: "1:942522260411:web:bf24649c235a13e234029e"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider;
export const db = getFirestore(app);
