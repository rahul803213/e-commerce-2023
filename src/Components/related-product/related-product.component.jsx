import React from "react";
import './related-product.styles.scss'
import CollectionMenu from "../collection-menu/collection-menu.component";
import { useSelector } from "react-redux";
const RelatedProduct = (props) =>{
 console.log(props);
 const items = useSelector((state)=>
 state.shop.collections.find(collection=>collection.title.toLowerCase()===props.title));

    return(
        <div className="related-product-parent">
         <h2 style={{padding: '1rem 1.2rem'}}> Related Product </h2> 
           <div className="related-page">
            { 
                items.items.filter((collection,idx)=>idx<5).map(collection => 
                <CollectionMenu key={collection.id} item={collection} related title={props.title}/>)
            }
        </div>
        </div>
    )

}
export default RelatedProduct;