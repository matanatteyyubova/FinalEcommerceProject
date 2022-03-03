import React from 'react';
import { useTranslation } from "react-i18next";


const News = () => {
    const { t } = useTranslation();

    return (
        <div className='news-sec' data-aos="fade-up" data-aos-duration="3000">
            <div className="row  g-2 ">
                <div className="col col-lg-4  col-sm-12 ">
                  <div className="content">
                  <div className="icon-box">
                    <i class="fa-solid fa-truck"></i>
                    </div>
                    <div className="news-text">
                        <h4>{t('text84')}</h4>
                        <p>{t('text85')}</p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg-4 col-sm-12 ">
               <div className="content">
               <div className="icon-box">
                <i class="fa-solid fa-dollar-sign"></i>
                    </div>
                    <div className="news-text">
                        <h4> {t('text86')}</h4>
                        <p>{t('text87')}</p>
                    </div>
               </div>
                </div>
                <div className="col col-lg-4 col-sm-12  ">
              <div className="content">
              <div className="icon-box">
                <i class="fa-solid fa-gears"></i>
                    </div>
                    <div className="news-text">
                        <h4>{t('text88')}</h4>
                        <p>{t('text89')}</p>
                    </div>
              </div>
                </div>
            </div>
        </div>
    );
};

export default News;