import React from "react";
import './sign-in-and-signup.styles.scss';

import SignUp from "../../Components/SignUp/sign-up.component";

import SignIn from "../../Components/SignIn/sign-in.component";

const SignInAndSignUpPage = () =>{



   return (
    <div className="sign-in-and-sign-up">
   
    <SignIn />
    <SignUp />
   
    </div>);
}

export default SignInAndSignUpPage;