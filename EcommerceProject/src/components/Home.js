import React, { Component } from 'react';
import SliderMain from  './HomeComponent/SliderMain';
import SlickSlider from './HomeComponent/SlickSlider';
import Barner from './HomeComponent/Barner';
import BrendsBarner from './HomeComponent/BrendsBarner';
import Product from './Product';
import FirstCatagory from './HomeComponent/FirstCatagory';
import Product2 from './Product2';
import News from './HomeComponent/News';
import HomeBlog from './HomeComponent/HomeBlog';
import EndBarner from './HomeComponent/EndBarner';
import HotCatagories from './HomeComponent/HotCatagories'



class Home extends Component {
    render() {
        return (
            <div className='home'>
        
               <section className='sec1'>
                  <div className="content">
                      <SliderMain />
                      </div> 
                </section>
                
                 
                <section className='sec2 ' >
                    <div className="slick_content">
                        <SlickSlider />
                    </div>
                </section> 
                
                <Barner />
                <BrendsBarner />
                <Product />
                <FirstCatagory />
                <Product2 />
                <News/>
                <HomeBlog />
             {/* <FollowUs /> */}
             <HotCatagories />
             <EndBarner/>
            </div>
        );
    }
}

export default Home;