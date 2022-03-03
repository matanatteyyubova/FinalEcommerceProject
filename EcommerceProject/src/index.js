import React ,{useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { css } from "@emotion/react";
// import App from './components/App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import './assets/sass/style.css';
import AppRouter from './routers/AppRouter'
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';
import BackToTopButton from './components/BackToTopButton'
// import 'flag-icon-css/css/flag-icon.min.css'



i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector) 
  .use(HttpApi)
  .init({
    supportedLngs:['az','en'],
    fallbackLng: "en",
    detection:{
      order: [ 'cookie','htmlTag','localStorage', 'path', 'subdomain'],
      caches :['cookie'],
    },
    backend:{
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
    react: {useSuspense:false},
  });

  const override = css`
  display: block;
  margin: 300px auto;
  border-color: red;
`;


const App=()=>{
  const [loading,setLoading] = useState(false);
   
  useEffect( ()=>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    },6000)
  },[]) 
  

  return(
  <div >

        
    {
      loading ?
      <ClimbingBoxLoader
       color={"#ff0c00"}
        loading={loading} 
        size={30} 
        css={override} 
        />
      :

      <AppRouter />
     
    }
       
    < BackToTopButton /> 
  </div>
    
  );
}








ReactDOM.render( <App />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

