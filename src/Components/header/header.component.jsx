import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { selectCarthidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";

import './header.styles.scss';

const Header =({currentUser,hidden})=>{
   // console.log(CurrentUser);
//const navigate=useNavigate();
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
//creatStructuredSelector is a function from reselect that 
// pass state to each selectors used inside
//without it the code will look like
//const mapStateToProps =state({
 // currentUser:selectCurrentUser(state),
///  hidden:selectCarthidden(state)
//})

const mapStateToProps =createStructuredSelector({
   currentUser:selectCurrentUser,
   hidden:selectCarthidden
})

export default connect(mapStateToProps)(Header);