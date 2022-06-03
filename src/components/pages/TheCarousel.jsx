import React from 'react';
import { ReactDOM } from 'react';
import { render } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import Chart1 from './chart1.svg'
import Chart2 from './chart2.svg'
import Chart3 from './chart3.svg'

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel autoPlay showArrows showIndicators>
       <div>					
			 <img src="./chart1.svg" />
         </div>
         <div>
           <img src="./chart2.svg" />
         </div>
        <div>
         <img src="./chart3.svg" />
        </div> 
      </Carousel>
    </div>
  );
}


 {/* <div style={{ backgroundImage: `url(${Chart1})`, width: '6rem', height: '6rem', backgroundPosition: 'cover', backgroundPosition: 'center'}}/> */}


// {
  /* <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./chart3.svg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./chart1.svg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>

  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./chart2.svg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
	)
} */


export default CarouselComponent;
