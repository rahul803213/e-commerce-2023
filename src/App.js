import './App.css';
import React from 'react';
// import {} from 'react-icons/fa'
// import {FcGoogle} from 'react-icons/fc'
import { Route , Routes ,Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/sign-in-and-signup.component';


import WishlistPage from './pages/wishlist-page/wishlistPage.component';

import Header from './Components/header/header.component';
import DescribePage from './Components/item-descriptivePage/describeItem.component';
import { connect } from 'react-redux';
import CheckOutPage from './pages/chekout-page/chekout-page.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { addCollectionAndDocumentInFirestore } from './firebase/firebase.utils';
import DescriptionPage from './pages/Description-Page/description.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollections } from './redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {
 
  unsubscribeFromAuth=null;


componentDidMount(){
  
this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
  const {setCurrentUser,collectionArray} = this.props;
  //this.setState({CurrentUser:userAuth});
  if(userAuth){
  
               const userRef =await createUserProfileDocument(userAuth);
              // console.log(userRef)
              userRef.onSnapshot(userRef, (snapShot) => {
            //  console.log(snapShot.data());
             setCurrentUser({
                CurrentUser:{
                  id:snapShot.id,
                  ...snapShot.data()
                }
              });
             
                                                });

              //  console.log(this.state)

 
             }

             else{
  setCurrentUser(userAuth);
 // addCollectionAndDocumentInFirestore('collections',collectionArray.map(({title,items})=>({title,items})));
}

})
  }
   

    //console.log(user);
  

componentWillUnmount(){
  this.unsubscribeFromAuth();
}
  render(){
    return (
      <div className="App">
        <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop/*" element={<ShopPage />} />
        <Route exact path="/checkout" element={<CheckOutPage />} />
        
        <Route exact path='/signin' element = {this.props.currentUser ? <Navigate to="/" /> :<SignInAndSignUpPage />} />
      
        <Route exact path="/description" element={<DescriptionPage/>}/>
        <Route exact path="/wishlist" element={<WishlistPage />}/>
        
  </Routes>
        
      </div>
    );
  }
  
}
const mapStateToProps =  createStructuredSelector({
  
  currentUser: selectCurrentUser,
  collectionArray: selectCollections
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);//connect is HOC HIGH ORDER COMPONENT 
