import React from 'react'
import NavBar from '../NavBar/NavBar';

const Layout = ({ children }) =>{

  return 	<div>
  <NavBar />
  { children }
  <div>Footer---</div>
</div>
}


export default Layout;