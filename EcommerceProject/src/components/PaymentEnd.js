import React from 'react';
import { Link } from "react-router-dom";

const PaymentEnd = () => {
    return (
        <div className='paymentend-sec'>
           <div className="container">
           <div className="checkout-text">
          <h2 className="text-center">Sifariş Formu</h2>
        </div>
               <div className="paymentend-form">
               <div className="levels">
                <div className="left">
                    <div className="box"><i class="fa-solid fa-check"></i></div>
                    <h4>Təslimat addressi</h4>
                </div>
                <div className="line"></div>
                <div className="right">
                    <div className="box"><i class="fa-solid fa-check"></i></div>
                    <h4>Ödəniş təfərrütı</h4>
                </div>
            </div>
            <div className="row">
                <div className="col col-lg-12 text-center">
                    <div className="payend">
                     <h3><span>Təbriklər!</span>Əməliyyatınız uğurla tamamlandı.</h3> 

                     <Link to="/"><button className="end">BACK TO HOME</button></Link>
                    </div>
                </div>
            </div>
               </div>
           </div>
        </div>
    );
};

export default PaymentEnd;