

export const addItemToCart = (cartItems,cartItemToAdd) =>{
const existingCartitem = cartItems.find(
    cartItem=> cartItem.id===cartItemToAdd.id
    )
//console.log(existingCartitem)
    if(existingCartitem){
      return cartItems.map(cartItem=>
        cartItem.id===cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem
       )
    }
    return[...cartItems,{...cartItemToAdd,quantity:1}]
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

