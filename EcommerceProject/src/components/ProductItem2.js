import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useTranslation } from "react-i18next";


const ProductItem2 = (props) => {
  const { t } = useTranslation();
  const { addItem } = useCart();
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
    return (
       
  <div  className="card" id='item'  id="card-dark">
  <img id='dark-mode-img' src={props.img} className="card-img-top" alt="err" />
  <div className="icons-text">
      <div className="boxs"><i class="far fa-heart"></i></div>
      <div className="boxs"><i class="fas fa-search"></i></div>
      <div className="boxs"><i class="far fa-copy"></i></div>
    </div>
  <div className="card-body text-center ">
  
    <h5 id='product-name2' className="card-title">{props.title}</h5>
    {modal && (
            <div className="modal-content">
              <i id="check" class="bi bi-check-circle"></i>
               <h2>SƏBƏTƏ ƏLAVƏ EDİLDİ</h2>
              <Link to="/cart" style={{ textDecoration: "none" }}> <div className="go-bag"><h5>SƏBƏT</h5></div></Link>
              <div className="close-modal" onClick={toggleModal}>
              <i class="fa-solid fa-xmark"></i>
              </div>
            </div>
          )}
    <p className="card-text">{props.desc}</p>
    <p className="card-text-price">{props.price} ₼</p>
    <button  onClick={() => {
            addItem(props.item);
            toggleModal();
          }} className="btn p-2 ps-3 pe-3">{t('text66')}</button>
  </div>
</div>
        
    )
}

export default ProductItem2