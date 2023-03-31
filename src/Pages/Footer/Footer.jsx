// import "./Footer.css";

import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="Footer flex flex-col items-center">
            <div className="flex flex-col sm:flex-row justify-between w-[80%] my-12 gap-12 container" >
                <div className="flex flex-col gap-2  sm:w-[50%]">
                    <div>
                        <ul className="flex flex-row gap-3 text-3xl">
                            <li><i className="fa-brands fa-facebook-f "></i></li>
                            <li><i className="fa-brands fa-tiktok"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-whatsapp"></i></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p>
                            Vestibulum finibus nulla.
                            Praesent posuere nbibendum tincidunt,
                            nulla lectus varius pulvinar magna lectus turpis.
                        </p>
                        <p>
                            Aliquam quam diam,
                            ornare at luctus quis,
                            auctor sed leo. Vivamus sagittis est laoreet, euismode nec,
                            tristique ipsum. Phasellus id turpis dui.
                            Donec eu ullamcorper diam.
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className="font-semibold text-lg mb-2">Useful Links</h3>
                    <ul className="flex flex-col gap-2">
                        <Link to="/">
                            <li>HOME</li>
                        </Link>
                        <Link to="/catalog">
                            <li>CATALOG</li>
                        </Link>
                        <Link to="/about">
                            <li>ABOUT</li>
                        </Link>
                        <Link to="/contact">
                            <li>CONTACT</li>
                        </Link>
                    </ul>
                </div>
                <div className="flex flex-col  gap-2">
                    <h3 className="font-semibold text-lg">Subscribe Today!</h3>
                    <form>
                        <input placeholder="Your email adress" className="lg:w-auto w-[150px]"></input>
                        <button>SIGN UP</button>
                    </form>
                    <p>Get the latest news on Eye health, wellness, new offers and updates.</p>
                </div>
            </div>
            <footer className="w-full bg-[#134072] text-white text-center">
                It was created by
                <a href="https://www.instagram.com/therewons/?igshid=ZDdkNTZiNTM%3D" target="_blank" className="text-white ml-2 font-semibold">
                    The Rewon
                </a>
            </footer>
        </div>
    )
}

export default Footer;