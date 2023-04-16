import React from "react";
import './collection-menu.styles.scss';
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
import Heart from "../../assets/image/heart3d.png"
import BlankHeart from "../../assets/image/heart.png"
import { add_item_in_wishlist } from "../../redux/wishlist/wishlist.action";
import { createStructuredSelector } from "reselect";
import { selectWishlistItems } from "../../redux/wishlist/wishlist.selector";
import { clear_item_from_wishlist } from "../../redux/wishlist/wishlist.action";
import { isInWishList } from "../../redux/wishlist/wishlist.utils";
//import { useLocation } from "react-router";

import { useNavigate } from "react-router";
const CollectionMenu=({item,related,addItems,add_item_in_wishlist,wishlistItems,title})=>{
  const navigate =useNavigate();

 // const location=useLocation();
 // console.log(wishlistItems);
 // console.log({"title at collection menu":title});
  const {imageUrl,name,price} = item;
    return(
    <div className={`collection-menu ${related ? 'related' : ''}`}   >
    <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        onClick={()=>
   { navigate(`/shop/${title.toLowerCase()}/${item.id}`); window.scrollTo({top:0,left:0,behavior:'smooth'}) } }
        >
       {/*  <img src={  isInWishList(wishlistItems,item) ? Heart : BlankHeart } alt="wishlist-icon" className="wishlist-icon"
         onClick={()=>{ add_item_in_wishlist(item) }}/> */}
        
       {/*  <CustomButton inverted onClick={()=>addItems(item)}><span>Add To Cart</span> </CustomButton>  */}
    </div>
    {/* <div style={{position: 'relative'}}>
        <img src={imageUrl} alt="imageUrl" style={{width: '100%', height: 'auto' }}/>
       <CustomButton inverted onClick={()=>addItems(item)}>Add To Cart</CustomButton> 
    </div> */}
    <div className="collection-menu-footer">
        <span className="name">{name}</span>
        <h3 className="price" style={{color:'green'}}>${price}
            <del style={{color: 'grey'}}>${price*3}</del>
            </h3>
       </div>
    </div>)
}
const mapDispatchToProps = dispatch =>({
    addItems: item => dispatch(addItems(item)),
    add_item_in_wishlist:item => dispatch(add_item_in_wishlist(item)),
   // clear_item_from_wishlist:item => dispatch(clear_item_from_wishlist(item))

})
const mapStateToProps =  createStructuredSelector({
    wishlistItems: selectWishlistItems
}
)

export default connect(mapStateToProps,mapDispatchToProps)(CollectionMenu);