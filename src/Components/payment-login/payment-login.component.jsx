import React from "react";
import './payment-login.styles.jsx'
import { Link } from "react-router-dom";
import CustomButton from "../custom-button/custom-button.component.jsx";
import { FaTruck,FaStar,FaBell } from "react-icons/fa";
import { auth } from "../../firebase/firebase.utils.js";

import { PaymentLoginContainer,PaymentHeaderContainer,PaymentLoginBodyContainer,PaymentLoginBodyDetailContainer,PaymentLoginExtraDetailContainer } from "./payment-login.styles.jsx";
import DeliveryAddress from "../delivery-address/delivery-address.component.jsx";

export const PaymentLogin = () => {

   return(
  <PaymentLoginContainer>
  <PaymentHeaderContainer>
  
      <div className="slno">1</div>
       <div className="title"> Login</div>
  </PaymentHeaderContainer>
  <PaymentLoginBodyContainer>
       <PaymentLoginBodyDetailContainer >
             <div className="name">Name : Rahul Kumar</div>
             <div className="phone_number">Mobile : +917050185954</div>
             <Link onClick={()=>auth.signOut()}>Sign in to another account</Link>
             <CustomButton yellow style={{marginTop:'40px'}}>Continue Checkout</CustomButton>
            
       </PaymentLoginBodyDetailContainer>
      
       <PaymentLoginExtraDetailContainer >
       <div className="header">Advantages of our Secure Login</div>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <FaTruck />
        <div>Easily Track Orders , Hassel Free Returns</div>
      </div>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <FaBell />
        <div>Get Relevant Alerts and Recommendation</div>
      </div>
      <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
        <FaStar />
        <div>Wishlists, Reviews, Ratings and more...</div>
      </div>
      
       
       </PaymentLoginExtraDetailContainer>
     
  </PaymentLoginBodyContainer>
  <div className="bottom-line">Please note that upon clicking
       "Logout" you will lose all items in cart and will be redirected to Flipkart home page.</div>
  
  </PaymentLoginContainer>
    )
}

export const PaymentAddress = () => {

    return(
   <PaymentLoginContainer>
   <PaymentHeaderContainer>
   
       <div className="slno">2</div>
        <div className="title"> Payment Address</div>
   
   
   </PaymentHeaderContainer>
   <DeliveryAddress />
   </PaymentLoginContainer>
     )
 }

 export const PaymentSummary = () => {

    return(
   <PaymentLoginContainer>
   <PaymentHeaderContainer>
   
       <div className="slno">3</div>
        <div className="title"> Order Summary</div>
   
   
   </PaymentHeaderContainer>
   This is loging page
   </PaymentLoginContainer>
     )
 }

 export const PaymentOptions = () => {

    return(
   <PaymentLoginContainer>
   <PaymentHeaderContainer>
   
       <div className="slno">4</div>
        <div className="title"> Payment Options</div>
   
   
   </PaymentHeaderContainer>
   This is loging page
   </PaymentLoginContainer>
     )
 }
 

