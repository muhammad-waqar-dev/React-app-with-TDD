import React, {useState, useEffect} from 'react';
import "./Login.css";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'universal-cookie';

import user_icon from "../../Assets/person.png";
import email_icon from "../../Assets/email.png";
import password_icon from "../../Assets/password.png";
import { loginAction } from './LoginAction';
import Loader from '../../Shared/Loader/Loader';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();
  const loginData = useSelector((state) => state.loginReducer.loginData);
  const loading = useSelector((state) => state.loginReducer.loading);

  const [isBtnClicked, setIsBtnClicked] = useState(false);
  
  const handleSubmit = (formData) => {
    formData.preventDefault();
    const emailValue = document.getElementById('email').value;
    const passwordValue = document.getElementById('password').value;
    const payload = {
      email: emailValue,
      password: passwordValue
    };
    dispatch(loginAction(payload));
    return null;
  };

  if(cookies.get('user-credentials')){
    // Redirect to a protected route or home page
    return navigate('/');
    //return null;
  }

  return (
      <form onSubmit={(values)=> handleSubmit(values)} id="signup_form_id">
      <div className="container">
        <div className="header">
          <div className="text">Login</div>
          <div className="underline"></div>
        </div>
        <div className="inputs">
        <div className="input">
            <img src={email_icon} alt="" />
            <input type="email" className="email" placeholder='Email Id' name="email" id="email" disabled={loading}  required/>
          </div>
          <div className="input">
            <img src={password_icon} alt="" />
            <input type="password" className="password" placeholder='Password' name="password" id="password" disabled={loading}s required/>
          </div>
        </div>
        <div className="forgot-password">Forget Password <span><Link to='/forgotPassword'>Click Here! </Link></span></div>
        <div className="submit-container">
          <input className={loading ? "submit gray" : "submit"} type="submit" id="login_btn" value="Login" disabled={loading} />
        </div>
        <div className="create-account">Create an account <span><Link to='/SignUp'>SignUp </Link></span></div>
      </div>
      </form>
  )
}

export default Login