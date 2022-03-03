import React from 'react';
import { useTranslation } from "react-i18next";


const HomeBlogItem = (props) => {
    const { t } = useTranslation();
    return (
        <div className='homeBlogItem'>
            <div className="card ">
                <div className="imgBx">
                    <img src={props.img} alt="" />
                </div>
                <div className="content-card ">
                      <div className="blog-date">  <h1>{props.date}</h1>  <h6>{props.title}</h6></div>
                    <p>{props.desc}</p>
                    <button className='blog'>{t('text65')} <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
    );
};

export default HomeBlogItem;