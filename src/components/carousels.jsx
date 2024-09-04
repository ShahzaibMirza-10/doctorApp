import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img1.jpg';
import img2 from '../assets/img2.jpg';
import img3 from '../assets/img3.jpg';
import '../styles/carousels.css'

function Carousels() {
  return (
    <Carousel className='carousels'>
      <Carousel.Item>
        <img className='carousel1'  />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel2' />
      </Carousel.Item>
      <Carousel.Item>
        <img className='carousel3' />
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;