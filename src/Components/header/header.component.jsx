import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import './header.styles.scss';

const Header =()=>{
const navigate=useNavigate();
    return(
        <div className="header">
        <div className="logo" onClick={()=>(navigate('/'))}><Logo /></div>
        <div className="header-menu">
            <Link className="header-menu-item" to="/">HOME</Link>
            <Link className="header-menu-item" to="/shop">SHOP</Link>
            <Link className="header-menu-item" to="/signin" >SIGN IN</Link>
            <Link className="header-menu-item cart-logo"> CART LOGO</Link>
        </div>
        
        </div>
    )
}

export default Header;