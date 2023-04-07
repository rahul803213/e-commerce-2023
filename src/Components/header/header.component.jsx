import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";

import './header.styles.scss';

const Header =({currentUser,hidden})=>{
   // console.log(CurrentUser);
const navigate=useNavigate();
    return(
        <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
      {hidden ? null :
      <CartDropdown />}
    </div>
  
  </div>
    )
}

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) =>({
   currentUser,
   hidden
})

export default connect(mapStateToProps)(Header);