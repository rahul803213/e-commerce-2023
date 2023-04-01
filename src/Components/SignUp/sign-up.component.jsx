import React from "react";
import './sign-up.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:"",
            name:"",
            confirm_password:""
        }
    }

    handleChange = event =>{
        const {name,value} =event.target;

        this.setState({[name]:value});
    }
render(){
    return(
        <div className="sign-up">
            <h2>Create an Account</h2> 
            <h5>It's quick and easy way</h5> 
        <form>

        <FormInput 
            type="name"
            name="name"
            value={this.state.name}
            handleChange={this.handleChange}
            label="display name"
            required
            />

            <FormInput 
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
            />
            <FormInput 
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
            />

<FormInput 
            type="password"
            name="confirm-password"
            value={this.state.confirm_password}
            handleChange={this.handleChange}
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