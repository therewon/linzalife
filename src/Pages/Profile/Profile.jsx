import { Link } from "react-router-dom";
import BasicExample from "../../Component/DropDown/Dropdown";
import "./Profile.css";


function Profile(){
    return(
        <div className="Profile">
            <h1 className="m-5">COMING SOON, THIS PAGE WILL WORK</h1>
            <Link to="/">
                <button>Return to Home</button>
            </Link>
        </div>
    )
}

export default Profile;