import React,{useState} from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import buts1 from '../assets/img/buts1.jpg'
import buts2 from '../assets/img/buts2.jpg'
import buts3 from '../assets/img/buts3.jpg'
import buts4 from '../assets/img/buts4.jpg'
import buts5 from '../assets/img/buts5.jpg'



const ProductDetails = () => {
   const [isActiveBtn ,setIsActiveBtn ] =useState(0);
   
    return (
        <div className='pdetails'>
            <div className="row">
                <div className="col col-lg-5">
                <Carousel infiniteLoop >
              <div className="image">
                  <img src={buts1} alt="" />
              </div>
              <div className="image">
                  <img src={buts2} alt="" />
              </div>
              <div className="image">
                  <img src={buts3} alt="" />
              </div>
              <div className="image">
                  <img src={buts4} alt="" />
              </div>
              <div className="image">
                  <img src={buts5} alt="" />
              </div>
        </Carousel>  
                </div>
                <div className="col col-lg-7">
                  <div className="item-info-box1">
                    <h1>Buts Super Copa</h1>
                    <p>Məhsul kodu: SCOMW.804.FG</p>
                    <p>Brend: <span>Joma</span></p>
                  </div>
                  <div className="item-info-box2">
                    <h1 className='price'>125 AZN</h1>
                    <h5>Ölçülər</h5>
                    <div className="size-buttons">
                      <button  className={`${isActiveBtn ===0? 'active':'null'}`} onClick={()=>{setIsActiveBtn(0)}}>42.5</button>
                      <button className={`${isActiveBtn ===1? 'active':'null'}`} onClick={()=>{setIsActiveBtn(1)}} >43</button>
                      <button className={`${isActiveBtn ===2? 'active':'null'}`} onClick={()=>{setIsActiveBtn(2)}} >43.5</button>
                      <button className={`${isActiveBtn ===3? 'active':'null'}`} onClick={()=>{setIsActiveBtn(3)}} >44</button>
                    </div>
                    <div className="item-counts">
                    <input type="number" id="quantity" name="quantity" min="1" max="5"/>
                    <button id='sebet'>SƏBƏTƏ AT</button>
                    <button id='sifaris'>SİFARİŞ ET</button>
                    </div>
                    <p>Kateqoriya: <span>Futbol ayaqqabıları</span></p>
                    <p>Teqlər: <span>buts,futbol</span></p>
                  </div>
                  <div className="item-info-box3">
                    <p>Mövcudluq: <span>Stokda var</span></p>
                    <div className="likes">
                      <div className="onediv"><i class="fa-solid fa-heart"></i></div>
                      <div className="onediv"><i class="fa-solid fa-code-compare"></i></div>
                    </div>
                  </div>
                  <div className="item-info-box4">
                    <p>Paylaş</p>
                    <div className="social-web">
                      <div className="whatsapp">
                      <i class="fa-brands fa-whatsapp"></i>
                      </div>
                      <div className="facebook">
                      <i class="fa-brands fa-facebook-f"></i>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;