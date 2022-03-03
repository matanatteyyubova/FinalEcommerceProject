import React from "react";
import { Link } from "react-router-dom";
import loginImg from '../assets/img/loginImg.jpg'


const Giris = () => {
  return (
    <div className="login-sec">
      <div className="container">
        <div className="login-form">
          <div className="login-text">
            {/* <div className="giris-icon "><i class="fa-solid fa-circle-user"></i></div> */}

          </div>
          <form>
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
            <label for="pword">
              {" "}
              Şifrə <span>*</span>
            </label>{" "}
            <br />
            <input
              type="password"
              id="pword"
              name="pword"
              placeholder="Password"
              className="one"
              required
            />
            <br />
            <br />
            <input
              type="checkbox"
              id="check1"
              name="check1"
              value="meni xatirla"
            />
            <label for="check1">Məni xatırla </label>
            <br />
            <button id="submit" type="submit">
              Daxil ol
            </button>
            <div className="social">
              <button id="face">
                {" "}
                <i class="fa-brands fa-facebook-f"></i> Facebook hesabınızla
                daxil olun
              </button>{" "}
              <br />
              <button id="google">
                <i class="fa-brands fa-google-plus-g"></i> Google hesabınızla
                daxil olun
              </button>
            </div>
            <br />
            <br />
            <div className="info">
              <Link to="/qeydiyyat" style={{ textDecoration: "none" }}>
                {" "}
                <p>Hesab yarat</p>
              </Link>
              <p>Şifrənizi unutmusuz?</p>
            </div>
          </form>
        </div>
        <div className="login-page-img">
            <h2 className="text-center">XOŞ GƏLMİSİNİZ !</h2>
         <img src={loginImg} alt="err" />
        </div>
      </div>
    </div>
  );
};

export default Giris;
