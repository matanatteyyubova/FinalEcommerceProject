import React from 'react';
import { Link } from "react-router-dom";


const Qeydiyyat = () => {
    return (
        <div className='qeydiyyat-sec'>
        <section class="wrapper">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
    
    </section>
            <div className="container">
                <div className="registr-form">
                <div className="login-text">
                 <h1 className='text-center'>Qeydiyyat</h1>
             </div>
                    <form >
                <label for="name">Ad <span>*</span></label> <br />
                <input type="text" id="name" name="name"  className='one' required />
                 <br /> <br />
                 <label for="lname">Soyad <span>*</span></label> <br />
                <input type="text" id="lname" name="lname"  className='one' required />
                 <br /> <br />
                 <label for="phone">Telefon <span>*</span></label> <br />
                <input type="tel" id="phone" name="phone"  className='one' required />
                 <br /> <br />
                 <label for="unvan">Ünvan </label> <br />
                <input type="text" id="unvan" name="unvan"  className='one'  />
                 <br /> <br />
                <label for="email">E-mail <span>*</span></label> <br />
                <input type="email" id="email" name="email" placeholder="Email " className='one' required />
                 <br /> <br />
                 <label for="pword"> Şifrə  <span>*</span></label> <br />
                <input type="password" id="pword" name="pword" placeholder="Password" className='one' required/>
                <br /><br />
                <label for="tekrarpword"> Şifrənin təkrarı  <span>*</span></label> <br />
                <input type="password" id="tekrarpword" name="tekrarpword" placeholder="Confirm Password" className='one' required/>
                <br /><br />
                <input type="checkbox" id="check1" name="check1" value="meni xatirla" />
                 <label for="check1"> <span>Qaydalar və Şərtləri</span> oxudum və qəbul edirəm </label>
                 <br /> 
                 <input type="checkbox" id="check2" name="check2" value="meni xatirla" />
                 <label for="check2"> Abunə olmaq istəyirəm </label>
                 <br /> <br />
                <Link to="/qeydiyyatend"> <button id='submit2' type='submit'>Qeydiyyatdan keç</button></Link>
                 <br /><br />
                
              <div className="giris">
              <Link to="/giris" style={{ textDecoration: "none" }}> <p>Daxil ol</p></Link>
              </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Qeydiyyat;