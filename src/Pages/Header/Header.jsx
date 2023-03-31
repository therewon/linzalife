import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../Header/toggleAnimation.css'
import BasicExample from "../../Component/DropDown/Dropdown";

function Header() {
    // const [theme, setTheme] = useState(
    //     localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
    // );
    const count = localStorage.getItem('count');
    localStorage.setItem('theme','light')

    useEffect(() => {
        if (localStorage.getItem('theme') === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        } 
    }, [])

    const toggleTheme = () => {
        // setTheme(theme === 'light' ? 'dark' : 'light')

        if (localStorage.getItem('theme') === 'light') {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    }


    return (
        // <div className="container absolute z-10 w-full">
        <div className="flex justify-center z-10 w-full bg-transparent text-[#134072] sm:mt-auto mt-2 container">
            <header className="lg:py-[20px] px-0 flex justify-between w-[90%] sm:w-[80%]">
                <div className="flex flex-row gap-1">
                    <button className="lg:hidden block p-0 m-0 text-xl">
                        <i className="fa-solid fa-bars"></i>
                    </button>
                    <a href="./">
                        <img src="/images/logo.png" className="w-[112px] h-[28px] lg:w-[200px] lg:h-[50px]"></img>
                    </a>
                </div>
                <aside className="flex flex-row items-center gap-[15px] lg:py-auto">

                    <ul className="lg:flex flex-row gap-[15px] text-[16px] font-semibold items-center hidden">
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

                    <div className="flex flex-row gap-2  ">
                        <button className="bg-transparent text-[#134072]">
                            <Link to="/profile">
                                <i className="fa-solid fa-user"></i>
                            </Link>
                        </button>
                        <button className="bg-transparent text-[#134072] relative">
                            <span className="absolute right-0 top-0 translate-x-[50%] translate-y-[-70%] border-[#134072] border-[1px] w-[15px] h-[15px] rounded-[8px] text-[10px] font-bold bg-transparent">
                                2
                            </span>
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                        {/* <select className="focus:outline-none font-semibold bg-transparent hidden sm:block">
                            <option>AZN</option>
                            <option>USD</option>
                            <option>BTC</option>
                        </select> */}
                        <div class="toggleWrapper" onClick={toggleTheme}>
                            <input type="checkbox" class="dn" id="dn"/>
                                <label for="dn" class="toggle">
                                    <span class="toggle__handler">
                                        <span class="crater crater--1"></span>
                                        <span class="crater crater--2"></span>
                                        <span class="crater crater--3"></span>
                                    </span>
                                    <span class="star star--1"></span>
                                    <span class="star star--2"></span>
                                    <span class="star star--3"></span>
                                    <span class="star star--4"></span>
                                    <span class="star star--5"></span>
                                    <span class="star star--6"></span>
                                </label>
                        </div>
                        {/* <button
                            
                            className="py-[2px] px-2 text-xs bg-black text-white rounded dark:text-black dark:bg-white">
                            {theme} Mode
                        </button> */}
                    </div>
                </aside>
            </header>
        </div>
        // </div>
    )
}


export default Header;