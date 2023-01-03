import { Link } from "react-router-dom";
import "./Catalog.css";

function Catalog(){
    return(
        <div className="Catalog d-flex justify-content-center align-items-center flex-column">
            <h1 className="m-3">Hele yigilmayib</h1>
                <Link to="/">
                    <button>Return to home</button>
                </Link>
            
        </div>
    )
}

export default Catalog;