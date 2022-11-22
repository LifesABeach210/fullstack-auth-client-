/** @format */

import React from 'react';
import { NavBar } from '../components/NavBar';
import { Outlet } from 'react-router-dom';
export const GlobalLayout = () => {
  return (
    <div>
      GlobalLayout
      <NavBar />
      <Outlet />
    </div>
  );
};
