import { Link } from "react-router-dom";
import "./Profile.css";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

function Profile(){

    const [user,isLoading] = useAuthState(auth);

    const handleSignOut = useCallback(()=>{
        signOut(auth);
    },[])

    if(isLoading){
        return <h1>Loading...</h1>
    }


    return(
        <div className="Profile">
            <div className="flex flex-col w-full">
                <div className="header
                                flex 
                                justify-content-center 
                                items-center
                                bg-[#134072]
                                h-48
                                shadow-grey-600
                                shadow-lg
                                ">
                    <h1 className="text-4xl font-bold">Profile</h1>
                </div>
                <div className="flex flex-col items-center">
                <Link to="/register">
                    <button className="w-80 h-12 bg-[#134072] text-white font-bold rounded-3 border-none m-3">
                        Sign in
                    </button>
                </Link>

                <Link to="/login">
                    <button className="w-80 h-12 bg-[#134072] text-white font-bold rounded-3 border-none m-3">
                        Login
                    </button>
                </Link>
                <div className="flex items-center justify-between">
                {/* <div>
                    <div className="flex flex-row items-center gap-2">
                        <p className="font-bold text-4xl">{!user.displayName ? null : user.displayName}</p>
                        <div>
                            <Link to="/update"><i class="fa-solid fa-pen-to-square"></i></Link>
                        </div>
                    </div>
                <p className="text-gray-500">{!user.email ? null : user.email}</p>
                </div> */}
            <button onClick={handleSignOut} className="bg-red-600 text-white p-4 rounded-md">Sign out</button>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;