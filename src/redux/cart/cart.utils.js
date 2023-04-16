import { firestore } from "../../firebase/firebase.utils";

export const addItemToCart =(cartItems,cartItemToAdd) =>{
  const existingCartitem = cartItems.find(
      cartItem=> cartItem.id===cartItemToAdd.id
      )
      var result;
  //console.log(existingCartitem)
      if(existingCartitem){
        result= cartItems.map(cartItem=>
          cartItem.id===cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem
         )
      }
     else result=[...cartItems,{...cartItemToAdd,quantity:1}]
       
     //  await collect.set(data);
     return result;
  }
  

export const decrementItem = (cartItems,cartItemToDecrement) =>{
const existingCartitem = cartItems.find(cartItem=> cartItem.id===cartItemToDecrement.id)

if(existingCartitem.quantity===1){

  return cartItems.filter(cartItem=>cartItem.id!==cartItemToDecrement.id)
}


  return cartItems.map(cartItem=> cartItem.id===cartItemToDecrement.id
    ? {...cartItem,quantity:cartItem.quantity-1}
    :
   cartItem 
    )
}

