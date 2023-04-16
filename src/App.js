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
import { connect } from 'react-redux';
import CheckOutPage from './pages/chekout-page/chekout-page.component';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { PushCartItemsInDB } from './firebase/firebase.user';
//import DescriptionPage from './pages/Description-Page/description.component';

import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { selectCollections } from './redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';


class App extends React.Component {
//step 8: carrying from firebase.utils.js 
//In this step we declare a variable unsubscribeFromAuth and initilaize with null as no user at first.
  unsubscribeFromAuth=null;


componentDidMount(){










  //step 9: this step is very important as when we load our site
  //then we make our auth library to check is authentication changed or not
  //if so then we will save the user and process the data
this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
 // console.log(userAuth)
  const {setCurrentUser,currentUser} = this.props;
  //this.setState({CurrentUser:userAuth});

  if(userAuth){    
              
               const userRef =await createUserProfileDocument(userAuth);
              // console.log(userRef)
              //step 11: always looking for changes in userRef and the 
              //update the state on the base of listening continousay
              userRef.onSnapshot(userRef, (snapShot) => {
            //  console.log(snapShot.data());
             setCurrentUser(
                {
                  id:snapShot.id,
                  ...snapShot.data()
                }
              );
             
                                                });

              console.log("hi",currentUser)
             // SetCartItemsIntoStateFromUserAccount(userAuth.uid)
 
             }

             else{
  setCurrentUser(userAuth);
 // addCollectionAndDocumentInFirestore('collections',collectionArray.map(({title,items})=>({title,items})));
}  
//PushCartItemsInDB(userAuth.uid);

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
