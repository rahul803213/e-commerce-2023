import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import CartReducer from "./cart/cart.reducer";
import directoryReducer from "./directory/directory.reducer";
import shopReducer from "./shop/shop.reducers";
import wishlistReducer from "./wishlist/wishlist.reducer";

import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
const persistConfig ={
    key:'root',
    storage,
    whitelist:['cart','wishlist']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:CartReducer,
    directory:directoryReducer,
    shop:shopReducer,
    wishlist:wishlistReducer
})

export default persistReducer(persistConfig,rootReducer) 