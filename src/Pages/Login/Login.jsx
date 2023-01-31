import { register } from "../../firebase";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { login as loginHandle } from "../../store/auth";
import { useNavigate } from "react-router-dom";

function Login(){
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async e =>{
        e.preventDefault()
        const user = await register(email,password)
        dispatch(loginHandle(user))
        navigate('/profile',{
            replace: true
        })
    }


    return(
        <div className="Profile">
            <Toaster position="top-right" />
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="E-mail adress" value={email} onChange={e=>setEmail(e.target.value)} /><br/>
                <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} /><br/>
                <button disabled={!email || !password} type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;