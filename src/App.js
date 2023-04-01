import './App.css';
import { Route , Routes } from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import SignInAndSignUpPage from './pages/SignInAndSignUpPage/sign-in-and-signup.component';
import Header from './Components/header/header.component';


const HatsPage = () => {
  return(
    <div>
      <h1>HAT PAGE</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route exact path="/shop" element={<ShopPage />} />
      
      <Route exact path="/signin" element={<SignInAndSignUpPage />} />
        <Route exact path="/shop/hats" element={<HatsPage />} />
</Routes>
      
    </div>
  );
}

export default App;
