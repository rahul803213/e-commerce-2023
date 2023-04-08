import React from "react";
import './collection-menu.styles.scss';
import { connect } from "react-redux";
import { addItems } from "../../redux/cart/cart.actions";
import CustomButton from "../custom-button/custom-button.component";
const CollectionMenu=({item,addItems})=>{

const {imageUrl,name,price} = item;
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
       <CustomButton inverted onClick={()=>addItems(item)}>Add To Cart</CustomButton> 
    </div>)
}
const mapDispatchToProps = dispatch =>({
    addItems: item => dispatch(addItems(item))
})
export default connect(null,mapDispatchToProps)(CollectionMenu);