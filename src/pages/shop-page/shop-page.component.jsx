import React from "react";
import CollectionPreview from "../../Components/collection-preview/collection-preview.component";
import './shop-page.styles.scss';
import SHOP_DATA from "./shop-page.data"; 

class ShopPage extends React.Component{
    constructor(){
        super();

        this.state={
            collections:SHOP_DATA
        }
    }
    
    render(){
const {collections}=this.state;
return(
    <div className="shop-page">
        <h1>Collections</h1>
    { collections.map(({id,...collection})=>(
        <CollectionPreview key={id} {...collection} />
    ))}
    </div>
)



    }
    
}
export default ShopPage;