import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDJLgCJupGXjDk-1fcj5l-AjSu-XjsVBWs",
  authDomain: "linzalife-f4c1c.firebaseapp.com",
  projectId: "linzalife-f4c1c",
  storageBucket: "linzalife-f4c1c.appspot.com",
  messagingSenderId: "1047773414972",
  appId: "1:1047773414972:web:8a5e3e1debb1df4225a539",
  measurementId: "G-Z9PMF5DV87"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);