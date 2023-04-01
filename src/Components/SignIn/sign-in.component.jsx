import React from "react";
import './sign-in.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignIn extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            email:"",
            password:""
        }
    }

handleSubmit = (event) =>{

    event.preventDefault();
    this.setState({email:"",password:""});
}
handlechange = event =>{
    const {value,name}=event.target;

    this.setState({[name]:value});
}


    render(){
        console.log(this.state);
        return(
            <div className="sign-in">
                <h2>I HAVE ALREADY AN ACCOUNT</h2>
                <span>sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    handelChange={this.handlechange}
                    label="email"
                    required />
                    
                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    handelChange={this.handlechange}
                    label="password"
                    required />
                    

                    <CustomButton type="submit">sign in </CustomButton>
                    <CustomButton type="google-login submit">sign in </CustomButton>

                </form>
            </div>
        )
    }
}
export default SignIn;