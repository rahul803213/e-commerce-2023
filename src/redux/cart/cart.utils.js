

export const addItemToCart = (cartItems,cartItemToAdd) =>{
const existingCartitem = cartItems.find(
    cartItem=> cartItem.id===cartItemToAdd.id
    )
console.log(existingCartitem)
    if(existingCartitem){
      return cartItems.map(cartItem=>
        cartItem.id===cartItemToAdd.id ? {...cartItem,quantity:cartItem.quantity+1} : cartItem
       )
    }
    return[...cartItems,{...cartItemToAdd,quantity:1}]
}