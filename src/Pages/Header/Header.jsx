import "./Header.css";
import { Link } from "react-router-dom";
import BasicExample from "../../Component/DropDown/Dropdown";

function Main(){
    return(
        <div className="Main">
            <header>
                <div>
                    <a href="./">
                    <img src="/images/linzalife.com.png"></img>
                    </a>
                </div>
                <aside>
                    <button className="menu-icon"><i class="fa-solid fa-bars"></i></button>
                    <ul>
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/catalog">CATALOG</Link>
                        </li>
                        <li>
                            <BasicExample />
                        </li>
                    </ul>
                    <button>
                        <Link to="/profile">
                            <i class="fa-solid fa-user"></i>
                        </Link>
                    </button>
                    <button>
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                    <select>
                        <option>AZN</option>
                    </select>
                </aside>  
            </header>
        </div>
    )
}


export default Main;