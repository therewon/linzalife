import "./Home.css";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Carousel from "../../Component/Carousel/Carousel";
import CommentCarousel from "../../Component/CommentCarousel/CommentCarousel";
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    useEffect(() => {
        Aos.init({
            duration: 1500
        })
    }, [])
    return (
        <div className="dark:bg-black dark:text-white">
            <Carousel />
            <div className="home flex flex-col items-center mt-[200px] sm:mt-[700px] -z-30  ">
                <div data-aos="fade-up" className="flex container flex-col my-0 sm:my-[50px] w-[90%] sm:w-[80%] lg:flex-row">
                    <aside >
                        <h1 className="text-4xl sm:text-5xl font-medium">Wider Field of View & Cosmetically Superior</h1>
                        <p>Nunc consequat nibh ut pretium vestibulum. Nulla facilisi. Cras portitor lacus dolor, quis tincidunt nisl vestibulum at. Mauris tristique diam ex, egetium dignissim enim scelerisque none.</p>
                        <p>Mauris varius mi diam, a malesuada risus cursus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id luctus quam. Aliquam lacinia dictum metus, ut sodales purus ultrices eget. Curabitur at mollis velit, et molestie est.</p>
                        <button>DISCOVER NOW</button>
                    </aside>
                    <img className="  sm:w-[600px] sm:h-[400px]" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/grid-banner-1_e9969506-5a7c-48d3-9253-1c14b7716ab0_600x.jpg?v=1615322226"></img>
                </div>
                <div data-aos="fade-up" className="flex my-[50px] w-[80%] lg:flex-row flex-col-reverse  container">
                    <img className="h-[200px] sm:h-[400px]" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/grid-banner-1-alt-2_770x.jpg?v=1615322226" />
                    <aside>
                        <h1 className="text-5xl font-medium">A unique blend that celebrates your body</h1>
                        <p>Blandit turpis cursus in hac habitasse platea. In hac habitasse platea dictumst quisque sagittis purus sit. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio euornare arcu odio</p>
                        <p>Enim ut sem viverra aliquet eget sit. Ut sem nulla pharetra diam sit amet. Non arcu risus quis varius quam quisque id diam. Fermentum leo vel orci porta non pulvinar. Nec sagittis aliquam malesuada bibendum arcu vitae elementum. Donec pretium vulputate sapien nec marques querum</p>
                        <hr className="border-[2px] rounded-sm border-[#134072]" />
                        <ul>
                            <li>
                                <i class="fa-solid fa-leaf"></i> New look contact lenses
                            </li>
                            <li>
                                <i class="fa-solid fa-leaf"></i> Perfect wear contact lenses
                            </li>
                        </ul>
                        <hr className="border-[2px] rounded-sm border-[#134072]" />
                        <button>DISCOVER THE BEST</button>
                    </aside>
                </div>
            </div>
            <div className="flex w-full sm:py-[50px] bg-[#F5F2F5] justify-center" data-aos="fade-up">
                <div className="container flex flex-col w-[60%] gap-8 lg:flex-row m-0">
                    <img data-aos-anchor-placement="top-center" className="m-0" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/grid-banner-3_360x.jpg?v=1615322225" />
                    <aside className="flex flex-col gap-2">
                        <h1 className="text-3xl sm:text-5xl font-medium">Safe, Effective, Stable, and Convenient</h1>
                        <p>Cras sagittis sapien tellus, id lacinia nunc suscipit vitae. Integer eget lectus et diam lobortis laoreet vitae id nunc. Pellentesque a rutrum felis. Donec eget le mauris lobortis cursus.</p>
                        <button className="w-[200px] h-[50px] bg-[#134072] rounded text-white font-semibold">DISCOVER MORE</button>
                    </aside>
                </div>
            </div>
            <CommentCarousel />
            <main className="home flex flex-col items-center justify-center">
                <div data-aos="fade-up" className="flex flex-col lg:flex-row items-center w-[80%] my-10 container">
                    <aside>
                        <h1 className="text-5xl font-medium">Adaptation to contact lenses is rapid and trouble-free</h1>
                        <p>Curabitur vitae molestie urnamia. Duis accumsan neque ac orci maximus sollicitudin. Vivamus sit in vestibulum eget sed ipsum urna amet velit consequat, rhoncus felis ut, commodo tortor.</p>
                        <p>Mauris varius mi diam, a malesuada risus cursus pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin id luctus quam. Aliquam lacinia dictum metus, ut sodales purus ultrices eget. Curabitur at mollis velit, et molestie est.</p>
                        <button>LEARN MORE</button>
                    </aside>
                    <img className="lg:block hidden" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/grid-banner-4_600x.jpg?v=1615322225"></img>
                </div>
                <div data-aos="fade-up" className="flex flex-col my-[50px] w-full py-[50px] items-center gap-2 bg-[#EFE4DA]">
                    <div className="container flex flex-col items-center">
                    <img
                        src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/lens-images_6351f3b4-586b-4443-ab87-956556c7d24f.png?v=1615322226"
                    />
                    <h1 className="font-medium text-5xl text-center">Designed for comfort & style</h1>
                    <p className="text-center w-75 leading-8">Aliquam quam diam, ornare at luctus Aliquam quam diam, ornare at luctus quis, auctor sed leo. Vivamus sagittis est laoreet, euismode nec, tristique ipsum. Phasellus id turpis dui. Donec eu ullamcorper diam. Sed porttitor, turpis id molestie euismod, tortor nibh placerat diam, at hendrerit magna urna scelerisque. quis, auctor sed leo. Vivamus sagittis est laoreet, euismode nec, tristique ipsum. Phasellus id turpis dui. Donec eu ullamcorper diam. Sed porttitor, turpis id molestie euismod, tortor nibh placerat diam, at hendrerit magna urna scelerisque.</p>
                    <button>DISCOVER NOW</button>
                    </div>
                </div>
                <div data-aos="fade-up" className="flex flex-col my-[50px] container  items-center justify-center">
                    <h1 className="w-75 text-center text-xl">“Contact lenses can be worn every day, part-time or just for going out and special occasions”</h1>
                    <div className="w-75 d-flex flex-row justify-content-center align-items-center ">
                        <img className="w-25 h-50 m-2 lg:m-4" src="https://www.acuvue.com/sites/acuvue_us/files/acuvue_logo_0.png" alt="" />
                        <img className="w-25 h-50 m-2 lg:m-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_Alcon.svg/2560px-Logo_Alcon.svg.png" alt="" />
                        <img className="w-25 h-25 m-2 lg:m-4" src="https://logos-download.com/wp-content/uploads/2019/01/Solotica_Logo.png" alt="" />
                        <img className="w-25 h-50 m-2 lg:m-4" src="https://logos-world.net/wp-content/uploads/2020/09/Johnson-Johnson-Logo.png" alt="" />
                    </div> 
                </div>
                <div data-aos="fade-up" className="flex flex-col my-[50px] w-full items-center bg-[#EFE4DA] py-[50px]">
                    <div className="flex flex-col items-center container">
                    <h1 className="text-5xl font-medium text-center">Spread Happiness</h1>
                    <p className="text-center">Nam libero justo laoreet sit amet cursus sit marques ipsum</p>
                    <div className="flex flex-col lg:flex-row w-[80%]">
                        <div className="flex flex-col m-2">
                            <img className="mx-0" src="https://cdn.shopify.com/s/files/1/0447/5115/9447/articles/blog-10.jpg?v=1599039116" />
                            <p>Keep your vision healthy and powerful for ever</p>
                            <a>READ MORE</a>
                        </div>
                        <div className="flex flex-column m-2">
                            <img src="https://cdn.shopify.com/s/files/1/0447/5115/9447/articles/blog-9.jpg?v=1599039098" />
                            <p>Your eyes, your best tool, take care of them</p>
                            <a>READ MORE</a>
                        </div>
                        <div className="flex flex-column m-2">
                            <img src="https://cdn.shopify.com/s/files/1/0447/5115/9447/articles/blog-8.jpg?v=1599039137" />
                            <p>Q&A with Dr. Jessica Ritch, Minimally Invasive Ophthalmologist</p>
                            <a>READ MORE</a>
                        </div>
                        <div className="flex flex-column m-2">
                            <img src="https://cdn.shopify.com/s/files/1/0447/5115/9447/articles/blog-7.jpg?v=1599039157" />
                            <p>Why We Ask So Many In Depth Questions About Your Health</p>
                            <a>READ MORE</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div data-aos="fade-up" className="flex flex-col my-[50px] w-[80%] md:flex-row p-5 gap-4 container">
                    <div class="mapouter" className="hidden lg:block max-w-[60%]">
                        <div class="gmap_canvas">
                            <iframe width="800" height="350" id="gmap_canvas" src="https://maps.google.com/maps?q=Baku%20Linza%20Life&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                            </iframe>
                        </div>
                    </div>
                    <div className="flex flex-col justify-start">
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