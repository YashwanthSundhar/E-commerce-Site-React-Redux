import React from 'react'

import './App.css';
import './Site.css'
import { useRef, useState } from 'react';
import Form from './Form';
import {useSelector, useDispatch} from 'react-redux'
import {UserSignin} from './SiteActions/SignupAction'
import { useNavigate } from 'react-router-dom';
import Home from './Home';
import Cart from './Cart';
import { func } from 'prop-types';


function Login() {
    const [username,Setusername] = useState('')
    const [password,Setpassword] = useState('')
    const [email,Setemail] = useState('')
    const [contact,Setcontact] = useState('')
    const UserState = useSelector(state => state.SiteOverview.UserDetails)

    const history = useNavigate()

function SignInAction()

{
   {UserState.map((CheckUser)=>{
       
    if(CheckUser.Username === username && CheckUser.Password && CheckUser.Email === email)
    {
        

            history('/Home')

        
    }
    else{
        history('/UserSignUp')
    }
   })}

}

function NewAccount()
{
    history('/UserSignUp')
}
  return (
      <>
      <div className="App">
     <div className='Site-Header'>
         <h5>E-Cart Redux</h5>
     </div>

      <div className='Signup-Container'>
        <h2 className='SignUp-head'>Login</h2>
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

        <button 
        className='SignUp-btn' 
        onClick={SignInAction}>Login
        </button>

        <button 
        className='SignUp-btn' 
        onClick={NewAccount}>New-User
        </button>

       
      </div>
      <div className='Footer'>
          
      </div>
    </div>
     </>
   
  )
}

export default Login