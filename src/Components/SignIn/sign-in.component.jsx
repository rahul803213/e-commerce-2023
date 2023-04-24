import React from "react";
import './sign-in.styles.scss';
import {FcGoogle} from 'react-icons/fc'
/* import {FaMobile,FaApple, FaLinkedin, FaTwitter, FaYahoo, FaGithub} from 'react-icons/fa'
 */
import {FaFacebook} from 'react-icons/fa';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth } from "../../firebase/firebase.utils";
import { signInWithGoogle ,signInWithFacebook,} from "../../firebase/firebase.utils";
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
      //  console.log(error);
        this.setState({
            email:"",
            password:""
        })
        alert("Email Or Password is Incorrect");
       
        //return ;

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
                <div>
                    <h2> ALREADY HAVE AN ACCOUNT</h2>
                </div>
                <div>
                    <span>Sign In With Your Email And Password</span>
                </div>
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
                        <div style={{width:'70%',margin:'0 auto'}}>
                            <CustomButton type="submit">sign in </CustomButton>
                        </div>
                        
                        <div style={{}} className="signInOptions">
                            <span>Sign In with </span>
                            <FcGoogle onClick={signInWithGoogle} className='hoverIcons'/> 
                            <FaFacebook onClick={signInWithFacebook} className='hoverIcons'/> 
                        </div>

                    </div>

                </form>
            </div>
        )
    }
}
export default SignIn;