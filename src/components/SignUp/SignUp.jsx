import React, {useState} from 'react';
import "./SignUp.css";

import user_icon from "../../Assets/person.png";
import email_icon from "../../Assets/email.png";
import password_icon from "../../Assets/password.png";
import { Link } from 'react-router-dom';


const SignUp = () => {
  const [isBtnClicked, setIsBtnClicked] = useState(false);
  
  return (
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" className="" placeholder='Name' />
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" className="email" placeholder='Email Id'/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" className="password" placeholder='Password'/>
        </div>
      </div>
      <div className="forgot-password">Already have an account? <span><Link to='/Login'>Click Here! </Link></span></div>
      <div className="submit-container">
        <div className={isBtnClicked ? "submit gray" : "submit"}>Sign Up</div>
      </div>
      <div className="create-account">Create an account <span><Link to='/forgotPassword'>SignUp </Link></span></div>

    </div>
  )
}

export default SignUp