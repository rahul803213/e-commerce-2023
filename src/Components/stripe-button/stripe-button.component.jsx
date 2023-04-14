import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton=({price})=>{
    const priceForStripe=price*100;
    const publishableKey='pk_test_51J4cZcSJ2eXuYij2KD99cKIIL3o1i2VdATgoqLgEqeyhzV4CoEXLnAoZeA57WcjoaH4UO5waIue0113SIExUwCyg00srs2Rf7F';
    
   const onTaken=token=>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='BCE merchandise company Ltd.'
            billingAddress
            shippingAdress
            description={`Your Total Amount is INR INR{price}`}
            amount={priceForStripe}
            panelLabel='PAY NOW'
            token={onTaken}
            stripeKey={publishableKey}
            //currency: "US"

        />
    )
}
export default StripeCheckoutButton;