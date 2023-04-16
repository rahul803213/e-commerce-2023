import wishlistActionTypes from "./wishlist.types"

export const add_item_in_wishlist =(item) =>({
    type:wishlistActionTypes.ADD_ITEM_WISHLIST,
    payload:item
})

export const clear_item_from_wishlist = (item)=>({
    type:wishlistActionTypes.CLEAR_ITEM_FROM_WISHLIST,
    payload:item
})
