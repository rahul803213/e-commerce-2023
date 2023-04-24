import CartActionTypes from "./cart.types";

export const toggleCartHidden=()=>({
type:CartActionTypes.TOGGLE_CART_HIDDEN
})

export const addItems = (item) => ({
    type:CartActionTypes.ADD_ITEMS,
    payload:item
})

export const clearItemFromCart = (item) =>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload:item
})

export const decrementItemFromCart = item =>({
    type:CartActionTypes.DECREMENT_ITEM,
    payload:item
})

export const updateCart = item =>({
    type:CartActionTypes.UPDATE_CART_ITEMS,
    payload:item
})