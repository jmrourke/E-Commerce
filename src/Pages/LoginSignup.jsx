import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" name="" id="name" placeholder='Your Name'/>
          <input type="email" name="" id="email" placeholder='Email Address'/>
          <input type="password" name="" id="pwd" placeholder='Your Password'/>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account?&nbsp;&nbsp;&nbsp;&nbsp;<span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup