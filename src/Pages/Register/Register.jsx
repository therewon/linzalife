import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = useCallback((e) => {

        if (!email || !password || !name) {
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
        .then((auth) => {
            updateProfile(auth.user,{displayName:name})
        }).catch((e) => {
            console.log(e)
        })
    }, [name, email, password])

    return (
        <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl font-semibold">Create a new account</h1>
            <form className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Type your name ... "
                    className="bg-gray-100 p-6 rounded"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Type your email ... "
                    className="bg-gray-100 p-6 rounded"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Type your password ..."
                    className="bg-gray-100 p-6 rounded"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <input type="submit" value="Sign up" className="bg-black p-6 rounded text-white" />
                <Link to="/sign-in">Already have an account? Sign in</Link>
            </form>
        </div>
    )
}

export default Register;