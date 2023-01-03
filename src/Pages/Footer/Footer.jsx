import "./Footer.css";

function Footer(){
    return(
        <div className="Footer pt-5">
            <main  data-aos="fade-up">
                <div className="first">
                    <div>
                        <ul className="logo">
                            <li><i className="fa-brands fa-facebook"></i></li>
                            <li><i className="fa-brands fa-tiktok"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                        </ul>
                    </div>
                    <div>
                        <p>
                        Vestibulum finibus nulla.
                        Praesent posuere nbibendum tincidunt,
                        nulla lectus varius pulvinar magna lectus turpis.
                        </p>
                    </div>
                    <div>
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
                    <h3>Useful Links</h3>
                    <ul className="link up">
                        <li>HOME</li>
                        <li>SEARCH</li>
                        <li>ABOUT</li>
                        <li>COLLECTION</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
                <div>
                    <h3>Subscribe Today!</h3>
                    <form>
                        <input placeholder="Your email adress"></input>
                        <button>SIGN UP</button>
                    </form>
                    <p>Get the latest news on Eye health, wellness, new offers and updates.</p>
                </div>
            </main>
            <footer>It was created by rewons.com</footer>
        </div>
    )
}

export default Footer;