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
import {BiUserCircle,BiSearch} from 'react-icons/bi'
import {MdArrowUpward} from 'react-icons/md'

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

function showSearchBox(){
  let search = document.querySelector('.slideDown');
  search.style.height = '15vh';
}

function minimiseSearchBox(){
  let container = document.querySelector('.slideDown')
  container.style.height = '0'
}

//console.log(search);
    return(
  <>
  
    <div className="grid-header">
      <div className="logo-container">
        <Link to='/'>
          <Logo className='logo' />
        </Link>
      </div>

     <div className="item-2">

      {/* slideDown search bar starts here */}
        <div className="search-icon" >
          <BiSearch onClick={showSearchBox}/>
        </div>
      {/* ends here */}
      
      {/* <Search show placeholder="Search...." handleChange={(e)=>{toggleSearch(e.target.value)}}search={search} /> */}
        <SearchCard search={search} />
        <Link className='option' to='/shop'> SHOP </Link>
        <Link to='/wishlist' style={{display:'flex', alignItems:'center'}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 16"><path d="M8.695 16.682C4.06 12.382 1 9.536 1 6.065 1 3.219 3.178 1 5.95 1c1.566 0 3.069.746 4.05 1.915C10.981 1.745 12.484 1 14.05 1 16.822 1 19 3.22 19 6.065c0 3.471-3.06 6.316-7.695 10.617L10 17.897l-1.305-1.215z" 
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

      {currentUser ? <div className="user-detail">{currentUser.email}</div> : 
      <Link to='/signin'>
        <div className="sideBoxUser">
          <BiUserCircle style={{fontSize: '1.5rem'}}/>
          <b><span>Hello, sign in</span></b>  
        </div>
      </Link>}

      <div className="side-items">
        <Link className='option' to='/shop' style={{color:'inherit'}}> Shop </Link>
      </div>

      <div className="side-items">
        <Link className='option' to='/contact'> Contact </Link>
      </div>

      <div className="side-items">
        <Link className='option' to='/checkout'> Cart </Link>
      </div>

      <div className="side-items">
        <Link className='option' to='/wishlist'> Wishlist </Link>
      </div>

      <div className="side-items">
        {currentUser ? ( <div className='option' onClick={() => auth.signOut()}> SIGN OUT </div> ) : ( <Link className='option' to='/signin'> SIGN IN </Link> )}  
      </div>
    </div>


    {/* move hidden slide downward to some height so that user can get search bar  */}

    <div className="slideDown">
      <div className="searchBarBody">
        <Search show placeholder="Search...." handleChange={(e)=>{toggleSearch(e.target.value)}}search={search} style={{width: '100%'}}/>
        {/* <SearchCard search={search} /> */}
      </div>
      <div className="goBack">
        <MdArrowUpward onClick={minimiseSearchBox}/>
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