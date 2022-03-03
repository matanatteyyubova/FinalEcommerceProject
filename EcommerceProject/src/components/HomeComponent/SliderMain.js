import React from 'react';
import ferro1 from '../../assets/img/ferro1.jpg';
import ferro2 from '../../assets/img/ferro2.jpg';
import ferro4 from '../../assets/img/ferro4.jpg';
import {  useTranslation } from "react-i18next";


const SliderMain =()=> {
  const {t} =useTranslation()
  
        return (
            <div>
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-indicators ">
    <button  type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="slider-text">
              <h1 class="animate__animated animate__bounceInRight animate__delay-1s">Ferro</h1>
              <p class="animate__animated animate__bounceInRight animate__delay-2s">{t('text9')}</p>
               <button className="slider-button animate__animated animate__bounceInRight animate__delay-3s">{t('text10')} <i class="fas fa-arrow-right"></i></button>
            </div>
            <img src={ferro1} className="d-block w-100 mainSlider" alt="..." />
          </div>
          <div className="carousel-item">
          <div className="slider-text ">
              <h1 class="animate__animated animate__bounceInRight animate__delay-1s">Joma</h1>
              <p class="animate__animated animate__bounceInRight animate__delay-2s">{t('text9')}</p>
               <button className="slider-button animate__animated animate__bounceInRight animate__delay-3s">{t('text10')} <i class="fas fa-arrow-right"></i></button>
            </div>
            <img src={ferro2} className="d-block w-100 mainSlider" alt="..." />
          </div>
          <div className="carousel-item">
          <div className="slider-text ">
              <h1 class="animate__animated animate__bounceInRight animate__delay-1s">Nike</h1>
              <p class="animate__animated animate__bounceInRight animate__delay-2s">{t('text9')}</p>
               <button className="slider-button animate__animated animate__bounceInRight animate__delay-3s">{t('text10')}<i class="fas fa-arrow-right"></i></button>
            </div>
            <img src={ferro4} className="d-block w-100 mainSlider" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
          <span className="carousel-control-next-icon " aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
            </div>
        );
    
}

export default SliderMain;