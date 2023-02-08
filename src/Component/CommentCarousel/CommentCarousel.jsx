import Carousel from 'react-bootstrap/Carousel';
import "./CommentCarousel.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function CommentCarousel() {
  return (
    <div  className='CommentCarousel hidden lg:block'>
    <Carousel variant='dark'>
      <Carousel.Item>
        <div className='d-flex flex-column '>
            <img src='https://cdn.shopify.com/s/files/1/0447/5115/9447/files/testi1.jpg?v=1615322226' 
                alt='boy'
                className='first-image'
                />
            <p>Quisque luctus, elit feugiat varius, 
                quam turpis imperdiet massa,
                amet tempus daugue aorci.
                Duis pulvinar metus, dignissim. 
                Nulla justo lorem, efficitur feugiat elit in,
                finibus sagittis ligula. 
                Curabitur duimagna tincidunt imperdiet avenenatis sem.
            </p>
            <h5>- OLIVER HENDRY, HUMAN RESOURCE</h5>
        </div>
      </Carousel.Item>
      <Carousel.Item>
         <div className='d-flex flex-column '>
            <img src='https://cdn.shopify.com/s/files/1/0447/5115/9447/files/testi2.jpg?v=1615322226' 
                alt='boy'
                className='first-image'
                />
            <p>Quisque luctus, elit feugiat varius, 
                quam turpis imperdiet massa,
                amet tempus daugue aorci.
                Duis pulvinar metus, dignissim. 
                Nulla justo lorem, efficitur feugiat elit in,
                finibus sagittis ligula. 
                Curabitur duimagna tincidunt imperdiet avenenatis sem.
            </p>
            <h5>- SISLIYA, GYM TRAINER</h5>
        </div>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default CommentCarousel;