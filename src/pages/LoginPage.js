/** @format */

import React from 'react';
import { useState, useEffect } from 'react';
import { useAuth } from '../hooks/UseAuth';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [password, confirmPassword] = useState('');
  const [email, confirmEmail] = useState('');

  const [loginMessage, setLoginMessage] = useState('');
  const [alertMesssage, setAlertMessage] = useState('');
  const auth = useAuth();

  const navigate = useNavigate();

  return (
    <div>
      <h1 className='spin'>Login Page</h1>
      <div className='Registration-Sign-up'>
        <label> Email</label>
        <input
          style={{ width: 200, height: 25 }}
          onChange={e => {
            confirmEmail(e.target.value);
          }}
          type='email'></input>
        <label>Password</label>

        <input
          style={{ width: 200, height: 25 }}
          onChange={e => {
            confirmPassword(e.target.value);
          }}
          type='password'></input>
        <h3>{alertMesssage}</h3>
      </div>
      <button
        onClick={async () => {
          const results1 = await auth.login(email, password); // you have acess to the sever side    res.status(200).json({success:true,token:token}) property and values;
          console.log(results1);
          if (results1.success) {
            navigate('/');
          }
          if (!results1.success) {
            setAlertMessage(results1.message);
          }
        }}>
        Sign In
      </button>
    </div>
  );
};
