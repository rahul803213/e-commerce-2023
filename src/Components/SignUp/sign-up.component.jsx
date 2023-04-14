import React from "react";
import './sign-up.styles.scss';

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import firebase from "../../firebase/firebase.utils";

class SignUp extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email:"",
            password:"",
            displayName:"",
            confirm_password:"",
            show:false,
            phone_number:"",
            final:"",
            otp:""

        }
    }

     ValidateOTP =  (event) => {
       // event.preventDefault();
        const {final,otp} =this.state;
		if (otp === null || final === null)
			return;
		final.confirm(otp).then((result) => {
			alert(result);
		}).catch((err) => {
			alert("Wrong code");
		})
	}

sendOTP =  (event) =>{
   // event.preventDefault();
   console.log({hi:"hi"})

    const {phone_number,show} = this.state;
    console.log(phone_number);
    if (phone_number === "" || phone_number.length < 10) 
    {alert("Invalid Phone Number"); 
    this.setState({phone_number:""});return;};

		let verify = new firebase.auth.RecaptchaVerifier('recaptcha-container');
		auth.signInWithPhoneNumber(phone_number, verify).then((result) => {
			this.setState({final:result});
			alert("code sent")
			this.setState({show:true});
		})
			.catch((err) => {
				alert(err);
				window.location.reload()
			});
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
    const {show} =this.state;
    return(
        <div className="sign-up">
            <div>
                <h2>DON'T HAVE  AN ACCOUNT</h2> 
            </div>
            <div>
                <span>Sign Up With Email And Password</span> 
            </div>
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

          

        <div style={{width:'70%', margin:'0 auto'}}>
            <CustomButton type="submit">Sign up</CustomButton>
        </div>
    </form>
   
        

       { !show ? 
        <div> <FormInput 
            type="number "
            name="phone_number"
            value={this.state.phone_number}
            handelchange={this.handleChange}
            label="phone number"
            required
            />
            <div id="recaptcha-container"></div>
            <CustomButton onClick={this.sendOTP} >Send OTP</CustomButton>
            </div>
           
        : <div> 
          <FormInput 
            type="number "
            name="otp"
            value={this.state.otp}
            handelchange={this.handleChange}
            label="OTP"
            required
            />
            <CustomButton onClick={this.ValidateOTP} >validate OTP</CustomButton>
            </div> }


    </div>
    );
}



}
export default SignUp;