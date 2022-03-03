import React,{useEffect,useState} from 'react';

const BackToTopButton = () => {
    const [backToTopButton, setBackToTopButton] =useState(false);

    useEffect(() =>{
         window.addEventListener("scroll",() =>{
          if(window.scrollY >100){
             setBackToTopButton(true) 
          } else{
            setBackToTopButton(false) 
          }
         } )
    },[])
     
    const scrollUp =() =>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return (
        <div>
            {
                backToTopButton && (
                    <button 
                    className='scrollUp'
                    style={{
                        position:"fixed",
                        bottom:"50px",
                        right:"50px",
                       
                    }}
                    onClick={scrollUp}
                    >
                        
                    <i class="bi bi-arrow-up"></i></button>
                )
            }
        </div>
    );
};

export default BackToTopButton;