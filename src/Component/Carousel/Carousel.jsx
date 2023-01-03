import {Carousel} from 'react-bootstrap';
import "./Carousel.css";

function DarkVariantExample() {
  return (
    <div className='carousel'>
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
        <img
          className="d-block w-100"
          src="/images/91826.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='text-white'>Yeni iliniz mübarək</h5>
          <p className='text-white'>Yeni ilə uyğun kampaniyalardan yararlanın</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default DarkVariantExample;