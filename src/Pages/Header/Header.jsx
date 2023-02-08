import "./Header.css";
import { Link } from "react-router-dom";
import BasicExample from "../../Component/DropDown/Dropdown";

function Main() {
    return (
        <div className="Main">
            <header className="lg:p-auto px-0">
                <div className="flex flex-row gap-1">
                    <button className="lg:hidden block p-0 m-0">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                    <a href="./">
                        <img src="/images/linzalogo.png" className="w-[100px] h-[25px] lg:w-[200px] lg:h-[50px]"></img>
                    </a>
                </div>
                <aside>

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

                    <div className="flex flex-row gap-1  ">
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
                    </div>
                </aside>
            </header>
        </div>
    )
}


export default Main;