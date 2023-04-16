import React from "react";
import './chekout-page.styles.scss'
import { connect } from "react-redux";
import CheckoutItem from "../../Components/checkout-item/checkout-item.component";
import { createStructuredSelector } from "reselect";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import blankcart from "../../assets/image/emptycart.webp"
import CustomButton from "../../Components/custom-button/custom-button.component";
import { Link } from "react-router-dom";
import StripeCheckoutButton from "../../Components/stripe-button/stripe-button.component";

const CheckOutPage = ({cartItems,total}) =>(
    <div style={{ display:"flex",justifyContent: "center"}}>
   
    { cartItems.length ?
     <div className="checkout-page">
    <div className="checkout-header">
        <div className="header-block"><span>product</span></div>
        <div className="header-block"><span>Description</span></div>
        <div className="header-block"><span>Quantity</span></div>
        <div className="header-block"><span>Price</span></div>
        <div className="header-block" ><span>Remove</span></div>
    </div>
       { cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
       <div className="total" >Total:${total}</div>
       <StripeCheckoutButton price={total}></StripeCheckoutButton>
      </div>  
        : <div> <img src={blankcart} alt="empty-cart"  />
        <Link to="/shop">
          <CustomButton >Back To Shop</CustomButton>
          </Link>
        </div>
    }
   
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage);