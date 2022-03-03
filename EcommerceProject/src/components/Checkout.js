import React from "react";
import { Link } from "react-router-dom";


const Checkout = () => {
  return (
    <div className="checkout-sec">
      <div className="container">
        <div className="checkout-text">
          <h2 className="text-center">Sifariş Formu</h2>
        </div>
       
        <div className="checkout-form">
            <div className="levels">
                <div className="left">
                    <div className="box">1</div>
                    <h4>Təslimat addressi</h4>
                </div>
                <div className="line"></div>
                <div className="right">
                    <div className="box">2</div>
                    <h4>Ödəniş təfərrütı</h4>
                </div>
            </div>
            <div className="content-text">
            <h3>Təslimat addressi</h3>
        </div>
          <div className="row">
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="input">
                <label for="name">
                  Ad <span>*</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="one"
                  required
                />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="input">
                <label for="lname">
                  Soyad <span>*</span>
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="lname"
                  name="lname"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="input">
                <label for="phone">
                  Telefon <span>*</span>
                </label>{" "}
                <br />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="input">
                <label for="email">
                  E-mail <span>*</span>
                </label>{" "}
                <br />
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email "
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="input">
                <label for="mailcode">Poçt kodu </label> <br />
                <input
                  type="text"
                  id="mailcode"
                  name="mailcode"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="input">
                <label for="region">
                  Region <span>*</span>{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="region"
                  name="region"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="input">
                <label for="city">
                  Şəhər<span>*</span>{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>
            <div className="col col-lg-6 col-md-12 col-sm-12">
              <div className="input">
                <label for="unvan">
                  Ünvan <span>*</span>{" "}
                </label>{" "}
                <br />
                <input
                  type="text"
                  id="unvan"
                  name="unvan"
                  className="one"
                  required
                />
                <br /> <br />
              </div>
            </div>

            <div className="col col-lg-12 col-md-12 col-sm-6" id="btn">
             <Link to="/cart"> <button className="back">Geri</button></Link>
              <Link to="/checkoutdetails"><button className="next">İrəli</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
