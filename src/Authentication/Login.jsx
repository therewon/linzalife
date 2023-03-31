import { useState, useCallback } from "react";
import { signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "../firebase";
import { Link } from "react-router-dom";

const Login = () =>{
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = useCallback((e)=>{
        e.preventDefault();

        if(!email||!password){
            return;
        }
        signInWithEmailAndPassword(auth,email,password)
        .catch((e)=>console.log(e))
    },[email,password])

    return(
        <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl font-semibold">Login</h1>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Type your email ... " 
                    className="bg-gray-100 p-6 rounded"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Type your password ..." 
                    className="bg-gray-100 p-6 rounded"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                />
                <Link to="/forgot-password" className="ml-auto">Forgot password?</Link>
                <input type="submit" value="Sign in" className="bg-black p-6 rounded text-white" />
                <Link to="/signup">Don't have an account? <span className="font-bold">Signup</span></Link>
            </form>
        </div>
    )
}

export default Login;