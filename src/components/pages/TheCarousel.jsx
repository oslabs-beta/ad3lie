import React from 'react';
import { ReactDOM } from 'react';
import { render } from 'react-dom';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import myStyles from '../../components/../styles.css'
import chart1 from './chart1.svg';
import chart2 from './chart2.svg';
import chart3 from './chart3.svg';
import chart4 from './chart4.svg';
import chart5 from './chart5.svg';

function CarouselComponent() {
  return (
    <div className="carousel-wrapper">
      <Carousel
        className="glass3"
        autoPlay
        showArrows
        showIndicators
        showThumbs={false}
        infiniteLoop={true}
      >
        <div>
          <img src={chart1} className="h-[550px] pb-[25px]" />
        </div>
        <div>
          <img src={chart2} className="h-[550px] pb-[25px]" />
        </div>
        <div>
          <img src={chart3} className="h-[550px] pb-[25px]" />
        </div>
        <div>
          <img src={chart5} className="h-[550px] pb-[25px]" />
        </div>
        <div>
          <img src={chart4} className="h-[550px] pb-[25px]" />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
