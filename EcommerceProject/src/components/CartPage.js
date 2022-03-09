import React,{useState} from "react";
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const CartPage = () => {
  const { t } = useTranslation();

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
  if (isEmpty) return <h1 className="text-center"> Your Card is Empty</h1>;
  return (
    
    <div className="card-section">
      <div className="container">
        <h1 className="text-center">Səbət</h1>
        <div className="row">
          <div className="col col-lg-8 col-md-4 col-sm-12">
            {items.map((item, index) => {
              return (
                <div className="cart-item  " key={index} id="sebet-cart">
                  <div className="cart-img">
                    <img className="cart-img" src={item.img} alt="err" />
                  </div>
                  <div className="cart-text">
                    <div className="cart-item-text">
                      <h2> {t(item.title)}</h2>
                      <p>Say:{item.quantity} </p>
                      <h2 className="price"> {item.price} ₼</h2>
                      <div className="cart-number cart-number-danger">
                        <button
                          className="btn ms-2"
                          id="count-btn1"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity - 1)
                          }
                        >
                          -
                        </button>
                        {item.quantity}
                        <button
                          className="btn ms-2"
                          onClick={() =>
                            updateItemQuantity(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="cart-btn">
                      <button
                        className="btn  ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col col-lg-4 col-sm-12">
            <div className="cart-total " id="cart-total">
              <div className="yekun ">
                <h4>Toplam məbləğ </h4> <h4>{cartTotal} ₼</h4>
              </div>
              <p className="say">Məhsul sayı : {totalItems}</p>
              <p>Məbləğ : {cartTotal} ₼</p>
              <p>Cart : {totalUniqueItems}</p>
              <div className="col-auto d-flex align-items-center justify-content-center w-100 mt-5">
                <button className="btn1  m-2" onClick={() => emptyCart()}>
                  Təmizlə
                </button>
           <Link to="/checkout">     <button className="btn2  m-2">Sifariş et</button></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  );
};

export default CartPage;
