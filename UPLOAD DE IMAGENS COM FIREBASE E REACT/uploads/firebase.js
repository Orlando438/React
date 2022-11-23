
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBJ9HXfG5bUzH-6NawFaSLQQy_SGyBbBEY",
  authDomain: "react-firebase-c3f20.firebaseapp.com",
  projectId: "react-firebase-c3f20",
  storageBucket: "react-firebase-c3f20.appspot.com",
  messagingSenderId: "568852583900",
  appId: "1:568852583900:web:a991a6afe442ec4c60ab19",
  measurementId: "G-VCKJJ5S6GB"
};


export const app = initializeApp(firebaseConfig);
export const storage =  getStorage(app);