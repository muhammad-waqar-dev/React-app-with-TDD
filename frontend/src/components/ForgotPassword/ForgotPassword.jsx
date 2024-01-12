import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./ForgotPassword.css";

import email_icon from "../../Assets/email.png";


const SignUp = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  
  return (
    <div className="container">
      <div className="header">
        <div className="text">Forgot Password</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" className="email" placeholder='Email Id'/>
        </div>
      </div>
      <div className="forgot-password">Please check your email! <span><Link to='/Login'>Login </Link></span></div>
      <div className="submit-container">
        <div className={isBtnClicked ? "submit gray" : "submit"}>Submit</div>
      </div>
    </div>
  )
}

export default SignUp