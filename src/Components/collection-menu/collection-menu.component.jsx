import React from "react";
import './collection-menu.styles.scss';

const CollectionMenu=({imageUrl,name,price})=>{


    return(
    <div className="collection-menu">
    <div className="image"
        style={{
            backgroundImage:`url(${imageUrl})`,
        }}
           >
           
           </div>
    <div className="collection-menu-footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
    </div>
    </div>)
}
export default CollectionMenu;