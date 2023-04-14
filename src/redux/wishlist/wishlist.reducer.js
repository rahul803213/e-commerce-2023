import { addItemInWishlist,removeItemFromWishlist } from "./wishlist.utils";
import wishlistActionTypes from "./wishlist.types";

const INITIAL_STATE = {
    wishlistItems:[]
}
const wishlistReducer = (state=INITIAL_STATE,action) =>{
    switch(action.type){
          case wishlistActionTypes.ADD_ITEM_WISHLIST : 
          return ({
            ...state,
            wishlistItems : addItemInWishlist(state.wishlistItems,action.payload)
          })

          case wishlistActionTypes.CLEAR_ITEM_FROM_WISHLIST :
            return({
                ...state,
                wishlistItems:removeItemFromWishlist(state.wishlistItems,action.payload)
            })

        default: return state;
    }
}

export default wishlistReducer;