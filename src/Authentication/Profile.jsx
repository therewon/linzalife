import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useCallback } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import AddPost from "./AddPost";
import Posts from "./Posts";
import Loaders from "./Loaders";

function Profile() {

    const [user, isLoading] = useAuthState(auth);

    const handleSignOut = useCallback(() => {
        signOut(auth);
    }, [])

    if (isLoading) {
        return (<Loaders />)

    }


    return (
        <div className="Profile">
            <div className="flex flex-col w-full gap-[50px]">
                <div className="header
                                flex 
                                justify-content-center 
                                items-center
                                bg-[#134072]
                                h-48
                                shadow-grey-600
                                shadow-lg
                                ">
                    <h1 className="text-4xl font-bold text-white">Profile</h1>
                </div>
                <div className="flex flex-col items-center">
                    {!user ? <div className="flex flex-col items-center">
                        <Link to="/signup">
                            <button className="w-60 sm:w-80 h-12 bg-[#134072] text-white font-bold rounded-3 border-none m-3">
                                Sign in
                            </button>
                        </Link>

                        <Link to="/login">
                            <button className="w-60 sm:w-80 h-12 bg-white text-[#134072] font-bold rounded-3 border-2 border-[#134072] m-3">
                                Login
                            </button>
                        </Link>
                    </div> :
                        <div className="flex items-center justify-between flex-col w-[80%]">
                            <div className="flex flex-row justify-between w-full">
                                <div className="text-black ">
                                    <h1 className="font-bold text-xl  sm:text-4xl">{user.displayName}</h1>
                                    <p className="sm:text-lg text-sm">{user.email}</p>
                                </div>
                                <button onClick={handleSignOut} className="w-40 h-12 bg-red-600 text-white font-bold rounded-3 border-none m-3 sm:text-xl text-sm">Sign out</button>

                            </div>
                            <AddPost />
                            <Posts />
                        </div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Profile;