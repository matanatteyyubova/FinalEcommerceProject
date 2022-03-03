import { createGlobalStyle } from "styled-components"
export const LightTheme = {
    body: "#f5f5f5",
    headerColor:"red",
    stareffect:"hidden"
}

export const DarkTheme = {
    body: "#000",
    tn:"#000",
    tn1:"rgba(255, 255, 255, 0.35) 0px 5px 15px",
    link:"#fff",
    hoverLink:"red",
    darkCard:"#000",
    darkCardBorder:"3px solid red",
    brendbarner:"0.4",
    productTextColor:"#fff",
    productTextColor1:"#fff",
    productTextColor2:"#fff",
    hoverproductTextColor1:"red",
    hoverproductTextColor2:"red",
    darkmodeimg:"0.7",
    darkCardBody:"#000",
    darkCardBodyRadius:"0px 0 15px 15px ",
    addtocard:"#fff",
    sebetcolor:"#000",
    sebetTextColor:"#fff",
    sebetCartcolor:"#000",
    stareffect:"visible"

}

export const GlobaslStyle = createGlobalStyle `
body{
    background-color: ${(props)=> props.theme.body};
    color: ${(props) => props.theme.fontColor};
    
}
.fitnes-dropdown-btn{
    background-color: ${(props)=> props.theme.dropdownBtn}; 
}
#header{
     box-shadow :${(props)=> props.theme.tn1};
    background-color: ${(props)=> props.theme.tn};
    a{
        color: ${(props)=> props.theme.link};
        }
    a:hover{
    color: ${(props)=> props.theme.hoverLink};
    }
}
.brend-box{
    img{
        opacity:${(props)=> props.theme.brendbarner};
    }
}

#card-dark{
    border:${(props)=> props.theme.darkCardBorder}
    background-color: ${(props)=> props.theme.darkCard};
    #dard-mode-img{
        opacity:${(props)=> props.theme.darkmodeimg} 
    }
    button{
        color: ${(props)=> props.theme.addtocard};
    }
}

#product-name{

        color: ${(props)=> props.theme.productTextColor};
    
}
#product-name1{

    color: ${(props)=> props.theme.productTextColor1};

}
#product-name1:hover{

    color: ${(props)=> props.theme.hoverproductTextColor1};

}
.card-body{
    border-radius:${(props)=> props.theme.darkCardBodyRadius};
    background-color: ${(props)=> props.theme.darkCardBody};
    button{
        color: ${(props)=> props.theme.addtocard};
    }
    color: ${(props)=> props.theme.productTextColor2};
    #product-name2:hover{
        
    color: ${(props)=> props.theme.hoverproductTextColor2};
    }
}
#cart-total{
    background-color: ${(props)=> props.theme.sebetcolor};
    color: ${(props)=> props.theme.sebetTextColor};
}
#sebet-cart{
    background-color: ${(props)=> props.theme.sebetCartcolor};
    color: ${(props)=> props.theme.sebetTextColor}; 
   
}
.wrapper{
    visibility :${(props)=> props.theme.stareffect}
}

`;