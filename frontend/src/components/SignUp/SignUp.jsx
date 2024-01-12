import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import "./SignUp.css";

import user_icon from "../../Assets/person.png";
import email_icon from "../../Assets/email.png";
import password_icon from "../../Assets/password.png";
import { signupAction } from './SignUpAction';

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signupData = useSelector((state) => state.signupReducer.signupData);
  const loading = useSelector((state) => state.signupReducer.loading);

  const [isBtnClicked, setIsBtnClicked] = useState(false);
  
  const handleSubmit = (formData) => {
    formData.preventDefault();
    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    const payload = {
      username: nameValue,
      email: emailValue,
      password: passwordValue
    };
    dispatch(signupAction(payload));
    return null;
  };

  useEffect(() => {
    if(signupData) {
      return navigate('/login');
    }
  },[signupData]);

  return (
    <form onSubmit={(values)=> handleSubmit(values)} id="signup_form_id">
    <div className="container">
      <div className="header">
        <div className="text">SignUp</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt="" />
          <input type="text" className="" placeholder='Name' name="name" id="name" disabled={loading} required/>
        </div>
        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" className="email" placeholder='Email Id' name="email" id="email" disabled={loading} required/>
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" className="password" placeholder='Password' name="password" id="password" disabled={loading} required/>
        </div>
      </div>
      <div className="forgot-password" id="login-link">Already have an account? <span><Link to='/Login'>Click Here! </Link></span></div>
      <div className="submit-container">
        <input className={loading ? "submit gray" : "submit"} type="submit" id="signup_btn" value="Sign Up" disabled={loading}/>
      </div>
      {/* <div className="create-account">Create an account <span><Link to='/Login'>Login </Link></span></div> */}
    </div>
    </form>
  )
}

export default SignUp