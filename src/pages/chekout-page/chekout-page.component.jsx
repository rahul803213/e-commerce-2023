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
import { useNavigate } from "react-router-dom";

const CheckOutPage = ({cartItems,total}) =>{
    const navigate=useNavigate();
    return(
    <div style={{ display:"flex",justifyContent: "center"}}>
   
    { cartItems.length ?
    <div className="checkout-page">
    <div className="checkout-header">
        <div className="first-heading">
            <div className="header-block"><span>product</span></div>
        </div>
        <div className="second-heading">
            <div className="header-block"><span>Description</span></div>
            <div className="header-block"><span>Quantity</span></div>
            <div className="header-block"><span>Price</span></div>
            <div className="header-block" ><span>Remove</span></div>
        </div>
    </div>
       { cartItems.map(cartItem=><CheckoutItem key={cartItem.id} cartItem={cartItem}/>)}
       <div className="total" >Total:${total}</div>
{/*        <StripeCheckoutButton price={total}></StripeCheckoutButton> */}
     <CustomButton yellow onClick={()=>navigate('/payment')}>Proceed To Payment</CustomButton>
      </div>  
        : 
        <div className="emptyCart"> 
            <img src={blankcart} alt="empty-cart"  />
            <Link to="/shop" className="button">
                <CustomButton  >Back To Shop</CustomButton>
            </Link>
        </div>
    }
   
    </div>
)
}
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total:selectCartTotal
})
export default connect(mapStateToProps)(CheckOutPage);