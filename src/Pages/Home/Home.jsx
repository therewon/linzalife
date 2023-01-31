import "./Home.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Carousel from "../../Component/Carousel/Carousel";
import CommentCarousel from "../../Component/CommentCarousel/CommentCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    useEffect(()=>{
        Aos.init({
            duration:2000
        })
    },[])
    return (
        <div className="home">
            <Carousel />
            <main className="Home">
                <div data-aos="fade-up">
                    <aside >
                        <h1 className="text-5xl font-medium">Wider Field of View & Cosmetically Superior</h1>
                        <p>Nunc consequat nibh ut pretium vestibulum. Nulla facilisi. Cras portitor lacus dolor, quis tincidunt nisl vestibulum at. Mauris tristique diam ex, egetium dignissim enim scelerisque none.</p>
                        <p>Mauris varius mi diam, a malesuada risus cursus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id luctus quam. Aliquam lacinia dictum metus, ut sodales purus ultrices eget. Curabitur at mollis velit, et molestie est.</p>
                        <button>DISCOVER NOW</button>
                    </aside>
                    <img src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/grid-banner-1_e9969506-5a7c-48d3-9253-1c14b7716ab0_600x.jpg?v=1615322226"></img>
                </div>
                <div data-aos="fade-up">
                    <img src="https://contactsforless.ca/wp-content/uploads/2018/07/bausch-and-lomb-sight-savers-contact-lens-case.jpg" />
                    <aside>
                        <h1 className="text-5xl font-medium">A unique blend that celebrates your body</h1>
                        <p>Blandit turpis cursus in hac habitasse platea. In hac habitasse platea dictumst quisque sagittis purus sit. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio euornare arcu odio</p>
                        <p>Enim ut sem viverra aliquet eget sit. Ut sem nulla pharetra diam sit amet. Non arcu risus quis varius quam quisque id diam. Fermentum leo vel orci porta non pulvinar. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Donec pretium vulputate sapien nec marques querum</p>
                        <hr />
                        <ul>
                            <li>
                                <i class="fa-solid fa-leaf"></i> New look contact lenses
                            </li>
                            <li>
                                <i class="fa-solid fa-leaf"></i> Perfect wear contact lenses
                            </li>
                        </ul>
                        <hr />
                        <button>DISCOVER THE BEST</button>
                    </aside>
                </div>
                <div className="third-div" data-aos="fade-up">
                    <div>
                        <img data-aos-anchor-placement="top-center" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/grid-banner-3_360x.jpg?v=1615322225" />
                        <aside>
                            <h1 className="text-5xl font-medium">Safe, Effective, Stable, and Convenient</h1>
                            <p>Cras sagittis sapien tellus, id lacinia nunc suscipit vitae. Integer eget lectus et diam lobortis laoreet vitae id nunc. Pellentesque a rutrum felis. Donec eget le mauris lobortis cursus.</p>
                            <button>DISCOVER MORE</button>
                        </aside>
                    </div>
                </div>
                </main>
                <CommentCarousel />
                <main className="Home">
                <div data-aos="fade-up" className="p-5">
                    <aside >
                        <h1 className="text-5xl font-medium">Adaptation to contact lenses is rapid and trouble-free</h1>
                        <p>Curabitur vitae molestie urnamia. Duis accumsan neque ac orci maximus sollicitudin. Vivamus sit in vestibulum eget sed ipsum urna amet velit consequat, rhoncus felis ut, commodo tortor.</p>
                        <p>Mauris varius mi diam, a malesuada risus cursus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id luctus quam. Aliquam lacinia dictum metus, ut sodales purus ultrices eget. Curabitur at mollis velit, et molestie est.</p>
                        <button>LEARN MORE</button>
                    </aside>
                    <img src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/grid-banner-4_600x.jpg?v=1615322225"></img>
                </div>
                <div  data-aos="fade-up"  className="three-eyes d-flex flex-column align-items-center w-100 p-5">
                    <img
                    src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/lens-images_6351f3b4-586b-4443-ab87-956556c7d24f.png?v=1615322226"
                    />
                    <h1>Designed for comfort & style</h1>
                    <p className="text-center w-75">Aliquam quam diam, ornare at luctus quis, auctor sed leo. Vivamus sagittis est laoreet, euismode nec, tristique ipsum. Phasellus id turpis dui. Donec eu ullamcorper diam. Sed porttitor, turpis id molestie euismod, tortor nibh placerat diam, at hendrerit magna urna scelerisque.</p>
                    <button>DISCOVER NOW</button>
                </div>
                <div  data-aos="fade-up"  className="d-flex flex-column align-items-center w-100 p-5">
                    <h1 className="w-75 text-center">“Contact lenses can be worn every day, part-time or just for going out and special occasions”</h1>
                    <div className="w-75 d-flex flex-row justify-content-center align-items-center">
                        <img className="w-25 h-50 m-4" src="https://www.acuvue.com/sites/acuvue_us/files/acuvue_logo_0.png" alt="" />
                        <img className="w-25 h-50 m-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_Alcon.svg/2560px-Logo_Alcon.svg.png" alt="" />
                        <img className="w-25 h-25 m-4" src="https://logos-download.com/wp-content/uploads/2019/01/Solotica_Logo.png" alt="" />
                        <img className="w-25 h-50 m-4" src="https://logos-world.net/wp-content/uploads/2020/09/Johnson-Johnson-Logo.png" alt="" />
                    </div>
                </div>
                <div data-aos="fade-up"  className="three-eyes d-flex flex-column align-items-center w-100 p-5">
                    
                    <h1 className="text-5xl font-medium">Spread Happiness</h1>
                    <p className="text-center w-75">Nam libero justo laoreet sit amet cursus sit marques ipsum</p>
                    <div>
                        <div className="flex flex-column m-2"> 
                            <img className="w-100 mx-0" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/articles/blog-10.jpg?v=1599039116" />
                            <p className="font-weight-bold">Keep your vision healthy and powerful for ever</p>
                            <a>READ MORE</a>
                        </div>
                        <div className="flex flex-column m-2">
                            <img className="w-100 mx-0" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/articles/blog-9.jpg?v=1599039098" />
                            <p className="font-weight-bold">Your eyes, your best tool, take care of them</p>
                            <a>READ MORE</a>
                        </div>
                        <div className="flex flex-column m-2">
                            <img className="w-100 mx-0" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/articles/blog-8.jpg?v=1599039137" />
                            <p  className="font-weight-bold">Q&A with Dr. Jessica Ritch, Minimally Invasive Ophthalmologist</p>
                            <a>READ MORE</a>
                        </div>
                        <div  className="flex flex-column m-2">
                            <img className="w-100 mx-0" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/articles/blog-7.jpg?v=1599039157" />
                            <p className="font-weight-bold">Why We Ask So Many In Depth Questions About Your Health</p>
                            <a>READ MORE</a>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="p-5">
                        <div class="mapouter">
                            <div class="gmap_canvas">
                                <iframe width="800" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Baku%20Linza%20Life&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                </iframe>
                            </div>  
                        </div>
                        <div className="flex flex-column justify-content-start px-5">
                                <h1 className="text-5xl font-medium">Ünvan</h1>
                                <p className="">Bakı şəhəri,28 May,Puşkin 30A</p>
                                <button>
                                    <a 
                                    href="https://goo.gl/maps/VvcT227WGQvgG5w38" 
                                    className="text-light"
                                    target="_blank"
                                    >Google Maps-də aç</a>    
                                </button>
                        </div> 
                </div>
                </main>
        </div>
    )
}

export default Home;