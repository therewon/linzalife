import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile(){

    // const { user } = useSelector(state=> state.auth)

    // if(user){
    //     return(
    //         <div>
    //             <h1 className="">Ugurla qeydiyyatdan kecildi</h1>
    //         </div>
    //     )
    // }


    return(
        <div className="Profile">
            <div className="d-flex flex-row">
                <Link to="/register">
                    <button>
                        Sign in
                    </button>
                </Link>

                <Link to="/login">
                    <button>
                    Login
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Profile;