import React from "react";
import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import { signInWithGoogle ,signInWithFacebook} from "../../firebase/firebase.utils";
//import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

handleSubmit = async event => {

    event.preventDefault();
    const {email,password}=this.state;

    try{
        await auth.signInWithEmailAndPassword(email,password);
        this.setState({email:"",password:""});

    }
    catch(error){
        console.log(error);
    }

    
}
handlechange = event =>{
    const {value,name}=event.target;

    this.setState({[name]:value});
}


    render(){
      //  console.log(this.state);
        return(
            <div className="sign-in">
                <h2>I HAVE ALREADY AN ACCOUNT</h2>
                <span>Sign In With Your Email And Password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    handelchange={this.handlechange}
                    value={this.state.email} 
                    label="email"
                    required />
                    
                    <FormInput 
                    type="password" 
                    name="password" 
                    handelchange={this.handlechange}
                    value={this.state.password} 
                    label="password"
                    required />
                    
                  <div className="sign-in-buttons">
                    <CustomButton type="submit">sign in </CustomButton>
                    <CustomButton onClick={signInWithGoogle}  isGoogleSignIn>sign in with google</CustomButton>
                    <CustomButton onClick={signInWithFacebook} > sign in with facebook</CustomButton>
                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn;