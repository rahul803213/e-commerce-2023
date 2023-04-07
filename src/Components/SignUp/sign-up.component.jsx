import React from "react";
import './sign-up.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:"",
            displayName:"",
            confirm_password:""
        }
    }

handelSubmit = async event =>{
    event.preventDefault();
    const {email,password,displayName,confirm_password}=this.state;
    if(password !== confirm_password){
        alert("Password and Confirm Password are not same");
        return;
    }
    try{
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
        
        await createUserProfileDocument(user,{displayName});
      

        this.setState({
            email:"",
            password:"",
            displayName:"",
            confirm_password:""
        })

    }
    catch(error){
        console.log(error);
    }
}


    handleChange = event =>{
        const {name,value} =event.target;

        this.setState({[name]:value});
    }
render(){
    return(
        <div className="sign-up">
            <h2>I HAVE NOT AN ACCOUNT</h2> 
            <span>Sign Up With Email And Password</span> 
        <form onSubmit={this.handelSubmit}>

        <FormInput 
            type="text"
            name="displayName"
            value={this.state.displayName}
            handelchange={this.handleChange}
            label="display name"
            required
            />

            <FormInput 
            type="email"
            name="email"
            value={this.state.email}
            handelchange={this.handleChange}
            label="email"
            required
            />
            <FormInput 
            type="password"
            name="password"
            value={this.state.password}
            handelchange={this.handleChange}
            label="password"
            required
            />

<FormInput 
            type="password"
            name="confirm_password"
            value={this.state.confirm_password}
            handelchange={this.handleChange}
            label="confirm password"
            required
            />
<CustomButton type="submit">Sign up</CustomButton>
            </form>
        </div>
    );
}



}
export default SignUp;