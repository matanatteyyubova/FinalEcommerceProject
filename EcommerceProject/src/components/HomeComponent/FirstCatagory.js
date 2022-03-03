import React from 'react';
import home1 from '../../assets/img/home1.jpg'
import home2 from '../../assets/img/home2.jpg'
import home3 from '../../assets/img/home3.jpg'
import home4 from '../../assets/img/home4.jpg'

const FirstCatagory = () => {
    return (
        <div>
            <section className='bestC' className="product"  data-aos="fade-up" data-aos-duration="3000">
                <div className="brends-catagory">
                    <div className="catagory-box">
                        <img src={home1} alt="" />
                    </div>
                    <div className="catagory-box">
                        <img src={home4} alt="" />
                    </div>
                    <div className="catagory-box">
                        <img src={home2} alt="" />
                    </div>
                    <div className="catagory-box">
                        <img src={home3} alt="" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FirstCatagory;