/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
export const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1>Navbar</h1>

      <Link to='/'>Home</Link>

      <Link to='/login'>Login Page</Link>

      <Link to='/register'>Regerstration</Link>
    </div>
  );
};
