import { register } from "../../firebase";
import { useState } from "react";
import { Toaster } from "react-hot-toast";

function Register(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e =>{
        e.preventDefault()
        const user = await register(email,password)
    }


    return(
        <div className="Profile">
            <Toaster position="top-right" />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="E-mail adress" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
                <button disabled={!email || !password} type="submit">Sign</button>
            </form>
        </div>
    )
}

export default Register;