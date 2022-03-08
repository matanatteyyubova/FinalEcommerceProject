import React from 'react';
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
import {  useTranslation } from "react-i18next";

const BrendsBarner=()=> {
     const {t} =useTranslation();
        return (
            <div>
                 <section className='brends_barners' >
                   <div className="brend-box" data-aos="fade-right"  data-aos-duration="3000" data-aos-delay="300">
                       <img src={img1} alt="" />
                       <div className="brend-name-text">
                            <h3>{t('text16')}</h3>
                       </div>
                       <div className="brend-text">
                            <h5>{t('text16')}</h5>
                             <ul>
                                  <li><a href="#">{t('text17')}</a></li>
                                  <li><a href="#">{t('text18')}</a></li>
                                  <li><a href="#">{t('text19')}</a></li>
                                  <li><a href="#">{t('text20')}</a></li>
                                  <li><a href="#">{t('text21')}</a></li>
                                  <li><a href="#">{t('text22')}</a></li>
                             </ul>
                       </div>
                  </div> 

                  <div className="brend-box" data-aos="fade-left"  data-aos-duration="3000" data-aos-delay="300">
                  <div className="brend-name-text">
                            <h3>{t('text23')}</h3>
                       </div>
                       <div className="brend-text">
                            <h5> {t('text23')}</h5>
                            <ul>
                                 <li><a href="#">{t('text24')}</a></li>
                                 <li><a href="#">{t('text25')}</a></li>
                                 
                            </ul>
                       </div>
                       <img src={img2} alt="" />
                  </div>

                  <div className="brend-box" data-aos="fade-right"  data-aos-duration="3000"  data-aos-delay="300">
                  <div className="brend-name-text">
                            <h3>{t('text26')}</h3>
                       </div>
                       <div className="brend-text">
                            <h5>{t('text26')}</h5>
                            <ul>
                                 <li><a href="#">{t('text27')}</a></li>
                                 <li><a href="#">{t('text28')}</a></li>
                                 
                            </ul>
                       </div>
                       <img src={img3} alt="" />
                  </div>

                  <div className="brend-box" data-aos="fade-left"  data-aos-duration="3000" data-aos-delay="300">
                  <div className="brend-name-text">
                            <h3> {t('text29')}</h3>
                       </div>
                  <div className="brend-text">
                            <h5>{t('text29')}</h5>
                            <ul>
                                 <li><a href="#">{t('text30')}</a></li>
                                 <li><a href="#">{t('text31')}</a></li>
                                 <li><a href="#">{t('text32')}</a></li>
                                 <li><a href="#">{t('text33')}</a></li>
                                 <li><a href="#">{t('text34')}</a></li>
                                 
                            </ul>
                       </div>
                       <img src={img4} alt="" />
                  </div>   
                 </section> 
            </div>
        );
    
}

export default BrendsBarner;