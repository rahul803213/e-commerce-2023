import React from "react";
import './wishlist-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import { clear_item_from_wishlist } from "../../redux/wishlist/wishlist.action";
import { addItems } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";

const WishlistItem = ({wishlistitem,addItems,clear_item_from_wishlist}) =>{
  //  console.log(wishlistitem);
    const {name,imageUrl,price} = wishlistitem;
    return(
        <div className="wishlist-item">
              <div className="image-container">
                <img src={`${imageUrl}`} alt="wishlist-item" />
              </div>
              <div className="name">{name}</div>
              <div className="price">₹{price}</div>
         <div className="add-to-cart">
            <CustomButton onClick={()=>addItems(wishlistitem)}>Add To Cart</CustomButton>
         </div>
          <div className="remove-button" onClick={()=>clear_item_from_wishlist(wishlistitem)}>&#10005;</div>
        </div>
    )
}
const MapDispatchToProps = dispatch =>({
addItems: wishlistitem => dispatch(addItems(wishlistitem)),
clear_item_from_wishlist:item => dispatch(clear_item_from_wishlist(item))
})

export default connect(null,MapDispatchToProps)(WishlistItem);