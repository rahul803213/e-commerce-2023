import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { selectCarthidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectWishlistItems } from "../../redux/wishlist/wishlist.selector";
import { connect } from "react-redux";
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import CartIcon from "../cart-icon/cart-icon.component";
import Heart from "../../assets/image/images.png";
import RedHeart from "../../assets/image/wishlist.png"
import  {Search, SearchCard } from "../search-bar/search-bar.component";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import {RxDragHandleHorizontal} from 'react-icons/rx'
import { toggleSearch } from "../../redux/search/search.actions";

import './header.styles.scss';
import { selectCollections } from "../../redux/shop/shop.selectors";

const Header =({currentUser,hidden,wishlistitems,collections,toggleSearch})=>{
  const location = useLocation();
  var show=(location.pathname=='/');
  console.log("shoe",show)
  // console.log();
//const navigate=useNavigate();
const [search,setSearch] = useState("");
console.log("collections",collections);

// const [theme,setTheme] = useState('Dark')
// function changeTheme() {
//   let bgcolor = document.body.style.backgroundColor
//   if(bgcolor === 'white') {
//     document.body.style.backgroundColor = 'black'
//     document.body.style.color = 'white'
//     setTheme('Light')
//   } else {
//     document.body.style.backgroundColor = 'white'
//     document.body.style.color = 'black'
//     setTheme('Dark')
//   }
// }

function showSideBar() {
  let ele = document.querySelector('.sideBox').style

  if(ele.width === '50%'){
    ele.width = '0%'
  }else{
    ele.width = '50%'
  }
}

//console.log(search);
    return(
  <>
  
    <div className="grid-header">
    <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
      {/* <div className="item-1">
        <Link className='logo-container' to='/'>
          <Logo className='logo' />
        </Link>
      </div> */}

     {/*  <div className="item-2">
               <Search show placeholder="Search...." handleChange={(e)=>{toggleSearch(e.target.value)}}search={search} />
        <SearchCard search={search} />
        <div >
          <Link to='/wishlist' style={{display:'flex', alignItems:'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" 
            className="like" fill={`${wishlistitems.length ? "red" : "black"}`} stroke="#FFF" fillRule="evenodd" opacity=".9" ></path></svg>
            <span></span>
          </Link>
        </div>
      </div> */}

      <div className="item-2">
      <Search show placeholder="Search...." handleChange={(e)=>{toggleSearch(e.target.value)}}search={search} />
        <SearchCard search={search} />
        <Link className='option' to='/shop'> SHOP </Link>
        <Link to='/wishlist' style={{display:'flex', alignItems:'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" 
            className="like" fill={`${wishlistitems.length ? "red" : "black"}`} stroke="#FFF" fillRule="evenodd" opacity=".9" ></path></svg>
            <span></span>
          </Link>
        <Link className='option' to='/contact'> CONTACT </Link>
    
        {currentUser ? ( <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> ) : ( <Link className='option' to='/signin'> SIGN IN </Link> )}
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </div>

    </div>

{/* mobile view header */}

    <div className="sideBoxHeader">
        <div style={{width:'20%',display: 'flex',justifyContent:'center',height:'100%'}}>
          <Link to='/'>
            <Logo className='logo' />
          </Link>
        </div>
        <RxDragHandleHorizontal style={{cursor:'pointer'}} onClick={showSideBar}/>
    </div>
    <div className="sideBox"> 

      {currentUser ? <div className="user-detail">{currentUser.email}</div> : ''}

      <div className="side-items">
        <Link className='option' to='/shop' style={{color:'inherit'}}> SHOP </Link>
      </div>

      <div className="side-items">
        <Link className='option' to='/contact'> CONTACT </Link>
      </div>

      <div className="side-items">
        {/* <CartIcon style={{background:'green'}}/> */}
        <Link className='option' to='/checkout'> Cart </Link>
      </div>

      <div className="side-items">
        <Link className='option' to='/contact'> CONTACT </Link>
      </div>

      <div className="side-items">
        {currentUser ? ( <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> ) : ( <Link className='option' to='/signin'> SIGN IN </Link> )}  
      </div>

    </div>

</>
)}

//creatStructuredSelector is a function from reselect that 
// pass state to each selectors used inside
//without it the code will look like
//const mapStateToProps =state({
 // currentUser:selectCurrentUser(state),
///  hidden:selectCarthidden(state)
//})

const mapStateToProps =createStructuredSelector({
   currentUser:selectCurrentUser,
   hidden:selectCarthidden,
   wishlistitems:selectWishlistItems,
   collections: selectCollections

})

const MapDispatchToProps = dispatch => ({
  toggleSearch: item => dispatch(toggleSearch(item))
})

export default connect(mapStateToProps,MapDispatchToProps)(Header);