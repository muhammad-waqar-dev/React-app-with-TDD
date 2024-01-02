import React from 'react'
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) =>
	<div>
		<NavBar />
    { children }
  </div>

export default Layout;