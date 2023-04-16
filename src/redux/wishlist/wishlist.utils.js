

export const addItemInWishlist = (wishlistItem,ItemToAdd) =>{
    const existingWishlistItem = wishlistItem.find(wishlistitem=> wishlistitem.id===ItemToAdd.id);
    if(!existingWishlistItem) return [...wishlistItem,{...ItemToAdd}];
    else return wishlistItem.filter(wishlistitem=> wishlistitem.id!==ItemToAdd.id);
}

export const removeItemFromWishlist =(alreadyinwishlist,itemtoremove) =>{
    return alreadyinwishlist.filter(a=>a.id!==itemtoremove.id)
}
export const isInWishList=(wishlistitems,item) => {
    return wishlistitems.find(a=>a.id===item.id)
}
