import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './NavBar.css';
import Cookies from 'universal-cookie';
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import { removeCookies } from '../../Utility/utilities';

const NavBar = () => {
	const cookies = new Cookies();
    const navigate = useNavigate();

	const [showNavbar, setShowNavbar] = React.useState(false);
    let isAuthenticated = false;
	let useData = {};

	const handleShowNavbar = () => {
		setShowNavbar(!showNavbar);
	};

	const handleLogout = ()=>{
		removeCookies();
		return navigate('/login');
	}

	// if (isLoading) {
	// 	return <div>Loading ...</div>;
	// };

	if(cookies.get('user-credentials')){
		useData = cookies.get('user-credentials');
		isAuthenticated = true;
	}

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
								{/* <NavLink to="/Login">Logout</NavLink> */}
								<button type="link" onClick={handleLogout}>Logout</button>
							</li> : <>
								<li>
									<NavLink to="/SignUp">SignUp</NavLink>
								</li> <li>
									<NavLink to="/Login">Login</NavLink>
								</li>
							</>
						}
					</ul>
				</div>
				<div><h5>{useData?.username}</h5></div>
			</div>
		</nav>
	);
};

export default NavBar;