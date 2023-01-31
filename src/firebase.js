import { FirebaseError, initializeApp } from "firebase/app";

import {getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { toast } from "react-hot-toast";



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
const auth = getAuth();

export const register = async (email,password)=>{
  try{
    const {user} = await createUserWithEmailAndPassword(auth,email,password)
    toast.success("Successfully added")
    return user;
  }catch(error){
    toast.error(error.message)
  }
    
}

export const login = async (email,password) => {
  try{
    const { user } = await signInWithEmailAndPassword(auth,email,password)
    return user;
  }catch(error){
    toast.error(error.message);
  }
}

export const logout = async (email,password)=>{
  try{
    signOut(auth)
    return true;
  }catch(error){
    toast.error(error.message)
  }  
}

export default app;
