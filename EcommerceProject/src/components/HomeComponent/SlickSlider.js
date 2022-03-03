import React, { Component } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default class Responsive extends Component {
  render() {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 12,
        autoplay: true,
        speed: 20000,
        autoplaySpeed: 3000,
        cssEase:"linear",
        arrow:false,

      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
       
        <Slider {...settings} >
          <div className='slick1'>
            {/* <img className='slick-slider' src="https://esport.az/uploads/brands/asics.webp" alt="" /> */}
          </div>
          <div className='slick2'>
            {/* <img className='slick-slider' src="https://esport.az/uploads/brands/body-sculpture.webp" alt="" /> */}
          </div>
          <div className='slick3'>
            {/* <img className='slick-slider' src="https://esport.az/uploads/brands/kettler.webp" alt="" /> */}
          </div>
          <div className='slick4'>
            {/* <img  className='slick-slider' src="https://esport.az/uploads/brands/speedo.webp" alt="" /> */}
          </div>
          <div className='slick5'>
              {/* <img className='slick-slider' src="https://esport.az/uploads/brands/stark.webp" alt="" /> */}
          </div>
          <div className='slick6'>
                {/* <img className='slick-slider' src="https://esport.az/uploads/brands/joma.webp" alt="" /> */}
          </div>
          <div className='slick7'>
             {/* <img className='slick-slider'  src="https://esport.az/uploads/brands/fashy.webp" alt="" /> */}
          </div>
          <div className='slick8'>
            {/* <img className='slick-slider' src="https://esport.az/uploads/brands/meshque.webp" alt="" /> */}
          </div>
          <div className='slick9'>
            {/* <img className='slick-slider' src="https://esport.az/uploads/brands/wilson.webp" alt="" /> */}
          </div>
          <div className='slick10'>
             {/* <img className='slick-slider' src="https://esport.az/uploads/brands/eleiko.webp" alt="" /> */}
          </div>
          <div className='slick11'>
          {/* <img className='slick-slider' src="https://esport.az/uploads/brands/mikasa.webp" alt="" /> */}
          </div>
          <div className='slick12'>
            {/* <img className='slick-slider' src="https://esport.az/uploads/brands/asics.webp" alt="" /> */}
          </div>
        </Slider>
      </div>
    );
  }
}