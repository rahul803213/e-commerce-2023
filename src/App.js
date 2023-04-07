import './App.css';
import React from 'react';
import { Route , Routes ,Navigate } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/sign-in-and-signup.component';
import Header from './Components/header/header.component';
import DescriptivePage from './Components/Descriptive/Descriptive.component';
import { connect } from 'react-redux';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';



class App extends React.Component {
 
  unsubscribeFromAuth=null;


componentDidMount(){
  
this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
  const {setCurrentUser} = this.props;
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
        <Route exact path="/shop" element={<ShopPage />} />
        
        <Route exact path='/signin' element = {this.props.currentUser ? <Navigate to="/" /> :<SignInAndSignUpPage />} />
      
        <Route exact path="/description" element={<DescriptivePage/>}/>
  </Routes>
        
      </div>
    );
  }
  
}
const mapStateToProps = ({user}) =>({
  
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch =>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);//connect is HOC HIGH ORDER COMPONENT 
