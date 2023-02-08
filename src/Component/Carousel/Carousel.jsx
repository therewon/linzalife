import {Carousel} from 'react-bootstrap';
import "./Carousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function DarkVariantExample() {
  return (
    <div className='carousel w-full hidden lg:block' >
    <Carousel variant="dark" className='w-100 h-100'>
      <Carousel.Item>
        <div className='h-100'>
        <img
          className="d-block w-100"
          src="https://www.dryeyewa.com.au/application/files/cache/thumbnails/0bed44377f057c520d72058ee491d9fe.jpg"
          alt="First slide"
        />
        </div>
        <Carousel.Caption>
          <h1>RƏNGLİ GÖZLƏR, RƏNGLİ BAXIŞLAR</h1>
          <p>İstənilən linzalara və eynəklərə ən münasib qiymətə sahib ol</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='second-slide d-block w-100'>
        <img
          className="d-block w-100"
          src="https://www.dryeyewa.com.au/application/files/cache/thumbnails/0bed44377f057c520d72058ee491d9fe.jpg"
          alt="First slide"
        />
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