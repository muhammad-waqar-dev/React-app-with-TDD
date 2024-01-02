import React, {useState} from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';

import user_icon from "../../Assets/person.png";
import email_icon from "../../Assets/email.png";
import password_icon from "../../Assets/password.png";


const SignUp = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  
  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" className="email" placeholder='Email Id'/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" className="password" placeholder='Password'/>
        </div>
      </div>
      <div className="forgot-password">Forget Password <span><Link to='/forgotPassword'>Click Here! </Link></span></div>
      <div className="submit-container">
        <div className={isBtnClicked ? "submit gray" : "submit"}>Login</div>
      </div>
      <div className="create-account">Create an account <span><Link to='/forgotPassword'>SignUp </Link></span></div>
    </div>
  )
}

export default SignUp