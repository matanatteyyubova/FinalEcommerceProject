import { NavLink,Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import logolight from "../assets/img/logolight.png";
import { useCart } from "react-use-cart";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import i18n from "i18next";
import i18next from "i18next";
import { ThemeProvider } from "styled-components";
import { GlobaslStyle, LightTheme, DarkTheme } from "./themes";

const languages = [
  {
    code: "az",
    name: "Azərbaycan",
    country_code: "az",
  },
  {
    code: "en",
    name: "English",
    country_code: "gb",
  },
];

const Header = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme"));

  const ThemeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");

    if (theme === "light") {
      localStorage.setItem("theme", "dark");
    } else if (theme === "dark") {
      localStorage.setItem("theme", "light");
    }
  };

  const { t } = useTranslation();
  const { totalItems } = useCart();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <ThemeProvider theme={theme === "light" ? LightTheme : DarkTheme}>
      <GlobaslStyle />
      <div className="header">
        <header>
          <div className="top-nav">
            <div className="contact-lang">
              <div className="contact">
                <p>
                  <i class="fab fa-whatsapp"></i> +994506000125
                </p>
                <p>
                  <i class="fas fa-headset"></i> 134
                </p>
                <p>
                  {" "}
                  <i class="fas fa-phone"></i> +994124091011
                </p>
              </div>
              <div className="langchange">
                <div className="dropdown">
                  <button
                    className="btn btn  dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-globe"></i>
                  </button>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    {languages.map(({ code, name, country_code }) => (
                      <li key={country_code}>
                        <button
                          className="dropdown-item"
                          onClick={() => i18next.changeLanguage(code)}
                        >
                          <span
                            className={`flag-icon flag-icon-${country_code} mx-1`}
                          ></span>
                          {name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="icons"  className={isMobile ? "mobile-icons " : "icons"} >
              <p id="partnyor">{t("text1")}</p>
              <div className="user">
                <i id="hesab" className="far fa-user"></i>{" "}
                <p id="hesab1">Hesab</p>
                <div className="user-enter">
                  <Link to="/giris" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>{t("text7")}</p>
                  </Link>
                  <Link to="/qeydiyyat" style={{ textDecoration: "none" }}>
                    {" "}
                    <p>{t("text8")}</p>
                  </Link>
                </div>
              </div>
              <i className="far fa-heart"></i>
              <Link to="/cart">
                <div className="shop">
                  <div className="bag">
                    <AiOutlineShoppingCart />
                  </div>
                  <div className="total-item"> {totalItems} </div>
                </div>
              </Link>

              <div className="light-mode">
                <button onClick={ThemeToggler}>
                  {theme === "light" ? (
                    <i class="fas fa-sun"></i>
                  ) : (
                    <i id="moon-dark" class="bi bi-moon-stars-fill"></i>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div id="header" className="container-fluid">
          <div className="logo">
            <Link to="/">
              {theme === "light" ? (
                <img className="darklogo" src={logolight} alt="" />
              ) : (
                <img className="darklogo" src={logo} alt="" />
              )}
            </Link>
          </div>
          <nav>
            <ul
              className={isMobile ? "nav-links-mobile " : "nav-links"}
              onClick={() => setIsMobile(false)}
            >
              <li>
                <NavLink to="/fitnes" activeClassName="active"> {t("text2")}</NavLink>
              </li>
              <li>
                <NavLink to="/idmancloth">{t("text3")}</NavLink>
              </li>
              <li>
                <NavLink to="/idmantype">{t("text4")}</NavLink>
              </li>
              <li>
                <NavLink to="/brends">{t("text5")}</NavLink>
              </li>
              <li>
                <NavLink to="/blog">{t("text6")}</NavLink>
              </li>
            </ul>
            <button
              className="mobile-menu-icon"
              onClick={() => setIsMobile(!isMobile)}
            >
              {isMobile ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )}
            </button>
          </nav>

          <div className="search" className={isMobile ? "mobile-search " : "search"} >
            <i class="fas fa-search" id="search"></i>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Header;
