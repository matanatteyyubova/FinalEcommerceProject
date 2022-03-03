import React  from 'react';
import logolight from '../assets/img/logolight.png';
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer=()=> {
    const { t } = useTranslation();

        return (
            <div>
               <footer>
                   <div className="footer_top">
                       <div>
                       <p>{t('text76')}</p>
                       <form action="">
                           <input type="email" placeholder='E-mail' required/>
                           <button type='submit'><i class="fas fa-arrow-right"></i></button>
                       </form>
                       </div>
                   </div>
                   <div className="footer_bottom">
                    
                        <div className="row">
                            <div className="col col-lg-8">
                            <div className="footer_left">
                                <img src={logolight} alt="" />
                                <p>{t('text77')}<br /> {t('text771')}</p>
                                <ul>
                                    <li><a href="#">{t('text78')}</a></li>
                                    <li><a href="#">{t('text79')}</a></li>
                                    <li><a href="#">{t('text80')}</a></li>
                                    <li><a href="#">{t('text81')}</a></li>
                                </ul>
                                <p>© 2022 <span> ESPORT MMC</span> {t('text82')} <span>TOMIX DIGITAL</span>.</p>
                            </div>
                            </div>
                            <div className="col col-lg-4">
                                <div className="footer_right">
                                    <h5>{t('text83')}</h5>
                                    <ul>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Instagram</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href="#">Linkedin</a></li>
                                        <li><a href="#">YouTube</a></li>
                                        <li><a href="#">Telegram</a></li>
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>
                   
                   </div>
               </footer>
            </div>
        );
    
}

export default Footer;