import { createSelector } from "reselect";

export const selectWishlist = state => state.wishlist;

export const selectWishlistItems =createSelector(
    selectWishlist,
    wishlist => wishlist.wishlistItems
)