import React,{useEffect,useState,useRef} from 'react';
import { Link } from "react-router-dom";
import welldone from '../assets/img/welldone1.png';
import Confetti from 'react-confetti'


const RegisterEnd = () => {
    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confettiRef = useRef(null);

    useEffect(() => {
      setHeight(confettiRef.current.clientHeight);
      setWidth(confettiRef.current.clientWidth);
    }, [])

    return (
        <div className='RegisterEnd'    ref={confettiRef}>
            
            <Confetti
      width={width}
      height={"600px"}
    />
      
   
        <div className="container">
                <div className="row">
                    <div className="col col-lg-6 col-md-12 col-sm-12 col-12 ">
                        <div className="register-box">
                        <i class="bi bi-check-circle"></i>
                        <h2 className='text-center'>Qeydiyyatınız Uğurla Tamamladı.</h2>
                       <Link to="/giris"> <button>Daxil ol</button></Link>
                        </div>
                    </div>
                    <div className="col col-lg-6 col-md-12 col-sm-12 col-12 ">
                        <div className="registr-img">
                             <img src={welldone} alt="" />
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default RegisterEnd;