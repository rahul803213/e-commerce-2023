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
import {DescribePage} from '../item-descriptivePage/describeItem.component';
import { useLocation } from "react-router";

import { useNavigate } from "react-router";
const CollectionMenu=({item,related,addItems,add_item_in_wishlist,wishlistitems,clear_item_from_wishlist,title})=>{
  const navigate =useNavigate();
  const location=useLocation();
  console.log(location);
  console.log({"title at collection menu":title});
  const {imageUrl,name,price} = item;
const isItemalreadyinWishList = wishlistitems.find(a=>a.id===item.id);
    return(
    <div className={`collection-menu ${related ? 'related' : 'normal'}`} onClick={()=>
   { navigate(`/shop/${title.toLowerCase()}/${item.id}`); window.scrollTo({top:0,left:0,behavior:'smooth'}) } } >
    <div className="image"
        style={{
            backgroundImage: `url(${imageUrl})`,
            width: '100%', position: 'relative', height: '400px'
        }}
        >
        <img src={isItemalreadyinWishList ? Heart : BlankHeart} alt="wishlist-icon" className="wishlist-icon"
         onClick={()=>{isItemalreadyinWishList ?   clear_item_from_wishlist(item) : add_item_in_wishlist(item) }}/>
        
        <CustomButton inverted onClick={()=>addItems(item)}><span>Add To Cart</span> </CustomButton> 
    </div>
    {/* <div style={{position: 'relative'}}>
        <img src={imageUrl} alt="imageUrl" style={{width: '100%', height: 'auto' }}/>
       <CustomButton inverted onClick={()=>addItems(item)}>Add To Cart</CustomButton> 
    </div> */}
    <div className="collection-menu-footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
       </div>
    </div>)
}
const mapDispatchToProps = dispatch =>({
    addItems: item => dispatch(addItems(item)),
    add_item_in_wishlist:item => dispatch(add_item_in_wishlist(item)),
    clear_item_from_wishlist:item => dispatch(clear_item_from_wishlist(item))

})
const MapStateToProps = createStructuredSelector({
wishlistitems:selectWishlistItems
})
export default connect(MapStateToProps,mapDispatchToProps)(CollectionMenu);