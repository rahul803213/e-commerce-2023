import React from "react";
import CollectionOverview from "../../Components/collection-overview/collection-overview.component";
import './shop-page.styles.scss';
import CollectionPage from "../collectionPage/collection-page.component";
import { firestore } from "../../firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";
import DescribePage from "../../Components/item-descriptivePage/describeItem.component";

class ShopPage extends React.Component  { 
 
componentDidMount(){
    const collectionRef = firestore.collection('collections');
    console.log(collectionRef);
    collectionRef.onSnapshot(async snapShot=>{
        console.log(snapShot.docs);
    })
}



    render(){
return(
    <div className="shop-page">
        
        <Routes>
        <Route path='/' element={<CollectionOverview  />} />
        <Route path='/:param' element ={<CollectionPage  />}  />
        <Route path='/:param1/:param2' element={<DescribePage />} />
        
        </Routes>
      
        
    
    </div>
)
    }

}



export default ShopPage;