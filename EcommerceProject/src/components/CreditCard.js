
import React, { useState } from 'react'
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import { useCart } from "react-use-cart";
import { Link } from "react-router-dom";

function CreditCard () {
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
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')

  return (

    <div className='payment-sec'>
               {/* ***************Payment*********** */}
      <div className="container mt-5">
        <div className="card-react">
        <Cards
        number={number}
        name={name}
        expiry={expiry}
        cvc={cvc}
        focused={focus}
      />
        </div>
        <div className="payment_form">
      
          <form action>
            <br /><br />
            <div className="wrapperr">
              <label htmlFor="cc-number-input">Kart nömrəsi</label>
              <input
              maxLength={16}
          type='tel'
          name='number'
          placeholder='Card Number'
          value={number}
          onChange={e => setNumber(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
              <br /> 
              <label htmlFor="cc-number-input">Adınız</label>
          <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
              <div className="payment_content">
                <span>
                  <label htmlFor="cc-expiry-input">Bitmə tarixi</label> <br />
               <input
          className='cc-expiry-input'
          type='text'
          name='expiry'
          placeholder='MM/YY '
          value={expiry}
          maxLength={4}
          onChange={e => setExpiry(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
                </span>
                <span>
                  <label htmlFor="cc-cvc-input">CVV</label> <br />
             <input
          className='cc-cvc-input'
          maxLength={3}
          type='tel'
          name='cvc'
          placeholder='CVC'
          value={cvc}
          onChange={e => setCvc(e.target.value)}
          onFocus={e => setFocus(e.target.name)}
        />
                </span>
              </div>
              <br /> 
              <h4>Ödəniş məlumatları</h4>
              <br />
              <p className="paymant_amount">Ödəniş məbləği</p>
              <p className="price">{cartTotal} <span>AZN</span></p>
              
              <Link to="/paymentend"> <button type="submit">Ödəniş et</button></Link>
            </div> 
          </form>
        </div>
      </div>
      {/* ***************Payment End*********** */}

        </div>
  )
}

export default CreditCard