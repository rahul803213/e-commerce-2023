

export const addItemInWishlist = (wishlistItem,ItemToAdd) =>{
    const existingWishlistItem = wishlistItem.find(wishlistitem=> wishlistitem.id===ItemToAdd.id);
    if(!existingWishlistItem) return [...wishlistItem,{...ItemToAdd}];
    return [...wishlistItem];
}

export const removeItemFromWishlist =(alreadyinwishlist,itemtoremove) =>{
    return alreadyinwishlist.filter(a=>a.id!==itemtoremove.id)
}