import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import "./App.css";

const Corousel=()=> {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  return (
  <>
<div className="border border-dark border-2 opacity-5 text-light text-center fw-bold mb-5">
  <h1 >About</h1>
</div>
    <Carousel activeIndex={index} onSelect={handleSelect} >
      <Carousel.Item > 
        <img 
          src="shadow.png"
          alt="First slide"
          className=" d-block mx-auto gambarCarousel"
        />
        <Carousel.Caption>
        
        {/* <p className='text-dark fw-bold'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
       className=" d-block mx-auto gambarCarousel"
          src="shadow.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        {/* <p className='text-dark fw-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
      className=" d-block mx-auto gambarCarousel"
          src="shadow.png"
          alt="Third slide"
        />

        <Carousel.Caption>
    
        {/* <p className='text-dark fw-bold'> Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  );
}


export default Corousel;