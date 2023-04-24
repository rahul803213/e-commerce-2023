import React from "react";
import './checkout-item.styles.scss'
import { connect } from "react-redux";


import { clearItemFromCart ,addItems,decrementItemFromCart} from "../../redux/cart/cart.actions";
const CheckoutItem = ({cartItem,clearItemFromCart,addItems,decrementItemFromCart}) =>{
    const {imageUrl,name,price,quantity} =cartItem;
    return(
    <>  
        {/* <div className="checkout-item">
          <div className="image-container">
            <img src={imageUrl} alt="item"  />
          </div>
          <span className="name">{name}</span>
          <span className="quantity">
            <span className="decrement" onClick={()=>decrementItemFromCart(cartItem)}>	&#10096;</span>
          {quantity}
            <span className="increment" onClick={()=>addItems(cartItem)}> &#10097;</span>
          </span>
          <span className="price">${price}</span>
          <div className="remove-button" onClick={()=>clearItemFromCart(cartItem)}>&#10005;</div>
        </div> */}

      <div className="checkout-items">
        <div style={{backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', width:'100%', height: '100%', backgroundPosition:'top'}}></div>
        {/* <div className="image-container">
          <img src={imageUrl} alt="item"  />
        </div> */}
        <div className="describe">
          <div>
            <span className="name">{name}</span>
          </div>
          <div className="changer" style={{cursor: 'pointer'}}>
            <span onClick={()=>decrementItemFromCart(cartItem)}>	&#10096;</span>
              &nbsp;&nbsp;<span> {quantity} </span> &nbsp;&nbsp;
            <span onClick={()=>addItems(cartItem)}> &#10097;</span>
          </div>
          <div>
            <span className="price">${price}</span>
          </div>
          <div style={{cursor: 'pointer'}}>
            <span onClick={()=>clearItemFromCart(cartItem)}>&#10005;</span>
          </div>
        </div>
        
      </div>

    </>
    )
}
const mapDispatchToProps = dispatch =>({
    clearItemFromCart: item => dispatch(clearItemFromCart(item)),
    addItems: item => dispatch(addItems(item)),
    decrementItemFromCart:item => dispatch(decrementItemFromCart(item))

    })

export default connect(null,mapDispatchToProps)(CheckoutItem);