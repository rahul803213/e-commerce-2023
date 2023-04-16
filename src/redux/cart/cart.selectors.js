import { createSelector } from "reselect";
//reselect is use to make a reusable mapstatetoprops module and do not render unnecessary things and save time and hence increase perfomance

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    (cart)=> cart.cartItems
)
export const selectCarthidden = createSelector(
    selectCart,
    cart => cart.hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems=>cartItems.reduce((totalCount,cartItem)=>totalCount + cartItem.quantity,0)
)
export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems=> cartItems.reduce((totalCount,cartItem)=>totalCount + cartItem.quantity*cartItem.price,0)
)