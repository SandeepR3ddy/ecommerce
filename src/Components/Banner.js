import React from 'react'
import { Carousel } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import slide1 from './bannerimages/one.jpg'
import slide2 from './bannerimages/two.jpg'
import slide3 from './bannerimages/three.jpg'
import slide4 from './bannerimages/four.png'
import slide5 from './bannerimages/five.jpg'

const Banner = () => {
  return (
    <Carousel>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide1}
        alt="First slide"
      />
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide2}
        alt="Second slide"
      />
  
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide3}
        alt="Third slide"
      />
  
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={slide4}
        alt="Third slide"
      />
  </Carousel.Item>
  </Carousel>
  )
}

export default Banner