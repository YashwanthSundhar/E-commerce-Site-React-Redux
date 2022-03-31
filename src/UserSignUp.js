import React, { useEffect } from 'react'
import './App.css';
import './Site.css'
import { useRef, useState } from 'react';
import Form from './Form';
import {useSelector, useDispatch} from 'react-redux'
import {UserSignin} from './SiteActions/SignupAction'
import { useNavigate } from 'react-router-dom';

import CustomPopup from "./CustomPopup";
export default function UserSignUp() {

  ///Use State Declaratoion
  const [username,Setusername] = useState('')
  const [password,Setpassword] = useState('')
  const [email,Setemail] = useState('')
  const [contact,Setcontact] = useState('')

  ///UseRef and History
  // const UsernameRef = useRef('1')
  // let historynext = useNavigate();

 //Redux Declaration
  
  const SignInDispatch = useDispatch();

  
 
  async function SignInAction(){

    
    if(username =="" || email =="" || password =="" || contact ==""){
        alert('Missing Credentials')
    }
    else{

      SignInDispatch(UserSignin(1,username,password,email,contact));
      // this.props.UserSignUp(1,username,password,email,contact);
      setVisibility(!visibility)

    }
    
}
const [visibility, setVisibility] = useState(false);

const popupCloseHandler = (e) => {
  setVisibility(e);
};

  
return (
  <div className="App">
    <div className='Site-Header'>
      <h5>E-Cart Redux</h5>
    </div>

    <div className='Signup-Container'>
      <h2 className='SignUp-head'>Create New Account</h2>

        <h4>Username</h4>
          <Form 
          type="text"
          value={username}
          onChange={e=>Setusername(e.target.value)}
          placeholder="Enter Username"
          />

        <h4>Password</h4>
          <Form 
          type="text"
          value={password}
          onChange={e=>Setpassword(e.target.value)}
          placeholder="Password"
          />

        <h4>Email-Id</h4>
        <Form 
          type="email"
          value={email}
          onChange={e=>Setemail(e.target.value)}
          placeholder="Email"
          />

        <h4>Contact</h4>
        <Form 
          type="text"
          value={contact}
          onChange={e=>Setcontact(e.target.value)}
          placeholder="Contact-Number"
          />

        <button 
        className='SignUp-btn' 
        onClick={SignInAction}>Submit
        </button>

        <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title={username}
      />
        
    </div>
    <div className='Footer'>
          
    </div>
  </div>
  );

}

