import { Carousel } from 'react-bootstrap';
import "./Carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function DarkVariantExample() {
  return (
    <div className='carousel absolute top-0 w-full m-0 p-0' >
      <Carousel variant="dark" className=''>
        <Carousel.Item>
          <div className="w-full">
            <img
              className="object-cover  sm:h-[700px] w-full"
              src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/slider-1.jpg?v=1615322224"
              alt="First slide"
            />
            <div className='absolute left-[50%] translate-x-[-50%] top-[40%] flex flex-col gap-3 w-[80%] sm:text-left'>
              <p className='text-md font-bold md:text-xl text-sm'>VISION FOR FUTURE</p>
              <h1 className='md:text-[60px] text-4xl font-medium'>See Better, Look Perfect</h1>
              <Link to="/catalog">
              <button className='text-white bg-[#134072] md:p-3 p-2 rounded font-semibold'>
                DISCOVER NOW 
              </button>
              </Link>
            </div>
            
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="w-full">
            <img
              className="object-cover  sm:h-[700px] w-full"
              src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/slider-3.jpg?v=1615322225"
              alt="second slide"
            />
            <div className='absolute left-[50%] translate-x-[-50%] top-[40%] flex flex-col md:gap-4 gap-2 w-[80%] sm:text-left text-center'>
              <p className='text-md font-bold md:text-xl text-sm'>MULTI USE LENSES</p>
              <h1 className='md:text-[60px] text-4xl font-medium'>Color Zero Power 3</h1>
              <Link to="/catalog">
              <button className='text-white bg-[#134072] md:p-3 p-2 rounded font-semibold'>
                DISCOVER NOW
              </button>
              </Link>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="w-full">
            <img
              className="object-cover  sm:h-[700px] w-full"
              src="https://cdn.shopify.com/s/files/1/0447/5115/9447/files/slider-2.jpg?v=1615322225"
              alt="third slide"
            />
            <div className='absolute left-[50%] translate-x-[-50%] top-[40%] flex flex-col md:gap-4 gap-2 w-[80%] sm:text-left text-center'>
              <p className='text-md font-bold md:text-xl text-sm'>SPOT THE DIFFERNECE</p>
              <h1 className='md:text-[60px] text-4xl font-medium'>Super Thin Contact Lens</h1>
              <Link to="/catalog">
              <button className='text-white bg-[#134072] md:p-3 p-2 rounded font-semibold'>
                DISCOVER NOW
              </button>
              </Link>
            </div>
          </div>
          <Carousel.Caption>
            <h5></h5>
            <p></p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default DarkVariantExample;