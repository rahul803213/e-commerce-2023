import React from "react";
import './checkout-item.styles.scss'
import { connect } from "react-redux";


import { clearItemFromCart ,addItems,decrementItemFromCart} from "../../redux/cart/cart.actions";
const CheckoutItem = ({cartItem,clearItemFromCart,addItems,decrementItemFromCart}) =>{
    const {imageUrl,name,price,quantity} =cartItem;
    return(
        <div className="checkout-item">
        <div className="image-container">
        <img src={imageUrl} alt="item"  />
        </div>
           <span className="name">{name}</span>
          <span className="quantity">
            <span className="decrement" onClick={()=>decrementItemFromCart(cartItem)}>	&#10096;</span>
          {quantity}
          <span className="increment" onClick={()=>addItems(cartItem)}> &#10097;</span></span>
          <span className="price">${price}</span>
          <div className="remove-button" onClick={()=>clearItemFromCart(cartItem)}>&#10005;</div>
        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItems: item => dispatch(addItems(item)),
    decrementItemFromCart:item => dispatch(decrementItemFromCart(item))

    })

export default connect(null,mapDispatchToProps)(CheckoutItem);