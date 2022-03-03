import React from 'react';
import barner1 from '../../assets/img/barner1.jpg'
import barner2 from '../../assets/img/barner2.jpg'
import barner3 from '../../assets/img/barner3.jpg'
import {  useTranslation } from "react-i18next";

const Barner =()=> {
  const {t} =useTranslation();
        return (
            <div data-aos="fade-up">
                <div className="image-galery" data-aos="fade-up"  data-aos-duration="3000" >
                    
                    <div className="image-box"  >
                      <img src={barner1} alt="" /> 
                      <div className="barner-text">
                        <button>{t('text10')}</button>
                      </div>
                      <div className="text">
                        <h4>{t('text11')}</h4>
                        <h6>{t('text12')}</h6>
                      </div>
                    </div>
                    <div className="image-box" >
                      <img src={barner2} alt="" /> 
                      <div className="barner-text1">
                        <button>{t('text10')}</button>
                      </div>
                      <div className="text1">
                        <h4 > {t('text13')}</h4>
                        
                      </div>
                    </div>
                    <div className="image-box" >
                      <img src={barner3} alt="" /> 
                      <div className="barner-text">
                        <button>{t('text10')}</button>
                      </div>
                      <div className="text">
                        <h4>{t('text14')}</h4>
                        <h6>{t('text15')}</h6>
                      </div>
                    </div>
                </div>
            </div>
        );
    
}

export default Barner;