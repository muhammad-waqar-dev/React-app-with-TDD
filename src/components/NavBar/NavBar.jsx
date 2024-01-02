import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css'
import Logo from "./Logo";
import Hamburger from "./Hamburger";

const NavBar = () => {
		const [showNavbar, setShowNavbar] = React.useState(false);
	  const isAuthenticated = false;
		const handleShowNavbar = () => {
		  setShowNavbar(!showNavbar);
		};
	  
		return (
		  <nav className="navbar">
			<div className="container">
			  <div className="logo">
				<Logo />
			  </div>
			  <div className="menu-icon" onClick={handleShowNavbar}>
				<Hamburger />
			  </div>
			  <div className={`nav-elements  ${showNavbar && "active"}`}>
				<ul>
				  <li>
					<NavLink to="/">Home</NavLink>
				  </li>
				  {
					isAuthenticated ? <li>
					<NavLink to="/Login">Logout</NavLink>
				  </li>:<>
				  <li>
					<NavLink to="/SignUp">SignUp</NavLink>
				  </li> <li>
					<NavLink to="/Login">Login</NavLink>
				  </li>
				  </>				
				  }
				</ul>
			  </div>
			</div>
		  </nav>
		);
	  };

export default NavBar;