import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxAV0bv3KV_NSoepY2-nr0gRkib1AU9-A",
  authDomain: "aiaa-ucsd.firebaseapp.com",
  projectId: "aiaa-ucsd",
  storageBucket: "aiaa-ucsd.appspot.com",
  messagingSenderId: "771620395917",
  appId: "1:771620395917:web:4a0284add62fe11bd77bc4",
};

initializeApp(firebaseConfig);
export const firebaseAuth = getAuth();
export const firestoreDB = getFirestore();
