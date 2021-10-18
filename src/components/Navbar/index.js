import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,

} from './NavbarElements';
import Side  from  './Side' ;

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <h1>Dallali Manel</h1>
        </NavLink>
        <Side />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/services' activeStyle>
            Services
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        
      </Nav>
    </>
  );
};

export default Navbar;