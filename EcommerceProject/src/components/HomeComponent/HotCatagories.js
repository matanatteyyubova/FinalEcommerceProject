import React  from "react";
import Slider from "react-slick";
import hot1 from '../../assets/img/hot1.jpg'
import hot2 from '../../assets/img/hot2.jpg'
import hot3 from '../../assets/img/hot3.jpg'
import hot4 from '../../assets/img/hot4.jpg'
import hot5 from '../../assets/img/hot5.jpg'
import hot6 from '../../assets/img/hot6.jpg'
import hot7 from '../../assets/img/hot7.jpg'
import { useTranslation } from "react-i18next";



const Responsive =()=> {
  const { t } = useTranslation();

    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 1,
      initialSlide: 0,
    
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
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
      <div className="hot-catagories"  data-aos="fade-up" data-aos-duration="3000">
       <div className="hot-text">
           <div className="title-box">
               <h3 id="product-name">{t('text67')}</h3>
           </div>
           <div className="line"></div>
       </div>
        <Slider {...settings}>
          <div className="hot-item">
             <img src={hot1} alt="err" />
             <div className="hotimg-text">
                 <p>{t('text68')}</p>
             </div>
          </div>
          <div className="hot-item">
          <img src={hot2} alt="err" />
          <div className="hotimg-text">
                 <p>{t('text69')}</p>
             </div>
          </div>
          <div className="hot-item">
          <img src={hot3} alt="err" />
          <div className="hotimg-text">
                 <p>{t('text70')}</p>
             </div>
          </div>
          <div className="hot-item">
          <img src={hot4} alt="err" />
          <div className="hotimg-text">
                 <p>{t('text71')}</p>
             </div>
          </div>
          <div className="hot-item">
          <img src={hot5} alt="err" />
          <div className="hotimg-text">
                 <p>{t('text72')}</p>
             </div>
          </div>
          <div className="hot-item">
          <img src={hot6} alt="err" />
          <div className="hotimg-text">
                 <p>{t('text73')}</p>
             </div>
          </div>
          <div className="hot-item">
          <img src={hot7} alt="err" />
          <div className="hotimg-text">
                 <p>{t('text74')}</p>
             </div>
          </div>
          
        </Slider>
      </div>
    );
  
}

export default Responsive