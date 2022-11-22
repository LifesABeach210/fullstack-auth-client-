/** @format */

import React from 'react';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalLayout } from './layouts/GlobalLayout';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegistrationPage } from './pages/RegistrationPage';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <GlobalLayout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/login', element: <LoginPage /> },
        { path: '/register', element: <RegistrationPage /> },
      ],
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
