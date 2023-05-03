import React from "react";
//componets 
import WishlistItem from "../../Components/wishlist-item/wishlist-item.component";

//connet and selector 
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectWishlistItems } from "../../redux/wishlist/wishlist.selector";
import blankwish from "../../assets/image/wishempty.webp"
import CustomButton from "../../Components/custom-button/custom-button.component";
import { Link } from "react-router-dom";

import './wishlistPage.styles.scss';

const WishlistPage = ({WishlistItems}) => {
   // console.log(WishlistItems);
    return(
        <div className="wishlist-page">
          
            { WishlistItems.length ?
                <div className="have-content">    
                    {/* <div className="wishlist-header">
                        <div className="header-block">Product</div>
                        <div className="header-block">Description</div>
                        <div className="header-block price">Price</div>
                        <div className="header-block">Add To Cart</div>
                        <div className="header-block">Remove</div>
                    </div> */}
                    { WishlistItems.map(wishlistitem => <WishlistItem key={wishlistitem.id}   wishlistitem={wishlistitem} />)}
                </div>
                :
                <div className="empty-page">
                    <img src={blankwish} alt="empty-wishlist" />
                    <Link to="/shop" className="link">
                        <CustomButton >Back To Shop</CustomButton>
                    </Link>
                </div>
            }   
    </div>
    )
}
const MapStateToProps = createStructuredSelector({
    WishlistItems: selectWishlistItems
})

export default connect(MapStateToProps)(WishlistPage);