import Carousel from "react-bootstrap/Carousel";
import "./AdsCarousel.css"

const AdsCarousel =()=>{
    return(
        <div className="adscarousel w-[100%] h-[350px]">
            <Carousel variant='dark' className="w-[100%] h-[300px]">
                <Carousel.Item>
                    <div className=''>
                        <img src="https://linzalar.az/public/images/slider3.jpg" alt="" />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className=''>
                        <img src='https://linzalar.az/public/images/slider1.jpg' alt=''/>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}

export default AdsCarousel;