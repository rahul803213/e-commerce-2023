import CartActionTypes from "./cart.types";

import { addItemToCart,decrementItem } from "./cart.utils";
const INITIAL_STATE = {
    hidden:true,
    cartItems:[]
}
const CartReducer = (state=INITIAL_STATE,action)=>{
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return({
            ...state,
            hidden:!state.hidden
        })
        case CartActionTypes.ADD_ITEMS:
            return({
                ...state,
                cartItems:addItemToCart(state.cartItems,action.payload)
            })
            case CartActionTypes.CLEAR_ITEM_FROM_CART:
                return({
                    ...state,
                    cartItems:state.cartItems.filter(cartItem=>cartItem.id!==action.payload.id)
                })
            case CartActionTypes.DECREMENT_ITEM:
                return ({
                    ...state,
                    cartItems:decrementItem(state.cartItems,action.payload)
                })

            case CartActionTypes.UPDATE_CART_ITEMS:
                return({
                    ...state,
                    cartItems: action.payload
                })
        default :return state;
    }
}
export default CartReducer;