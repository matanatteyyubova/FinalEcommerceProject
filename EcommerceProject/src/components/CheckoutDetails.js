import React from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CheckoutDetails = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();
  const { t } = useTranslation();
  return (
    <div className="checkoutdetails-sec">
      <div className="container">
        <div className="checkout-text">
          <h2 className="text-center">Sifariş Formu</h2>
        </div>
        <div className="details-form">
          <div className="levels">
            <div className="left">
              <div className="box">
                <i class="fa-solid fa-check"></i>
              </div>
              <h4>Təslimat addressi</h4>
            </div>
            <div className="line"></div>
            <div className="right">
              <div className="box">2</div>
              <h4>Ödəniş təfərrütı</h4>
            </div>
          </div>
          <div className="content-text">
            <h3>Ödəniş təfərrütı</h3>
          </div>
          <div className="row">
            <div className="col col-lg-12">
              {items.map((item, index) => {
                return (
                  <div className="cart-item  " key={index}>
                    <div className="cart-img">
                      <img className="cart-img" src={item.img} alt="err" />
                    </div>
                    <div className="cart-text">
                      <div className="cart-item-text">
                        <h2 className="item-title"> {t(item.title)}</h2>
                        <p>{item.quantity} </p>
                        <h2 className="price"> {item.price} AZN</h2>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="col col-lg-12">
              <div className="cart-total ">
                <div className="yekun ">
                  <h4>
                    Toplam məbləğ : <span>{cartTotal} AZN</span>
                  </h4>
                </div>
                <p className="say">Məhsul sayı : {totalItems}</p>
                <p>Məbləğ : {cartTotal} AZN</p>
                <p>Cart : {totalUniqueItems}</p>
              </div>
            </div>

            <div className="col col-lg-12 " id="btn">
              <button className="back">Geri</button>
              <Link to="/payment">
                {" "}
                <button className="next">Ödəniş</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
