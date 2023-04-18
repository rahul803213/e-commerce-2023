import React from "react";
import CollectionOverview from "../../Components/collection-overview/collection-overview.component";
import './shop-page.styles.scss';
import CollectionPage from "../collectionPage/collection-page.component";
import { firestore } from "../../firebase/firebase.utils";
import { Route, Routes } from "react-router-dom";
import DescribePage from "../../Components/item-descriptivePage/describeItem.component";
import { converCollectionsToMaps } from "../../firebase/firebase.utils";
import { connect } from "react-redux";
import { UpdateCollection } from "../../redux/shop/shop.actions";
import WithSpinner from "../../Components/with-spinner/with-spinner.components";
import { createStructuredSelector } from "reselect";
import { selectCollections } from "../../redux/shop/shop.selectors";


const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const DescribePageWithSpinner = WithSpinner(DescribePage);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component  { 
  
state = {
    loading:true
}

   unsubscribeFromSnapshot = null;
componentDidMount(){
    const {UpdateCollection}=this.props;
    const collectionRef = firestore.collection('collections');
   // console.log({"collectionRef":collectionRef});
    this.unsubscribeFromSnapshot= collectionRef.onSnapshot(async snapShot=>{
     const collectionsMap= await converCollectionsToMaps(snapShot);
    UpdateCollection(collectionsMap);
    this.setState({loading:false});
   // console.log('loading state changes to false')
    }) 
    
   
}



    render(){
        const {loading} =this.state;
       // console.log(loading)
return(
    <div className="shop-page">
        
        <Routes>
        <Route exact path='/' element={<CollectionOverviewWithSpinner isLoading={loading}  />} />
        <Route exact  path='/:param' element ={<CollectionPageWithSpinner  isLoading={loading} />}  />
        <Route  exact path='/:param1/:param2' element={<DescribePageWithSpinner isLoading={loading} />} />
        
        </Routes>
      
        
    
    </div>
)
    }

}
const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

const MapDispatchToProps = dispatch =>({
    UpdateCollection: collectionsMap => dispatch(UpdateCollection(collectionsMap))
})


export default connect(mapStateToProps,MapDispatchToProps)(ShopPage);