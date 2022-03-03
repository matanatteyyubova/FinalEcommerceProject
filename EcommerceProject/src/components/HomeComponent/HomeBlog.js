import React from 'react';
import data3 from '../data/homeblogdata';
import HomeBlogItem from './HomeBlogItem';
import { useTranslation } from "react-i18next";

const HomeBlog = () => {
    const { t } = useTranslation();

    return (
       <div className="homeblog"  data-aos="fade-up" data-aos-duration="3000">
        <div className="product1-text">
        <div className="title-box">
        <h2 id="product-name" className="product-name"><span>{t('text59')}</span> {t('text591')}</h2>
        </div>
       <div className="line"></div>
       <button >{t('text60')}</button>
       </div>
            <div className='row'>
             {data3.homeBlogData.map( (item,index)=>{
                            return(
                                <HomeBlogItem img={item.img}
                                date={item.date}
                                title={t(item.title)}
                                desc={t(item.desc)}
                                
                                />
                              

                            )
                })}
        </div>
       </div>
    );
};

export default HomeBlog;