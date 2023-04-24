import React from "react";
import './delivery-address.styles'
import { DeliveryAddressContainer,DeliveryAddressBodyContainer } from "./delivery-address.styles";
import CustomButton from "../custom-button/custom-button.component";


 const DeliveryAddress = () =>{

    return(
       <DeliveryAddressContainer>
     


       <DeliveryAddressBodyContainer>
      
       <div className="first_row">
       <input type="radio" style={{marginRight:'20px'}}/>
       <div className="name"> Rahul Kumar </div>
       <div className="address_type"> Home </div>
       <div className="contact_number"> +917050185954 </div>
       </div>
      
       <div className="actual_address">Rahul kumar , near Bhagalpur college of Engg. sabour 813210</div>
       <CustomButton yellow>Deliver Here</CustomButton>
       </DeliveryAddressBodyContainer>
      <div className="edit">Edit</div>
       </DeliveryAddressContainer>
    )
}

export default DeliveryAddress;