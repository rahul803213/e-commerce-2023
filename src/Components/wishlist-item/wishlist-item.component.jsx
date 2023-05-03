import React from "react";
import "./wishlist-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { clear_item_from_wishlist } from "../../redux/wishlist/wishlist.action";
import { addItems } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import {MdDelete} from 'react-icons/md'
import { Link } from "react-router-dom";

const WishlistItem = ({ wishlistitem, addItems, clear_item_from_wishlist }) => {
  //  console.log(wishlistitem);
  const { name, imageUrl, price } = wishlistitem;
  return (
    <div className="wishlist-item">
      <div className="image-area">
        <img loading='lazy' src={`${imageUrl}`} alt="produce-image" target='_blank'/>
      </div>
      <div className="item-desc">
        <div><p style={{fontSize:'1.2rem', fontWeight:'500'}}>{name}</p></div>
        <div><span style={{fontWeight:'700'}}>&#36; {price}</span></div>
      </div>
      <div className="remove-item" >
        <MdDelete onClick={() => clear_item_from_wishlist(wishlistitem)} style={{cursor: 'pointer',zIndex: '1'}}/>
      </div>
      
    </div>
  


    // <div className="wishlist-item">
    //   <div className="image-container">
    //     <img src={`${imageUrl}`} alt="wishlist-item" />
    //   </div>
    //   <div className="name">{name}</div>
    //   <div className="price">${price}</div>
    //   <div className="add-to-cart">
    //     <CustomButton onClick={() => addItems(wishlistitem)}>
    //       Add To Cart
    //     </CustomButton>
    //   </div>
    //   <div className="remove-button" onClick={() => clear_item_from_wishlist(wishlistitem)}>
    //     &#10005;
    //   </div>
    // </div>
  );
};
const MapDispatchToProps = (dispatch) => ({
  addItems: (wishlistitem) => dispatch(addItems(wishlistitem)),
  clear_item_from_wishlist: (item) => dispatch(clear_item_from_wishlist(item)),
});

export default connect(null, MapDispatchToProps)(WishlistItem);
